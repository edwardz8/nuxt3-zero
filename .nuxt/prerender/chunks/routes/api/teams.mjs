import { defineEventHandler } from 'file:///Users/zne/vue-projects/nuxt3-zero/node_modules/h3/dist/index.mjs';

const teams = defineEventHandler(async (event) => {
  try {
    const teams = await $fetch("https://api.nhle.com/stats/rest/en/team");
    return teams;
  } catch (error) {
    console.error("Failed to fetch teams:", error);
    return { error: "Failed to fetch teams." };
  }
});

export { teams as default };
//# sourceMappingURL=teams.mjs.map
