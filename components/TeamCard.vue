<script setup lang="ts">
import matchPlayerImage from '../methods.js'

const props = defineProps(["team"]);
</script>

<template>
  <div
    class="flex flex-col bg-white border shadow-sm rounded-xl dark:bg-gray-800 dark:border-gray-700 dark:shadow-slate-700/[.7]"
  >
  <!-- abbreviation may need to be display_name -->
    <img
            class="mx-auto rounded-t-xl w-32"
            :src="matchPlayerImage(team?.abbreviation)"
            alt="Player Profile"
          />
    <div class="p-4 md:p-5">
      <h3 class="text-lg font-bold text-gray-800 dark:text-white">
        {{ team.display_name }}
      </h3>
     <!--  <p class="mt-1 text-gray-800 dark:text-gray-400">
        {{ team.locationName }}
        <br />
      </p> -->
      <NuxtLink
        class="mt-3 py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800"
        :to="`/teams/` + team.id"
      >
        View Players
      </NuxtLink>
    </div>
  </div>
</template>
