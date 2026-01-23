<script setup>
import Navbar from "./components/Navbar.vue";
import Hero from "./components/Hero.vue";
import Services from "./components/Services.vue";
// import ColorGrade from './components/ColorGrade.vue'  <-- 這一行刪掉或註解
import Founder from "./components/Founder.vue"; // <-- 加入這行
import Portfolio from "./components/Portfolio.vue";
import Footer from "./components/Footer.vue";
</script>

<template>
  <div class="bg-gray-900 text-white min-h-screen font-sans">
    <Navbar />
    <main>
      <Hero />
      <Services />

      <Founder />

      <Portfolio />
    </main>
    <Footer />
  </div>
</template>
