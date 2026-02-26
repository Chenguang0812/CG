<template>
  <section
    id="home"
    class="relative h-screen flex items-center justify-center overflow-hidden"
  >
    <div
      class="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-gray-900 opacity-90 z-10"
    ></div>
    <div
      class="absolute inset-0 bg-[url('https://source.unsplash.com/random/1920x1080?film,studio')] bg-cover bg-[center_top]"
    ></div>

    <div class="relative z-20 text-center px-4 w-full">
      <h1 class="text-4xl md:text-7xl font-bold mb-6 tracking-tight">
        我們大腦<span class="text-red-600">很抽象</span>
      </h1>
      <p class="text-lg md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto px-4">
        專業的不專業剪輯・整合行銷・頂級創造力
      </p>
      <div class="flex flex-col md:flex-row justify-center gap-4 px-8 md:px-0">
        <a
          href="#portfolio"
          class="w-full md:w-auto border border-white hover:bg-white hover:text-black px-8 py-3 rounded-full transition duration-300 text-center"
        >
          查看作品
        </a>
        <a
          href="/contact"
          class="w-full md:w-auto bg-red-600 hover:bg-red-700 border border-red-600 px-8 py-3 rounded-full transition duration-300 text-center"
        >
          立即諮詢
        </a>
      </div>
    </div>
  </section>
  <hr class="border-gray-800" />
</template>
