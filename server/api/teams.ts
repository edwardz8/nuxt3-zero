import { BalldontlieAPI } from '@balldontlie/sdk';

export default defineEventHandler(async (event) => {
  const api = new BalldontlieAPI({ apiKey: process.env.BDL_API_KEY as string });

  try {
    const teams = await $fetch('https://api.nhle.com/stats/rest/en/team')

    return teams;
  } catch (error) {
    console.error('Failed to fetch teams:', error);
    return { error: 'Failed to fetch teams.' };
  }
});
