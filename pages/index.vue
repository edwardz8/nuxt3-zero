<!-- ./pages/index.vue -->
<template>
  <main>
    <section class="hero-section">
      <header>
        <h1 class="font-black text-6xl">Welcome to rosterbox</h1>
        <span class="text-4xl">🏈 🏒 ⚽</span>
        <p>browse the<NuxtLink to="/blog"> fantasy sports + betting articles</NuxtLink></p>
      </header>
    </section>
  </main>
</template>

<style scoped>
.hero-section {
  @apply flex items-center justify-center text-center w-full h-screen bg-slate-50 text-slate-700;
}
</style>