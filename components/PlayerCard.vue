<script setup lang="ts">
const props = defineProps(["player"]);
</script>

<template>
  <div
    class="flex flex-col bg-white border shadow-sm rounded-xl dark:bg-gray-800 dark:border-gray-700 dark:shadow-slate-700/[.7]"
  >
    <!-- <img
      class="w-full h-auto rounded-t-xl"
      src="/img/img1.jpg"
      alt="Player Description"
    /> -->
    <div class="p-4 md:p-5">
      <h3 class="text-lg font-bold text-gray-800 dark:text-white">
        {{ player.person.fullName }}
      </h3>
      <p class="mt-1 text-gray-800 dark:text-gray-400">
        Jersey Number: {{ player.jerseyNumber }}
      </p>
      <NuxtLink
        class="mt-3 py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800"
        :to="`/teams/${useRoute().params.id}/player/` + player.person.id"
      >
        See Player
      </NuxtLink>
    </div>
  </div>
</template>
