<script setup>
import { contact, socialLinks } from "../data/site.js";

const currentYear = new Date().getFullYear();

const quickLinks = [
  { to: "/", label: "回到首頁" },
  { to: "/#services", label: "服務項目" },
  { to: "/works", label: "作品集" },
  { to: "/contact", label: "聯絡我們" },
];
</script>

<template>
  <footer class="bg-bone border-t border-stone/70 pt-16 pb-8 text-sm">
    <div class="container-site">
      <div class="grid grid-cols-1 md:grid-cols-12 gap-10 mb-16">
        <div class="md:col-span-5">
          <p class="font-serif text-2xl mb-4">晨光工作室<span class="text-ember">.</span></p>
          <p class="text-ash leading-relaxed max-w-xs">
            喜歡搞耍，年輕為資本，想法創造無限可能。
          </p>
          <router-link to="/contact" class="btn-primary mt-8">索取報價單 &rarr;</router-link>
        </div>

        <nav class="md:col-span-3">
          <h4 class="eyebrow mb-4">Links</h4>
          <ul class="space-y-3">
            <li v-for="link in quickLinks" :key="link.to">
              <router-link :to="link.to" class="text-ink/70 hover:text-ink transition-colors">
                {{ link.label }}
              </router-link>
            </li>
          </ul>
        </nav>

        <div class="md:col-span-4">
          <h4 class="eyebrow mb-4">Contact</h4>
          <ul class="space-y-3 text-ink/70">
            <li>
              <a :href="`mailto:${contact.email}`" class="hover:text-ink transition-colors">
                {{ contact.email }}
              </a>
            </li>
            <li>
              <a :href="contact.phoneHref" class="hover:text-ink transition-colors">
                {{ contact.phone }}
              </a>
            </li>
            <li>LINE ID：{{ contact.line }}</li>
          </ul>

          <ul v-if="socialLinks.length" class="flex flex-wrap gap-4 mt-6">
            <li v-for="social in socialLinks" :key="social.name">
              <a
                :href="social.url"
                target="_blank"
                rel="noopener"
                class="underline underline-offset-4 decoration-stone hover:decoration-ink"
              >
                {{ social.name }}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div
        class="border-t border-stone pt-8 flex flex-col md:flex-row justify-between gap-4 text-xs text-ash"
      >
        <p>&copy; {{ currentYear }} 晨光工作室 Morning Light Studio. All rights reserved.</p>
        <div class="flex gap-6">
          <a href="#" class="hover:text-ink">沒隱私權政策</a>
          <a href="#" class="hover:text-ink">沒服務條款</a>
        </div>
      </div>
    </div>
  </footer>
</template>
