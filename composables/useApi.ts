export const useBalldontlie = () => {
  const fetchTeams = async () => {
    try {
      const response = await $fetch('/api/teams');
      console.log(response);
      return response;
    } catch (error) {
      console.error('Failed to fetch teams:', error);
      throw error;
    }
  };

  const fetchPlayers = async () => {
    try {
      const response = await $fetch('/api/players');
      console.log(response);
      return response;
    } catch (error) {
      console.error('Failed to fetch players:', error);
      throw error;
    }
  };

  return { fetchTeams, fetchPlayers };
};