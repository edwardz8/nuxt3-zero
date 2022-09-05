<template>
  <div class="bg-gray-100 mb-4 mt-4">
    <div
      class="mx-auto max-w-7xl py-12 px-4 sm:px-6 lg:flex lg:items-center lg:justify-between lg:py-16 lg:px-8"
    >
      <h2 class="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
        <span class="block">Want exclusive content?</span>
        <span class="block text-blue-600">Sign up for our free newsletter</span>
      </h2>
      <div class="mt-8 flex lg:mt-0 lg:flex-shrink-0">
        <form @submit.prevent="postToDB" class="ml-2 inline-flex rounded-md shadow">
          <label for="email" class="hidden leading-7 text-sm text-gray-600">email</label>
          <input
            type="email"
            id="email"
            v-model="userEmail"
            name="email"
            class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-gray-400 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
          />
          <button
            class="inline-flex ml-2 items-center justify-center rounded-md border border-transparent bg-gray-600 px-5 py-3 text-base font-medium text-white hover:bg-blue-900"
          >
            Subscribe
          </button>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
const DBResponse = ref([]);

const router = useRouter();
const userEmail = ref("");

async function postToDB() {
  const result = await fetch(`/api/subscribe?email=${userEmail.value}`);
  const data = await result.json();
  DBResponse.value = data;
  email.value = "";
}
</script>
