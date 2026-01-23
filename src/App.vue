<script setup>
import Navbar from "./components/Navbar.vue";
import Footer from "./components/Footer.vue";
</script>

<template>
  <div class="bg-gray-900 text-white min-h-screen font-sans">
    <Navbar />

    <router-view />

    <Footer />
  </div>
</template>
