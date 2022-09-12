<script setup lang="ts">
const { data } = await useFetch("https://statsapi.web.nhl.com/api/v1/teams");
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
      <h2 class="text-2xl mt-3 mb-4 text-center">All Teams</h2>
      <div
        class="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-3 px-4"
      >
        <TeamCard v-for="team in data.teams" :team="team" :key="team.id" />
      </div>
    </section>
  </main>
</template>
