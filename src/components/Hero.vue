<template>
  <section id="home" class="min-h-[90svh] flex items-center pt-16">
    <div class="container-site w-full py-16 md:py-24">
      <p class="eyebrow mb-8" data-aos="fade-up">Morning Light Studio</p>

      <h1
        class="font-serif text-[2.75rem] sm:text-6xl md:text-7xl lg:text-[5.5rem] leading-[1.1] tracking-tight"
        data-aos="fade-up"
        data-aos-delay="100"
      >
        我們大腦<br />
        <span class="italic text-ember">很抽象</span>
      </h1>

      <p
        class="mt-8 text-lg md:text-xl text-ash max-w-xl leading-relaxed"
        data-aos="fade-up"
        data-aos-delay="200"
      >
        專業的不專業剪輯・整合行銷・頂級創造力
      </p>

      <div class="mt-12 flex flex-col sm:flex-row gap-3" data-aos="fade-up" data-aos-delay="300">
        <router-link to="/contact" class="btn-primary">立即諮詢 &rarr;</router-link>
        <router-link :to="{ path: '/', hash: '#portfolio' }" class="btn-secondary">查看作品</router-link>
      </div>
    </div>
  </section>
</template>
