<script setup>
import Hero from "../components/Hero.vue";
import Services from "../components/Services.vue";
import Founder from "../components/Founder.vue";
import Portfolio from "../components/Portfolio.vue";
</script>

<template>
  <main>
    <Hero />
    <Services />
    <Founder />
    <Portfolio :is-home="true" />
  </main>
</template>
