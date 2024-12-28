import { setCookie } from 'file:///Users/zne/vue-projects/nuxt3-zero/node_modules/h3/dist/index.mjs';

const logout = async (event) => {
  setCookie(event, "auth_token", null);
};

export { logout as default };
//# sourceMappingURL=logout.mjs.map
