<script setup>
import { ref, computed, watch, onBeforeUnmount } from "vue";
import SectionHeading from "./SectionHeading.vue";
import { works, HOME_FEATURED_COUNT } from "../data/works.js";

const props = defineProps({
  isHome: { type: Boolean, default: false },
});

const getYouTubeId = (url) => {
  const match = url?.match(/(?:youtu\.be\/|v\/|embed\/|shorts\/|[?&]v=)([\w-]{11})/);
  return match ? match[1] : null;
};

// 預先整理好每支作品的影片 ID
const allWorks = works
  .map((work) => ({ ...work, id: getYouTubeId(work.link) }))
  .filter((work) => work.id);

// 分類按鈕依作品資料自動產生
const categories = ["全部", ...new Set(allWorks.map((work) => work.category))];
const currentCategory = ref("全部");

const filteredWorks = computed(() => {
  let result = allWorks;

  if (props.isHome) {
    // 首頁：有標記 featured 就用標記的，否則取最新幾支
    const featured = allWorks.filter((work) => work.featured);
    result = featured.length ? featured : allWorks;
  }

  if (currentCategory.value !== "全部") {
    result = result.filter((work) => work.category === currentCategory.value);
  }

  return props.isHome ? result.slice(0, HOME_FEATURED_COUNT) : result;
});

// maxresdefault 不是每支影片都有，載入失敗就換成 hqdefault
const thumbnail = (id) => `https://img.youtube.com/vi/${id}/maxresdefault.jpg`;
const onThumbError = (event, id) => {
  const fallback = `https://img.youtube.com/vi/${id}/hqdefault.jpg`;
  if (event.target.src !== fallback) event.target.src = fallback;
};

// 影片彈窗
const selectedVideoId = ref(null);
const closeModal = () => (selectedVideoId.value = null);
const onKeydown = (event) => event.key === "Escape" && closeModal();

watch(selectedVideoId, (id) => {
  document.body.style.overflow = id ? "hidden" : "";
  if (id) window.addEventListener("keydown", onKeydown);
  else window.removeEventListener("keydown", onKeydown);
});

onBeforeUnmount(() => {
  document.body.style.overflow = "";
  window.removeEventListener("keydown", onKeydown);
});
</script>

<template>
  <section
    id="portfolio"
    :class="['border-t border-stone/70', isHome ? 'py-20 md:py-28' : 'pt-32 pb-24']"
  >
    <div class="container-site">
      <SectionHeading
        :eyebrow="isHome ? '03 — Selected Works' : 'Archive'"
        :title="isHome ? '精選作品' : '所有作品集'"
        subtitle="可以啦參考一下啦6767"
      />

      <div
        class="flex gap-2 mb-10 -mx-6 px-6 overflow-x-auto no-scrollbar sm:mx-0 sm:px-0 sm:flex-wrap"
        data-aos="fade-up"
      >
        <button
          v-for="cat in categories"
          :key="cat"
          type="button"
          :class="[
            'shrink-0 px-4 py-2 rounded text-sm transition-colors',
            currentCategory === cat
              ? 'bg-ink text-parchment'
              : 'bg-linen text-ink/70 hover:text-ink',
          ]"
          @click="currentCategory = cat"
        >
          {{ cat }}
        </button>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-10">
        <button
          v-for="work in filteredWorks"
          :key="work.link"
          type="button"
          class="group text-left"
          @click="selectedVideoId = work.id"
        >
          <div class="relative aspect-video overflow-hidden rounded bg-bone">
            <img
              :src="thumbnail(work.id)"
              :alt="work.title"
              loading="lazy"
              class="w-full h-full object-cover transition duration-700 group-hover:scale-[1.03]"
              @error="onThumbError($event, work.id)"
            />
            <span
              class="absolute top-2.5 right-2.5 w-8 h-8 rounded-full bg-parchment/90 shadow-sm flex items-center justify-center transition-transform group-hover:scale-110"
            >
              <svg class="w-3.5 h-3.5 ml-0.5 text-ink" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
            </span>
          </div>
          <div class="mt-4 flex items-baseline justify-between gap-4">
            <h3 class="font-serif text-lg leading-snug group-hover:text-ember transition-colors">
              {{ work.title }}
            </h3>
            <span class="eyebrow shrink-0">{{ work.category }}</span>
          </div>
        </button>
      </div>

      <p v-if="!filteredWorks.length" class="text-ash py-12">這個分類還沒有作品。</p>

      <div class="mt-16">
        <router-link v-if="isHome" to="/works" class="btn-ghost">查看更多作品 &rarr;</router-link>
        <router-link v-else to="/" class="btn-ghost">&larr; 返回首頁</router-link>
      </div>
    </div>

    <Transition name="fade">
      <div
        v-if="selectedVideoId"
        class="fixed inset-0 z-50 flex items-center justify-center bg-ink/80 backdrop-blur-sm p-4"
        @click.self="closeModal"
      >
        <div class="relative w-full max-w-5xl">
          <button
            type="button"
            class="absolute -top-12 right-0 p-2 -m-2 text-parchment/80 hover:text-parchment text-sm tracking-widest"
            @click="closeModal"
          >
            關閉 ✕
          </button>
          <div class="aspect-video rounded-lg overflow-hidden bg-ink shadow-2xl">
            <iframe
              :src="`https://www.youtube.com/embed/${selectedVideoId}?autoplay=1&rel=0`"
              title="YouTube video player"
              class="w-full h-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
        </div>
      </div>
    </Transition>
  </section>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
