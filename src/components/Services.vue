<script setup>
// 變數直接定義在這裡，不需要 export default
const services = [
  {
    title: "綜藝影片剪輯",
    desc: "我們有著極高的想像力跟創造力，會給你們意想不到的Punchline。",
    icon: "🎬",
  },
  {
    title: "短影音製作",
    desc: "掌握流量密碼的快節奏短影音，抓住觀眾眼球。",
    icon: "📱",
  },
  {
    title: "YouTuber企劃",
    desc: "從腳本企劃到拍攝剪輯，協助創作者穩定產出。",
    icon: "🎥",
  },
  {
    title: "Youtuber經紀",
    desc: "協助頻道發展，接洽工商及規劃未來發展方向",
    icon: "📱",
  },
];
</script>

<template>
  <section id="services" class="py-16 md:py-20 bg-gray-900">
    <div class="max-w-7xl mx-auto px-6">
      <h2
        class="text-3xl font-bold text-center mb-12 md:mb-16 border-b border-gray-700 pb-4 inline-block text-white"
      >
        服務項目
      </h2>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
        <div
          v-for="(service, index) in services"
          :key="index"
          class="bg-gray-800 p-6 md:p-8 rounded-xl hover:-translate-y-2 transition duration-300 border border-gray-700 hover:border-red-600"
        >
          <div class="text-4xl mb-4">{{ service.icon }}</div>
          <h3 class="text-xl font-bold mb-2 text-white">{{ service.title }}</h3>
          <p class="text-gray-400 text-sm leading-relaxed">{{ service.desc }}</p>
        </div>
      </div>
    </div>
  </section>
</template>
