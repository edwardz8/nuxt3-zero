import { defineEventHandler } from 'file:///Users/zne/vue-projects/nuxt3-zero/node_modules/h3/dist/index.mjs';
import { BalldontlieAPI } from 'file:///Users/zne/vue-projects/nuxt3-zero/node_modules/@balldontlie/sdk/dist/index.js';

const teams = defineEventHandler(async (event) => {
  const api = new BalldontlieAPI({ apiKey: process.env.BDL_API_KEY });
  try {
    const teams = await api.mlb.getTeams();
    return teams;
  } catch (error) {
    console.error("Failed to fetch teams:", error);
    return { error: "Failed to fetch teams." };
  }
});

export { teams as default };
//# sourceMappingURL=teams.mjs.map
