<script setup>
import { ref, watch } from "vue";
import { useRoute } from "vue-router";

const links = [
  { to: "/", label: "首頁" },
  { to: "/#services", label: "服務項目" },
  { to: "/works", label: "所有作品" },
];

const isMenuOpen = ref(false);
const route = useRoute();

// 換頁時自動收起手機選單
watch(() => route.fullPath, () => (isMenuOpen.value = false));
</script>

<template>
  <nav class="fixed top-0 w-full z-40 bg-parchment/90 backdrop-blur border-b border-stone/70">
    <div class="container-site flex items-center justify-between h-16">
      <router-link to="/" class="font-serif text-xl tracking-tight">
        晨光工作室<span class="text-ember">.</span>
      </router-link>

      <div class="hidden md:flex items-center gap-8 text-sm">
        <router-link
          v-for="link in links"
          :key="link.to"
          :to="link.to"
          class="text-ink/70 hover:text-ink transition-colors"
        >
          {{ link.label }}
        </router-link>
        <router-link to="/contact" class="btn-primary !px-4 !py-2">聯絡我們</router-link>
      </div>

      <button
        type="button"
        class="md:hidden p-2 -mr-2 text-ink"
        :aria-expanded="isMenuOpen"
        aria-label="開啟選單"
        @click="isMenuOpen = !isMenuOpen"
      >
        <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
          <path v-if="!isMenuOpen" stroke-linecap="round" d="M4 7h16M4 12h16M4 17h16" />
          <path v-else stroke-linecap="round" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </div>

    <div v-show="isMenuOpen" class="md:hidden border-t border-stone/70 bg-parchment">
      <div class="container-site py-4 flex flex-col">
        <router-link
          v-for="link in links"
          :key="link.to"
          :to="link.to"
          class="py-3 border-b border-stone/50 text-ink/80"
        >
          {{ link.label }}
        </router-link>
        <router-link to="/contact" class="btn-primary mt-4">聯絡我們</router-link>
      </div>
    </div>
  </nav>
</template>
