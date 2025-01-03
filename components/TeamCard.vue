<script setup lang="ts">
import matchPlayerImage from '../methods.js'

const props = defineProps(["team"]);
</script>

<template>
  <div
      class="flex flex-col bg-white border shadow-sm rounded-xl dark:bg-zinc-800 dark:border-zinc-700 dark:shadow-zinc-700/[.7]">
    <img class="mx-auto rounded-t-xl w-32 mt-2" :src="matchPlayerImage(team.abbreviation)" alt="Player Profile"/>
    <div class="p-4 md:p-5">
      <h3 class="text-lg font-bold text-gray-800 dark:text-white">
        {{ team.fullName }}
      </h3>
      <p class="mt-1 text-gray-800 dark:text-gray-400">
        {{ team.location }}
        <br/>
      </p>
      <NuxtLink
          class="mt-3 py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-green-500 text-white hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800"
          :to="`/teams/` + team.triCode"
      >
        View Team
      </NuxtLink>
    </div>
  </div>
</template>
