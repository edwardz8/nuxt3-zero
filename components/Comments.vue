<script setup>
import { addComment, getPlayerComments, deleteComment } from "~/composables/useComment";
import { useState } from "#app";

const route = useRoute();
const playerComments = ref([]);
const comment = ref("");
const commenting = ref(false);
const user = useState("user");

playerComments.value = await getPlayerComments(route.params.player);

const userComment = computed(() => {
  if (!user.value) return false 
  const index = playerComments.value.findIndex(comment => comment.userId === user.value.id)

  return index > -1
})

/*
=================================
          * METHODS *
=================================
*/

async function commentPlayer() {

  if (!user.value) return useRouter().push('/login')
  commenting.value = true;
  try {
    const commentRes = await addComment({
      userId: user.value.id,
      playerId: +route.params.player,
      comment: comment.value,
    });
    playerComments.value.unshift({ ...commentRes, user: user.value });
    comment.value = "";
  } catch (error) {
    console.log(error);
  } finally {
    commenting.value = false;
  }
}
async function deletePlayerComment(id, index) {
  await deleteComment(id);
  playerComments.value.splice(index, 1);
}
</script>
<template>
  <!-- Comments -->
  <div
    class="p-4 bg-white border-t rounded-none rounded-md dark:bg-gray-800 dark:border-gray-700"
    role="alert"
  >
    <h3 class="ml-3 font-bold mb-3">Comments</h3>
    <form class="w-full d-flex flex-col" @submit.prevent="commentPlayer">
      <input
        v-model="comment"
        required
        type="text"
        placeholder="Enter Comment"
        class="py-3 px-4 block w-full border focus:outline-none border-gray-200 rounded-md text-sm dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400"
      />
      <button
        class="ml-auto block w-20 mt-2 py-2 px-2 rounded-md border-2 border-gray-900 font-semibold text-gray-800 hover:bg-gray-200 hover:border-gray-800 focus:outline-none transition-all text-sm dark:hover:bg-gray-900 dark:border-gray-900 dark:hover:border-gray-900 dark:text-white dark:focus:ring-gray-900 dark:focus:ring-offset-gray-800"
      >
        <div
          v-if="commenting"
          class="animate-spin inline-block w-4 h-4 border-[3px] border-current border-t-transparent text-blue-600 rounded-full"
          role="status"
          aria-label="loading"
        >
          <span class="sr-only">Loading...</span>
        </div>
        <template v-else> Submit </template>
      </button>
    </form>

    <div class="flex flex-col pt-3">
      <div
        class="ml-3 mb-2 py-2 border-t border-gray-200"
        v-for="(comment, i) in playerComments"
        :key="comment.id"
      >
        <div class="flex gap-3 items-center">
          <img src="/img/footballguy2.jpg" class="rounded-full w-10 h-10" alt="avatar" />
          <div>
            <h4 class="text-base m-0 leading-3">
              {{ comment.user.name }}
            </h4>
            <span class="text-xs leading-3">@{{ comment.user.username }}</span>
          </div>
          <button class="p-2 ml-auto" @click="deletePlayerComment(comment.id, i)" v-if="userComment">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15 2H9C7.897 2 7 2.897 7 4V5H3V7H5V20C5 21.103 5.897 22 7 22H17C18.103 22 19 21.103 19 20V7H21V5H17V4C17 2.897 16.103 2 15 2ZM9 4H15V5H9V4ZM17 20H7V7H17V20Z"
                fill="#192038"
              />
            </svg>
          </button>
        </div>
        <p class="text-base mt-2 text-gray-700 dark:text-gray-400 ml-12">
          {{ comment.comment }}
        </p>
      </div>
    </div>
  </div>

  <!--  -->
</template>
