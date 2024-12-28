import { BalldontlieAPI } from '@balldontlie/sdk';

export default defineEventHandler(async (event) => {
  const api = new BalldontlieAPI({ apiKey: process.env.BDL_API_KEY as string });

  try {
    const teams = await api.mlb.getTeams();
    return teams;
  } catch (error) {
    console.error('Failed to fetch teams:', error);
    return { error: 'Failed to fetch teams.' };
  }
});