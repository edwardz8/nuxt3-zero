export default defineEventHandler(async (event) => {
    const id = event.context.params.id;

    try {
        const player = await $fetch(`https://api-web.nhle.com/v1/player/${id}/landing`)
        return player;
    } catch (error) {
        console.error('Failed to fetch player:', error);
        return { error: 'Failed to fetch player.' };
    }
});