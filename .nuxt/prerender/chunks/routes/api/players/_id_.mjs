import { defineEventHandler } from 'file:///Users/edwardz_8/vue-projects/nuxt3-zero/node_modules/h3/dist/index.mjs';

const _id_ = defineEventHandler(async (event) => {
  const id = event.context.params.id;
  try {
    const player = await $fetch(`https://api-web.nhle.com/v1/player/${id}/landing`);
    return player;
  } catch (error) {
    console.error("Failed to fetch player:", error);
    return { error: "Failed to fetch player." };
  }
});

export { _id_ as default };
//# sourceMappingURL=_id_.mjs.map
