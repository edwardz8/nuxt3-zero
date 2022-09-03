import { setCookie } from 'h3';

const logout = async (event) => {
  setCookie(event, "auth_token", null);
};

export { logout as default };
//# sourceMappingURL=logout.mjs.map
