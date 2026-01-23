<script setup>
const founderImage = new URL("../assets/boss.jpg", import.meta.url).href;
</script>

<template>
  <section class="py-16 md:py-24 bg-gray-900 relative overflow-hidden">
    <div
      class="absolute top-0 right-0 text-[10rem] md:text-[20rem] font-black text-gray-800 opacity-10 leading-none select-none pointer-events-none -mr-10 -mt-10 md:-mr-20 md:-mt-20"
    >
      16
    </div>

    <div
      class="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center gap-10 md:gap-16 relative z-10"
    >
      <div class="w-full md:w-1/2" data-aos="fade-right">
        <div class="relative group max-w-sm mx-auto md:max-w-none">
          <div
            class="absolute -inset-2 md:-inset-4 border-2 border-red-600 rounded-lg opacity-50 group-hover:opacity-100 group-hover:scale-105 transition duration-500"
          ></div>
          <div
            class="relative rounded-lg overflow-hidden shadow-2xl transition duration-700"
          >
            <img
              :src="founderImage"
              alt="Founder"
              class="w-full h-auto object-cover transform group-hover:scale-110 transition duration-700"
            />
          </div>
          <div
            class="absolute bottom-4 left-4 bg-red-600 text-white px-3 py-1 text-xs md:text-sm font-bold tracking-widest uppercase"
          >
            Founder & CEO
          </div>
        </div>
      </div>

      <div class="w-full md:w-1/2 text-left" data-aos="fade-left">
        <h2 class="text-4xl md:text-6xl font-black text-white mb-4 md:mb-6 leading-tight">
          頂級<br />
          <span
            class="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-500"
            >Punchline創造者</span
          >
        </h2>

        <p
          class="text-lg md:text-xl text-gray-300 mb-8 font-light border-l-4 border-red-600 pl-4 md:pl-6 italic"
        >
          "創造力能讓所有事情變有趣"
        </p>

        <div class="space-y-4 md:space-y-6">
          <div
            class="bg-gray-800/50 p-5 md:p-6 rounded-xl border border-gray-700 hover:border-red-500 transition duration-300"
          >
            <h3 class="text-lg md:text-xl font-bold text-white mb-2 flex items-center">
              <span class="text-red-500 mr-2">⚡</span> 極致創作力
            </h3>
            <p class="text-gray-400 text-sm">
              不被傳統框架綑綁play，用媽媽生下的腦袋激發出蹦蹦炸彈。
            </p>
          </div>

          <div
            class="bg-gray-800/50 p-5 md:p-6 rounded-xl border border-gray-700 hover:border-red-500 transition duration-300"
          >
            <h3 class="text-lg md:text-xl font-bold text-white mb-2 flex items-center">
              <span class="text-red-500 mr-2">💼</span> 超齡管理思維
            </h3>
            <p class="text-gray-400 text-sm">我超屌。</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
