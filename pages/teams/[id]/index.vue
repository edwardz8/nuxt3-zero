<script setup lang="ts">
const route = useRoute();

const player = ref(null);
const config = useRuntimeConfig();

const { data } = await useFetch(
  `https://statsapi.web.nhl.com/api/v1/teams/${route.params.id}/roster`
);

async function showPlayer(id) {
  player.value = null;

  const res = await Promise.all([
    useFetch(`https://statsapi.web.nhl.com/api/v1/people/${id}`),
    useFetch(
      `https://statsapi.web.nhl.com/api/v1/people/${id}/stats/?stats=statsSingleSeason&season=${config.public.SEASON}`
    ),
  ]);

  player.value = {
    ...res[0].data.value.people[0],
    stats: res[1].data.value.stats[0].splits[0],
  };
}
</script>

<template>
  <main>
    <Head>
      <Script
        defer
        data-domain="propz.vercel.app"
        src="https://plausible.io/js/plausible.js"
      />
    </Head>
    <section>
      <h2 class="text-2xl mt-3 mb-4 text-center">Team Page</h2>
      <p class="text-md mb-4 text-center">Select Player to View Stats</p>
      <off-canvas :player="player" />
      <div
        class="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-3 px-4"
      >
        <player-card 
          v-for="player in data.roster"
          :player="player"
          :key="player.id"
          @show-player="showPlayer"
        />
      </div>
    </section>
  </main>
</template>
