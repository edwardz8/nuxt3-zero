<script setup lang="ts">
import { useState } from "#app";

const user = useState("user");
</script>

<template>
  <header class="site-header">
    <div class="wrapper">
      <NuxtLink to="/" class="no-underline">
        <figure class="site-logo">
          <h1>rotorink</h1>
        </figure>
      </NuxtLink>

      <nav class="site-nav">
        <ul class="links">
          <div class="flex items-center justify-end md:flex-1 lg:w-0">
            <User v-if="user" :user="user" />

            <li class="link">
              <nuxt-link
                v-if="!user"
                to="/register"
                class="transition duration-500 hover:scale-110 mr-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-gray-800 hover:bg-gray-600"
              >
                Sign up
              </nuxt-link>
            </li>

            <li class="link">
              <nuxt-link
                v-if="!user"
                to="/login"
                class="whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900"
              >
                Sign in
              </nuxt-link>
            </li>
          </div>
        </ul>
      </nav>
    </div>
  </header>
</template>

<style scoped>
.site-header {
  @apply sticky top-0 w-full p-4 bg-slate-100 bg-opacity-40 border-b-2 border-white border-opacity-30 backdrop-blur-lg z-20;
}

.site-header > .wrapper {
  @apply flex items-center justify-between max-w-6xl m-auto;
}

.site-logo {
  @apply font-black text-lg;
}
</style>
