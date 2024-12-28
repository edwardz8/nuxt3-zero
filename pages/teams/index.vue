<script setup>
import { useBalldontlie } from '~/composables/useApi';

const { fetchTeams } = useBalldontlie();
const teams = ref([]);
const loading = ref(true);
const error = ref(null);

onMounted(async () => {
  try {
    const response = await fetchTeams();
    teams.value = response.data;
  } catch (err) {
    console.error('Failed to fetch teams:', err);
    error.value = 'Failed to fetch teams.';
  } finally {
    loading.value = false;
  }
});
</script>

<template>
  <main>
    <section class="container mx-auto">
      <h2 class="text-2xl mt-3 mb-4 text-center">All Teams</h2>
      <div v-if="loading" class="text-center">Loading...</div>
      <div v-else-if="error" class="text-center text-zinc-500">{{ error }}</div>
      <div v-else class="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        <TeamCard v-for="team in teams" :team="team" :key="team.id" />
      </div>
    </section>
  </main>
</template>
