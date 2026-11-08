<script setup>
defineProps({
  eyebrow: { type: String, default: "" }, // 小標，例如「01 — Services」
  title: { type: String, required: true },
  subtitle: { type: String, default: "" },
  center: { type: Boolean, default: false },
});
</script>

<template>
  <header :class="['mb-12 md:mb-16', center && 'text-center']" data-aos="fade-up">
    <p v-if="eyebrow" class="eyebrow mb-4">{{ eyebrow }}</p>
    <h2 class="font-serif text-3xl md:text-[2.5rem] leading-tight tracking-tight">
      {{ title }}
    </h2>
    <p
      v-if="subtitle"
      :class="['mt-4 text-ash leading-relaxed max-w-xl', center && 'mx-auto']"
    >
      {{ subtitle }}
    </p>
  </header>
</template>
