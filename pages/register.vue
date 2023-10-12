<script setup lang="ts">
import { ref } from "@vue/reactivity";
import { registerWithEmail } from "~/composables/useAuth";

const email = ref(null);
const password = ref(null);
const username = ref(null);
const name = ref(null);
const errors = ref(new Map());
let response = ref<FormValidation>({ hasErrors: false });

async function postRegisterForm() {
  response.value = await registerWithEmail(
    username.value,
    name.value,
    email.value,
    password.value
  );
  errors.value = response.value.errors;
}
</script>

<template>
  <div class="h-screen">
    <div class="flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div class="max-w-md w-full">
        <div class="flex">
          <img
            class="mx-auto h-24 w-auto"
            src="/img/hockeyphone.png"
            alt="rotorink logo"
          />
          <!-- <h1 class="py-9 text-center text-3xl font-extrabold text-gray-900">
            rotorink
          </h1> -->
        </div>
        <div>
          <h2 class="text-center text-3xl font-extrabold mt-5 text-gray-900">Sign Up</h2>
        </div>
        <div
          v-if="response.hasErrors && errors"
          class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mt-3"
          role="alert"
        >
          <strong class="font-bold">Oops, try again! </strong>

          <ul class="block sm:inline">
            <li v-for="[key, value] in errors">
              {{ value.check.errorMessage }}
            </li>
          </ul>
        </div>
        <form v-on:submit.prevent class="mt-8 space-y-6" action="#" method="POST">
          <input type="hidden" name="remember" value="true" />
          <div class="rounded-md shadow-sm -space-y-px mb-1">
            <div>
              <label for="name" class="sr-only">name</label>
              <input
                v-model="name"
                id="name"
                name="name"
                required
                class="appearance-none rounded relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-gray-500 focus:border-gray-500 focus:z-10 sm:text-sm"
                :class="errors.has('name') ? ' border-red-500' : ''"
                placeholder="name"
              />
            </div>
          </div>
          <div class="rounded-md shadow-sm -space-y-px mb-1">
            <div>
              <label for="email-address" class="sr-only">username</label>
              <input
                type="email"
                v-model="username"
                id="username"
                name="username"
                required
                class="appearance-none rounded relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-gray-500 focus:border-gray-500 focus:z-10 sm:text-sm"
                :class="errors.has('username') ? ' border-red-500' : ''"
                placeholder="username"
              />
            </div>
          </div>

          <div class="rounded-md shadow-sm -space-y-px mb-1">
            <div>
              <label for="email-address" class="sr-only">email</label>
              <input
                v-model="email"
                id="email-address"
                name="email"
                type="email"
                autocomplete="email"
                required
                class="appearance-none rounded relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-gray-500 focus:border-gray-500 focus:z-10 sm:text-sm"
                :class="errors.has('email') ? ' border-red-500' : ''"
                placeholder="email address"
              />
            </div>
          </div>
          <div>
            <label for="password" class="sr-only">password</label>
            <input
              v-model="password"
              id="password"
              name="password"
              type="password"
              autocomplete="current-password"
              required
              class="appearance-none rounded relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-gray-500 focus:border-gray-500 focus:z-10 sm:text-sm"
              :class="errors.has('password') ? ' border-red-500' : ''"
              placeholder="password"
            />
          </div>

          <div class="flex items-center justify-between">
            <div class="text-sm">
              <a href="#" class="font-medium text-gray-600 hover:text-gray-500">
                Forgot your password?
              </a>
            </div>
          </div>
        </form>
        <button
          @click.prevent="postRegisterForm"
          class="mt-5 group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-gray-700 hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
        >
          <span class="absolute left-0 inset-y-0 flex items-center pl-3">
            <svg
              class="h-5 w-5 text-gray-500 group-hover:text-gray-400"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fill-rule="evenodd"
                d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                clip-rule="evenodd"
              />
            </svg>
          </span>
          register
        </button>
      </div>
    </div>
    <Features />
  </div>
</template>
