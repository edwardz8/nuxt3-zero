export default defineEventHandler(async (event) => {
  try {
    const teams = await $fetch('https://api.nhle.com/stats/rest/en/team')
    return teams;
  } catch (error) {
    console.error('Failed to fetch teams:', error);
    return { error: 'Failed to fetch teams.' };
  }
});