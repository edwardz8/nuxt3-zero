async function getUserLikes(playerId) {
  const like = await $fetch("/api/like/getLikes?playerId=" + playerId, { method: "GET" });
  return like;
}
async function addUserLike({ playerId, userId }) {
  const like = await $fetch("/api/like/addLike", { method: "POST", body: { userId, playerId } });
  return like;
}
async function removeUserLike(likeId) {
  const res = await $fetch("/api/like/deleteLike?likeId=" + likeId, { method: "GET" });
  return res;
}
export {
  addUserLike as a,
  getUserLikes as g,
  removeUserLike as r
};
//# sourceMappingURL=useLike-C3EBfnqv.js.map
