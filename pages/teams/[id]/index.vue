<script setup lang="ts">
const route = useRoute();
const user = useState("user");
import {useState} from "#app";
import {getUserLikes, addUserLike, removeUserLike} from "~/composables/useLike";

const players = ref([]);
const player = ref(null);
const config = useRuntimeConfig();
const playerLikes = ref([]);
const error = ref(null);
const loading = ref(true);


import { useHockeyApi } from '~/composables/useApi';

const {fetchPlayers, fetchPlayer} = useHockeyApi();


onMounted(async () => {
  loading.value = true;
  try {
    const response = await fetchPlayers(route.params.id.toLowerCase());
    console.log(response);
    players.value = response;

    const playerIds = [...players.value].map((player) => {
      return player.id;
    });
    playerLikes.value = await getUserLikes(playerIds.toString());
  } catch (err) {
    console.error('Failed to fetch team players:', err);
    error.value = 'Failed to fetch team players.';
  } finally {
    loading.value = false;
  }
});

// /* METHODS */

async function likePlayer(id) {
  if (!user.value) return useRouter().push("/login");
  try {
    const like = await addUserLike({playerId: id, userId: user.value.id});
    if (playerLikes.value[id]) {
      playerLikes.value[id].push({...like});
    } else {
      playerLikes.value[id] = [{...like}];
    }
  } catch (error) {
    console.log(error);
  }
}

async function unlikePlayer({id, playerId}) {
  try {
    await removeUserLike(id);
    const index = playerLikes.value[playerId].findIndex((like) => like.id === id);
    playerLikes.value[playerId].splice(index, 1);
  } catch (error) {
    console.log(error);
  }
}

async function showPlayer(id) {
  player.value = null;
  player.value = await fetchPlayer(id)

}
</script>

<template>
  <main>
    <Head>
      <Script
          defer
          data-domain="nhldfs.com"
          src="https://plausible.io/js/plausible.js"
      />
    </Head>
    <section>
      <h2 class="text-2xl mt-3 mb-4 text-center">Team Page</h2>
      <p class="text-md mb-4 text-center">Select Player to View Stats</p>
      <p class="text-md mb-4 text-center">Sign in or register to like and comment on your favorite plays</p>
      <off-canvas :player="player"/>
      <div
          class="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-3 px-4"
      >
        <player-card
            v-for="player in players"
            :user-id="user ? user.id : undefined"
            :player="player"
            :likes="playerLikes[player.id]"
            :key="player.id"
            @show-player="showPlayer"
            @like-player="likePlayer"
            @unlike-player="unlikePlayer"
        />
      </div>
    </section>
  </main>
</template>