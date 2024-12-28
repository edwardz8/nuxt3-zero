import { defineEventHandler } from 'file:///Users/zne/vue-projects/nuxt3-zero/node_modules/h3/dist/index.mjs';
import { BalldontlieAPI } from 'file:///Users/zne/vue-projects/nuxt3-zero/node_modules/@balldontlie/sdk/dist/index.js';

const players = defineEventHandler(async (event) => {
  const api = new BalldontlieAPI({ apiKey: process.env.BDL_API_KEY });
  try {
    const players = await api.mlb.getPlayers();
    return players;
  } catch (error) {
    console.error("Failed to fetch players:", error);
    return { error: "Failed to fetch players." };
  }
});

export { players as default };
//# sourceMappingURL=players.mjs.map
