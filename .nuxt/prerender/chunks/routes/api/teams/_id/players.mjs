import { defineEventHandler } from 'file:///Users/zne/vue-projects/nuxt3-zero/node_modules/h3/dist/index.mjs';

const players = defineEventHandler(async (event) => {
  const id = event.context.params.id;
  try {
    const players = await $fetch(`https://api-web.nhle.com/v1/roster/${id}/${process.env.SEASON}`);
    const flattenedPlayers = Object.entries(players).flatMap(
      ([role, players2]) => players2.map((player) => ({
        ...player,
        role: role.slice(0, -1)
        // Remove 's' for singular form
      }))
    );
    return flattenedPlayers;
  } catch (error) {
    console.error("Failed to fetch team players:", error);
    return [];
  }
});

export { players as default };
//# sourceMappingURL=players.mjs.map
