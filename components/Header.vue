<template>
    <div
      class="p-20 h-screen w-screen flex flex-col-reverse md:flex-row items-center justify-center"
    >
      <div class="content text-3xl text-center md:text-left">
        <main
          class="mt-10 mx-auto max-w-7xl px-4 sm:mt-4 sm:px-6 md:mt-16 lg:mt-10 lg:px-4 xl:mt-8"
        >
          <div class="sm:text-center lg:text-left">
         
       <!--  <h1 class="font-black text-6xl">Welcome to rotorink</h1>
        <span class="text-4xl"> 🏒 </span>
        <p>browse the<NuxtLink to="/blog"> daily fantasy hockey and props content</NuxtLink></p>
        <p>and sign up or login to</p>
        <p><NuxtLink to="/teams">like and comment on your favorite players for the day</NuxtLink></p> -->
     
            <h1
              class="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl"
            >
              <span class="block xl:inline">rotorink</span>
              <span class="block text-red-600 xl:inline"> stats and stories</span>
            </h1>
            <p
              class="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0"
            >
              Welcome to the home of hockey dfs news, lineup and props content.
            </p>
            <div class="mt-5 flex">
              <NuxtLink to="/teams">
                  <button class="rounded-md shadow w-full flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-red-500 hover:bg-blue-500">
                    Stats
                  </button>
            </NuxtLink>
              <NuxtLink to="/blog">
                  <button class="ml-2 rounded-md shadow w-full flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gray-900 hover:bg-gray-400">
                    Blog
                  </button>
            </NuxtLink>
            </div>
          </div>
        </main>
      </div>
      <div class="container mx-auto flex flex-col items-center">
        <div class="w-full">
          <img src="/img/hockeyphone.png" alt="" />
        </div>
      </div>
    </div>
  </template>

  <style>
a {
    text-decoration: none;
}
</style>