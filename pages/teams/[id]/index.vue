<script setup lang="ts">
const route = useRoute();

const { data } = await useFetch(
  `https://statsapi.web.nhl.com/api/v1/teams/${route.params.id}/roster`
);
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
      <div
        class="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-3 px-4"
      >
        <PlayerCard v-for="player in data.roster" :player="player" :key="player.id" />
      </div>
    </section>
  </main>
</template>
