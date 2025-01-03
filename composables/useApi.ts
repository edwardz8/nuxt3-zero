export const useBalldontlie = () => {
    const fetchTeams = async () => {
        try {
            return await $fetch('/api/teams');
        } catch (error) {
            console.error('Failed to fetch teams:', error);
            throw error;
        }
    };

    const fetchTeam = async (id: string) => {
        try {
            return await $fetch(`/api/teams/${id}`);
        } catch (error) {
            console.error('Failed to fetch teams:', error);
            throw error;
        }
    };

    const fetchPlayers = async (id: string) => {
        try {
            const response = await $fetch(`/api/teams/${id}/players`);
            return response;
        } catch (error) {
            console.error('Failed to fetch players:', error);
            throw error;
        }
    };
    const fetchPlayer = async (id: string) => {
        try {
            const response = await $fetch(`/api/players/${id}`);
            return response;
        } catch (error) {
            console.error('Failed to fetch players:', error);
            throw error;
        }
    };

    return {fetchTeams, fetchPlayers, fetchTeam, fetchPlayer};
};
