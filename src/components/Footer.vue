<script setup>
// ... (保留你原本的 script) ...
</script>

<template>
  <footer
    id="contact"
    class="bg-black border-t border-gray-800 pt-12 md:pt-16 pb-8 text-sm"
  >
    <div class="max-w-7xl mx-auto px-6">
      <div class="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12 mb-12 md:mb-16">
        <div class="col-span-1 md:col-span-1 text-center md:text-left">
          <h3 class="text-2xl font-bold text-white tracking-wider mb-4 md:mb-6">
            晨光工作室<span class="text-red-600">.</span>
          </h3>
          <p class="text-gray-400 leading-relaxed mb-6">
            喜歡搞耍，年輕為資本，想法創造無限可能。
          </p>
        </div>

        <div class="text-center md:text-left">
          <h4 class="text-white font-bold mb-4 md:mb-6 text-lg">快速連結</h4>
          <ul class="space-y-3 md:space-y-4 inline-block md:block">
            <li>
              <a href="#home" class="text-gray-400 hover:text-red-500 transition"
                >回到首頁</a
              >
            </li>
            <li>
              <a href="#services" class="text-gray-400 hover:text-red-500 transition"
                >服務項目</a
              >
            </li>
            <li>
              <a href="#portfolio" class="text-gray-400 hover:text-red-500 transition"
                >作品集</a
              >
            </li>
          </ul>
        </div>

        <div class="text-center md:text-left">
          <h4 class="text-white font-bold mb-4 md:mb-6 text-lg">聯絡我們</h4>
          <ul
            class="space-y-3 md:space-y-4 text-gray-400 inline-block md:block text-left"
          >
            <li class="flex items-start gap-3 justify-center md:justify-start">
              <span class="text-red-600 mt-1">📍</span>
              <span>台中市西屯區弘孝路45巷34號</span>
            </li>
            <li class="flex items-center gap-3 justify-center md:justify-start">
              <span class="text-red-600">📧</span>
              <a href="mailto:roalxfreefire@gmail.com" class="hover:text-white transition"
                >roalxfreefire@gmail.com</a
              >
            </li>
            <li class="flex items-center gap-3 justify-center md:justify-start">
              <span class="text-red-600">📱</span>
              <a href="tel:+886953006059" class="hover:text-white transition"
                >0953-006-059</a
              >
            </li>
            <li class="flex items-center gap-3 justify-center md:justify-start">
              <span class="text-red-600">💬</span>
              <span>LINE ID: freefire0812</span>
            </li>
          </ul>
        </div>

        <div class="text-center md:text-left">
          <h4 class="text-white font-bold mb-4 md:mb-6 text-lg">追蹤動態</h4>
          <div class="flex justify-center md:justify-start gap-4">
            <a
              v-for="social in socialLinks"
              :key="social.name"
              :href="social.url"
              class="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-red-600 hover:text-white transition duration-300 transform hover:-translate-y-1"
            >
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path :d="social.icon" />
              </svg>
            </a>
          </div>

          <div class="mt-8">
            <a
              href="mailto:contact@cgstudio.com"
              class="block text-center w-full py-3 border border-gray-700 rounded-lg text-gray-300 hover:border-red-600 hover:text-red-500 transition"
            >
              索取報價單
            </a>
          </div>
        </div>
      </div>

      <div
        class="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-gray-500 text-xs gap-4"
      >
        <p class="text-center">
          &copy; {{ currentYear }} 晨光工作室 Morning Light Studio. All rights reserved.
        </p>
        <div class="flex gap-6">
          <a href="#" class="hover:text-white">沒隱私權政策</a>
          <a href="#" class="hover:text-white">沒服務條款</a>
        </div>
      </div>
    </div>
  </footer>
</template>
