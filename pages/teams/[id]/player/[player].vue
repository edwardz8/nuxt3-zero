<script setup>
import matchPlayerImage from "../../../../methods.js";
import {getUserLikes, addUserLike, removeUserLike} from "~/composables/useLike";
import {useState} from "#app";
import Comments from "~/components/Comments.vue";

const config = useRuntimeConfig();
const route = useRoute();

const player = ref(null);
const error = ref(null);
const loading = ref(false);
const playerLikes = ref([]);
const user = useState("user");

import {useBalldontlie} from '~/composables/useApi';

const {fetchPlayer} = useBalldontlie();


const nuxtApp = useNuxtApp()


onMounted(async () => {
  try {
    const response = await fetchPlayer(route.params.player);
    console.log(response);
    player.value = response;
  } catch (err) {
    console.error('Failed to fetch teams:', err);
    error.value = 'Failed to fetch teams.';
  } finally {
    loading.value = false;
  }
});

const likes = await getUserLikes(route.params.player);
playerLikes.value = likes[+route.params.player] ? likes[+route.params.player] : [];

const isLiked = computed(() => {
  if (!user.value) return false;
  return playerLikes.value.find((like) => like.userId == user.value.id) ? true : false;
});

const userLike = computed(() => {
  return playerLikes.value.find((like) => like.userId == user.value.id);
});

/*
=================================
          * METHODS *
=================================
*/

async function likePlayer() {
  if (!user.value) return useRouter().push("/login");
  try {
    const like = await addUserLike({playerId: player.value.id, userId: user.value.id});
    console.log("like", like);
    playerLikes.value.push({...like});
  } catch (error) {
  }
}

async function unlikePlayer(id) {
  try {
    await removeUserLike(id);
    const index = playerLikes.value.find((like) => like.id === id);
    playerLikes.value.splice(index, 1);
  } catch (error) {
  }
}


const currentSeasonStats = computed(() => {
  return player.value?.seasonTotals.find((season) => {
    return season.season === +nuxtApp.$config.public.SEASON
  });
})
</script>

<template>
  <main>
    <Head>
      <Script
          defer
          data-domain="rotorink.com"
          src="https://plausible.io/js/plausible.js"
      />
    </Head>
    <section>
      <div
          v-if="player"
          class="md:w-1/2 md:mx-auto mt-4 mx-4 flex flex-col bg-white border shadow-sm rounded-xl dark:bg-gray-800 dark:border-gray-700 dark:shadow-slate-700/[.7]"
      >
        <div class="p-4 md:p-5">
          <h2 class="text-2xl font-bold text-gray-800 dark:text-white text-center">
            {{ player.firstName.default + ' ' + player.lastName.default }}
          </h2>

          <img
              class="mx-auto rounded-t-xl w-32"
              :src="player.headshot || matchPlayerImage( player.firstName.default + ' ' + player.lastName.default)"
              alt="Player Profile"
          />

          <h5 class="text-md font-bold text-gray-800 dark:text-white text-center">
            {{ player?.fullTeamName?.default }}
          </h5>

          <!-- flexed stats start -->
          <div class="mt-4 flex justify-center space-between">
            <!-- left flexed stats -->
            <div class="mr-2">
              <p class="mb-4 text-gray-800 dark:text-gray-400">
                Height: {{ player?.heightInCentimeters }} cm
              </p>


              <template v-if="currentSeasonStats">

                <p class="mt-4 mb-4 font-bold text-white">
                  SPG:
                  <span
                      class="text-gray-900 font-bold bg-cyan-400 py-1 px-2 rounded-md"
                  >{{
                      (currentSeasonStats.shots / currentSeasonStats.gamesPlayed).toFixed(2)
                    }}</span
                  >
                </p>

                <!-- if goalie (goals against) -->
                <p class="mt-4 mb-4 font-bold text-white">
                  Goals Against:
                  <span
                      class="text-gray-900 font-bold bg-cyan-400 py-1 px-2 rounded-md"
                  >{{ currentSeasonStats.goalsAgainst }}</span
                  >
                </p>

                <p class="mt-4 mb-4 font-bold text-white">
                  Saves: {{ currentSeasonStats.saves }}
                </p>

                <!-- games -->
                <p class="mt-4 mb-4 text-white font-bold">
                  Games: {{ currentSeasonStats.gamesPlayed }}
                </p>

                <!-- goals per game -->
                <p class="mt-4 mb-4 font-bold text-white">
                  GPG:
                  <span
                      class="text-gray-900 font-bold bg-cyan-400 py-1 px-2 rounded-md"
                  >{{
                      (currentSeasonStats.goals / currentSeasonStats.gamesPlayed).toFixed(2)
                    }}</span
                  >
                </p>

                <!-- assists -->
                <p class="font-bold text-white">
                  Assists: {{ currentSeasonStats.assists }}
                </p>
              </template>

            </div>

            <!-- right flexed stats -->
            <div class="ml-2" v-if="currentSeasonStats">
              <p class="mb-4 text-gray-800 dark:text-gray-400">
                Season: {{ currentSeasonStats.season }}
              </p>

              <p class="font-bold mt-4 mb-4 text-white">
                <span> Shots: {{ currentSeasonStats.shots }} </span>
              </p>

              <!-- if goalie stats -->
              <p class="font-bold mt-4 mb-4 text-white">
                Games Started:
                <span
                    class="text-gray-900 font-bold bg-cyan-400 py-1 px-2 rounded-md"
                >{{ currentSeasonStats.gamesStarted }}</span
                >
              </p>

              <p class="font-bold mt-4 mb-4 text-white">
                Shots Against: {{ currentSeasonStats.shotsAgainst }}
              </p>

              <!-- hits -->
              <p class="mt-4 mb-4 text-white font-bold">
                Hits: {{ currentSeasonStats.hits }}
              </p>

              <p class="text-white font-bold">Goals: {{ currentSeasonStats.goals }}</p>
            </div>
          </div>

          <button
              v-if="isLiked"
              @click="unlikePlayer(userLike.id)"
              class="mt-3 py-2 px-2 inline-flex justify-center items-center gap-2 rounded-md border-2 border-blue-500 font-semibold text-blue-500 focus:outline-none transition-all text-sm"
          >
            <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
              <path
                  d="M12 21C8.38661 17.7733 2 13.7597 2 8.3951C2 5.37384 4.42 3 7.5 3C9.24 3 10.91 3.74441 12 5C13.09 3.74441 14.76 3 16.5 3C19.58 3 22 5.37384 22 8.3951C22 13.751 15.6214 17.7907 12 21Z"
                  fill="#2F80ED"
              />
            </svg>
            <span>{{ playerLikes.length }} Likes</span>
          </button>
          <button
              v-else
              type="button"
              @click="likePlayer"
              class="mt-3 py-2 px-2 inline-flex justify-center items-center gap-2 rounded-md border-2 border-gray-900 font-semibold text-gray-800 hover:bg-gray-200 hover:border-gray-800 focus:outline-none transition-all text-sm dark:hover:bg-gray-900 dark:border-gray-900 dark:hover:border-gray-900 dark:text-white dark:focus:ring-gray-900 dark:focus:ring-offset-gray-800"
          >
            <svg
                width="20"
                height="18"
                viewBox="0 0 20 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
              <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M10 2C9.66042 1.60884 9.26455 1.26729 8.82781 0.982401C7.86267 0.352837 6.69792 0 5.5 0C2.42 0 0 2.37384 0 5.3951C0 6.46861 0.255742 7.48801 0.693829 8.45784C2.0526 11.4686 5.16576 14.0093 7.8455 16.1963C8.61699 16.8259 9.35256 17.4262 10 18C10.6474 17.4262 11.383 16.8259 12.1545 16.1963C14.8342 14.0093 17.9473 11.4687 19.3061 8.458C19.7442 7.48813 20 6.46866 20 5.3951C20 2.37384 17.58 0 14.5 0C13.3021 0 12.1373 0.352837 11.1722 0.982401C10.7354 1.26729 10.3396 1.60884 10 2ZM10 15.3699C10.3228 15.1024 10.6527 14.8326 10.9822 14.5633C11.2612 14.3351 11.5399 14.1073 11.8136 13.8813C12.9091 12.9769 13.9814 12.058 14.9309 11.095C16.106 9.90333 16.9793 8.75632 17.4879 7.62419C17.8233 6.8767 18 6.13633 18 5.3951C18 3.51455 16.5119 2 14.5 2C13.3116 2 12.2025 2.51373 11.5103 3.31111L10 5.05084L8.48971 3.31111C7.79748 2.51373 6.68843 2 5.5 2C3.48808 2 2 3.51455 2 5.3951C2 6.13633 2.17674 6.8767 2.51214 7.62419C3.02069 8.75633 3.89402 9.90333 5.06909 11.095C6.01864 12.058 7.09095 12.9769 8.18643 13.8813C8.46009 14.1073 8.73877 14.3351 9.01783 14.5633C9.34727 14.8326 9.67722 15.1024 10 15.3699Z"
                  fill="#222B45"
              />
            </svg>
            <span>{{ playerLikes.length }} Likes</span>
          </button>
        </div>
        <Comments/>
      </div>
    </section>
  </main>
</template>
