import { BalldontlieAPI } from '@balldontlie/sdk';

export default defineEventHandler(async (event) => {
  const api = new BalldontlieAPI({ apiKey: process.env.BDL_API_KEY as string });

  try {
    const players = await api.mlb.getPlayers();
    return players;
  } catch (error) {
    console.error('Failed to fetch players:', error);
    return { error: 'Failed to fetch players.' };
  }
});