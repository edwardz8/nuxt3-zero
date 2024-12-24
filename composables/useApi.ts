import { BalldontlieAPI } from '@balldontlie/sdk';
import { useRuntimeConfig } from '#app';

export const useBalldontlie = () => {
  const fetchTeams = async () => {
    const config = useRuntimeConfig();
    const api = new BalldontlieAPI({ apiKey: config.public.bdlApiKey });

    try {
      const teams = await api.mlb.getTeams();
      return teams;
    } catch (error) {
      console.error('Failed to fetch teams:', error);
      throw error;
    }
  };

  return { fetchTeams };
};
