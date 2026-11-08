<script setup>
import Navbar from "./components/Navbar.vue";
import Footer from "./components/Footer.vue";
</script>

<template>
  <div class="min-h-screen flex flex-col">
    <Navbar />

    <router-view class="flex-1" />

    <Footer />
  </div>
</template>
