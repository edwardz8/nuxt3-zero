

export default defineEventHandler(async (event) => {
    const id = event.context.params.id;

    try {
        const players = await $fetch(`https://api-web.nhle.com/v1/roster/${id}/${process.env.SEASON}`)
        const flattenedPlayers = Object.entries(players).flatMap(([role, players]) =>
            players.map(player => ({
                ...player,
                role: role.slice(0, -1) // Remove 's' for singular form
            }))
        );

        // const teams = await $fetch('https://api.nhle.com/stats/rest/en/tea')
        return flattenedPlayers;
    } catch (error) {
        console.error('Failed to fetch team players:', error);
        // return { error: 'Failed to fetch team players.' };
        return []
    }
});

