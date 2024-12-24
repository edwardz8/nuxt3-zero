<script setup>
import { useRuntimeConfig } from '#app';
// import { useBalldontlie } from '~/composables/useApi';

// Fetch data using useFetch
const config = useRuntimeConfig();

const { data: teams } = await useFetch('https://api.balldontlie.io/v1/teams', {
  headers: {
    Authorization: `Bearer ${config.public.bdlApiKey}`
  }
});

console.log(data[0].value)
console.log(teams.value)

// Extract the "data" array from the response and update reactive state
if (data[0].value) {
  console.log(data[0].value)
  teams.value = data[0].value.data;  // Access the "data" key in the returned JSON
}

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
      <h2 class="text-2xl mt-3 mb-4 text-center">All Teams</h2>
      <div
        class="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-3 px-4"
      >
        <TeamCard v-for="team in data.teams" :team="teams" :key="team.id" />
      </div>
    </section>
  </main>
</template>
