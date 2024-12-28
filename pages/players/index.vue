<script setup>
import { useBalldontlie } from '~/composables/useApi';

const { fetchPlayers } = useBalldontlie();
const players = ref([]);
const loading = ref(true);
const error = ref(null);

onMounted(async () => {
  try {
    const response = await fetchPlayers();
    players.value = response.data;
    console.log(players.value, 'players value from players index.vue');
  } catch (err) {
    console.error('Failed to fetch players:', err);
    error.value = 'Failed to fetch players.';
  } finally {
    loading.value = false;
  }
});
</script>

<template>
  <main>
    <section class="container mx-auto">
      <h2 class="text-2xl mt-3 mb-4 text-center">All Players</h2>
      <div v-if="loading" class="text-center">Loading...</div>
      <div v-else-if="error" class="text-center text-red-500">{{ error }}</div>
      <div v-else class="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        <Player v-for="player in players" :player="players" :key="player.id" />
      </div>
    </section>
  </main>
</template>
