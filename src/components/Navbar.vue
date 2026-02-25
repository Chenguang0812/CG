<script setup>
import { ref } from "vue";

const isMenuOpen = ref(false);
const toggleMenu = () => (isMenuOpen.value = !isMenuOpen.value);
</script>

<template>
  <nav class="fixed w-full z-50 bg-black/90 backdrop-blur-md border-b border-gray-800">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-16">
        <div class="flex-shrink-0 font-bold text-xl tracking-wider text-red-600">
          <router-link to="/"> CG STUDIO </router-link>
        </div>

        <div class="hidden md:block">
          <div class="ml-10 flex items-baseline space-x-8">
            <router-link
              to="/"
              class="hover:text-red-500 transition px-3 py-2 rounded-md text-sm font-medium"
              >首頁</router-link
            >
            <router-link
              to="/#services"
              class="hover:text-red-500 transition px-3 py-2 rounded-md text-sm font-medium"
              >服務項目</router-link
            >

            <router-link
              to="/works"
              class="hover:text-red-500 transition px-3 py-2 rounded-md text-sm font-medium"
              >所有作品</router-link
            >

            <router-link
              to="/contact"
              class="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-full text-sm transition"
            >
              聯絡我們
            </router-link>
          </div>
        </div>

        <div class="-mr-2 flex md:hidden">
          <button
            @click="toggleMenu"
            type="button"
            class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none"
          >
            <span class="sr-only">Open main menu</span>
            <svg
              v-if="!isMenuOpen"
              class="block h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
            <svg
              v-else
              class="block h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>

    <div v-show="isMenuOpen" class="md:hidden bg-black border-t border-gray-800">
      <div class="px-2 pt-2 pb-3 space-y-1 sm:px-3 text-center">
        <router-link
          to="/"
          @click="isMenuOpen = false"
          class="text-gray-300 hover:text-white block px-3 py-3 rounded-md text-base font-medium"
          >首頁</router-link
        >
        <router-link
          to="/#services"
          @click="isMenuOpen = false"
          class="text-gray-300 hover:text-white block px-3 py-3 rounded-md text-base font-medium"
          >服務項目</router-link
        >
        <router-link
          to="/works"
          @click="isMenuOpen = false"
          class="text-gray-300 hover:text-white block px-3 py-3 rounded-md text-base font-medium"
          >所有作品</router-link
        >
        <router-link
          to="/contact"
          @click="isMenuOpen = false"
          class="text-red-500 font-bold block px-3 py-3 rounded-md text-base"
          >聯絡我們</router-link
        >
      </div>
    </div>
  </nav>
</template>
