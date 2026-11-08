<script setup>
import SectionHeading from "./SectionHeading.vue";
import { services } from "../data/site.js";
</script>

<template>
  <section id="services" class="py-20 md:py-28 border-t border-stone/70">
    <div class="container-site">
      <SectionHeading eyebrow="01 — Services" title="服務項目" />

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border-t border-stone">
        <article
          v-for="(service, index) in services"
          :key="service.title"
          class="py-8 sm:px-6 border-b border-stone lg:border-b-0 sm:[&:nth-child(odd)]:border-r sm:[&:nth-child(odd)]:pl-0 lg:[&:not(:last-child)]:border-r lg:pl-6 lg:first:pl-0"
          data-aos="fade-up"
          :data-aos-delay="index * 80"
        >
          <span class="font-serif italic text-ash">{{ String(index + 1).padStart(2, "0") }}</span>
          <h3 class="font-serif text-xl mt-6 mb-3">{{ service.title }}</h3>
          <p class="text-sm text-ash leading-relaxed">{{ service.desc }}</p>
        </article>
      </div>
    </div>
  </section>
</template>
