<script setup>
import SectionHeading from "./SectionHeading.vue";
import founderImage from "../assets/boss.jpg";

const habits = [
  {
    title: "上廁所",
    desc: "工作的時候大概30分鐘上廁所一次，都是為了把不好的創意排泄，不是薪水小偷。",
  },
  {
    title: "玩遊戲",
    desc: "工作到一半會去玩遊戲，這不是偷懶，而是體驗薪水小偷的感覺。",
  },
];
</script>

<template>
  <section class="py-20 md:py-28 border-t border-stone/70">
    <div class="container-site grid md:grid-cols-12 gap-12 md:gap-16 items-center">
      <figure class="md:col-span-5 max-w-sm w-full mx-auto md:max-w-none" data-aos="fade-up">
        <div class="bg-bone p-3 rounded">
          <img
            :src="founderImage"
            alt="晨光工作室創辦人"
            class="w-full h-auto rounded-sm grayscale-[30%] sepia-[10%]"
          />
        </div>
        <figcaption class="eyebrow mt-4">Founder &amp; CEO</figcaption>
      </figure>

      <div class="md:col-span-7" data-aos="fade-up" data-aos-delay="100">
        <SectionHeading eyebrow="02 — Founder" title="頂級 Punchline 創造者" />

        <blockquote class="font-serif text-2xl md:text-3xl leading-snug -mt-4 mb-12">
          「創造力能讓所有事情<span class="text-ember">變有趣</span>」
        </blockquote>

        <dl class="border-t border-stone">
          <div
            v-for="habit in habits"
            :key="habit.title"
            class="py-6 border-b border-stone grid sm:grid-cols-[8rem_1fr] gap-2"
          >
            <dt class="font-serif text-lg">{{ habit.title }}</dt>
            <dd class="text-sm text-ash leading-relaxed">{{ habit.desc }}</dd>
          </div>
        </dl>
      </div>
    </div>
  </section>
</template>
