<script setup lang="ts">
import matchPlayerImage from "../methods.js";

const props = defineProps(["player"]);

const emit = defineEmits(["show-player"]);

function showSidebar(id) {
  emit("show-player", id);
}
</script>

<template>
  <div
    class="flex flex-col bg-white border shadow-md rounded-xl dark:bg-gray-700 dark:border-gray-700 dark:shadow-slate-700/[.7]"
  >
    <img
      class="w-full h-auto rounded-t-xl"
      :src="matchPlayerImage(player.person.fullName)"
      alt="Player Profile"
    />
    <div class="p-4 md:p-5">
      <h3 class="text-lg font-bold text-gray-800 dark:text-white">
        {{ player.person.fullName }}
      </h3>
      <p class="mt-1 text-gray-800 dark:text-gray-400">
        <!-- {{ player.currentTeam.name }} -->
      </p>

      <div class="flex inline-flex justify-center items-center gap-4">
        <NuxtLink
          class="mt-3 py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800"
          :to="`/teams/${useRoute().params.id}/player/` + player.person.id"
        >
          View Player
        </NuxtLink>

        <button
          class="top-2 rounded-md mt-4 py-2 px-2 cursor-pointer flex bg-red-500 hover:text-gray-900 text-white hover:bg-gray-100 focus:outline-none"
          data-hs-overlay="#player-sidebar"
          @click="showSidebar(player.person.id)"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M10.5 6a7.5 7.5 0 107.5 7.5h-7.5V6z"
            />
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M13.5 10.5H21A7.5 7.5 0 0013.5 3v7.5z"
            />
          </svg>
        </button>
      </div>
    </div>
  </div>
</template>
