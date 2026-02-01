<script setup>
import { ref, computed } from "vue";

const props = defineProps({
  isHome: {
    type: Boolean,
    default: false,
  },
});

// ▼▼▼ 這裡記得放你全部的作品連結 ▼▼▼
const works = [
  {
    title: "嗨！營業中",
    category: "綜藝",
    link: "https://youtu.be/6N9PNBW5t3E?si=CMbVG9mcs6CrGrAt",
  },
  {
    title: "反骨男孩",
    category: "綜藝",
    link: "https://www.youtube.com/watch?v=v4eZ1pXI35k&pp=2AYF",
  },
  {
    title: "達達Car后",
    category: "綜藝",
    link: "https://youtu.be/rudywJXb3EU?si=gOrgKW3JyATKZXT9",
  },
  {
    title: "傑克開吃",
    category: "美食",
    link:
      "https://www.youtube.com/watch?v=XVlzWB1zJzk&list=PLd6uy9rEz5Xg3qXMt5dHFhxecletEqpRM&index=5",
  },
  {
    title: "大鈞",
    category: "Vlog",
    link: "https://youtu.be/u6FMHWCImLA?si=hT7M_gYHu1iJsUXq",
  },
  {
    title: "尼克星",
    category: "遊戲影片",
    link: "https://youtu.be/MAmJrQY3M4s?si=ixHCMArRsK2KjyDn",
  },
  {
    title: "盧志遠",
    category: "Vlog",
    link: "https://youtu.be/eqXs_hMQbBY?si=9iWaUrlvb8SvkY64",
  },

  {
    title: "晨光(老闆本闆)",
    category: "遊戲影片",
    link: "https://youtu.be/6OkP8vTQ4_E?si=VL8-x-d9shwXTMDi",
  },
  {
    title: "傑克開吃",
    category: "美食",
    link: "https://youtu.be/Gc_81YVAawQ?si=LsZUrjCHGv95p3er",
  },
  {
    title: "禾園全屋訂制",
    category: "商業影片",
    link: "https://youtu.be/pVxR97fy0Gc?si=H6cYFEamVZmedhWd",
  },
  {
    title: "酷炫老師",
    category: "綜藝",
    link: "https://youtu.be/lapEGazUQqI?si=IqwhyyyDFlumoYMD",
  },
  {
    title: "天母無聊怪",
    category: "商業影片",
    link: "https://youtu.be/XtaHghgmq94?si=YhhWoEv_KBe9hifJ",
  },
  {
    title: "Dinner Lin",
    category: "Vlog",
    link: "https://youtu.be/sbAlLB9Z_68?si=OWUtBNCeAG3clq3b",
  },
  {
    title: "我是蕾菈I'm Lyla",
    category: "綜藝",
    link: "https://youtu.be/m9vB9G0SnVc?si=ZWo5dVp-556hFdfP",
  },
  {
    title: "沁柔的沁 Yuchinjou",
    category: "綜藝",
    link:
      "https://www.youtube.com/watch?v=qxhTCOqch8c&list=PLd6uy9rEz5Xg3qXMt5dHFhxecletEqpRM&index=16",
  },
  {
    title: "日本不動產 R-GROUP",
    category: "商業影片",
    link: "https://www.youtube.com/watch?v=HhifZqczyxs",
  },
  {
    title: "日本不動產 R-GROUP",
    category: "商業影片",
    link: "https://youtu.be/CjfDUxh95ZI?si=2vSTxiUPtoEJ1CRY",
  },
];

const getYouTubeId = (url) => {
  if (!url) return "";
  const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
  const match = url.match(regExp);
  return match && match[2].length === 11 ? match[2] : null;
};

const getThumbnail = (url) => {
  const id = getYouTubeId(url);
  return id ? `https://img.youtube.com/vi/${id}/maxresdefault.jpg` : "";
};

const currentCategory = ref("全部");
const selectedVideoId = ref(null);
const categories = ["全部", "綜藝", "美食", "商業影片", "遊戲影片", "Vlog"];

const filteredWorks = computed(() => {
  let result = works;

  if (currentCategory.value !== "全部") {
    result = works.filter((work) => work.category === currentCategory.value);
  }

  // ★★★ 如果是首頁模式，強制只取前 6 個 ★★★
  if (props.isHome) {
    return result.slice(0, 6);
  }

  // 如果不是首頁，就回傳全部
  return result;
});

const openModal = (url) => {
  selectedVideoId.value = getYouTubeId(url);
};
const closeModal = () => {
  selectedVideoId.value = null;
};
</script>

<template>
  <section
    id="portfolio"
    :class="['bg-black relative', isHome ? 'py-16 md:py-24' : 'py-24 pt-32 min-h-screen']"
  >
    <div class="max-w-7xl mx-auto px-4">
      <div class="text-center mb-8 md:mb-12" data-aos="fade-up">
        <h2 class="text-3xl md:text-4xl font-bold mb-4 text-white">
          {{ isHome ? "精選作品" : "所有作品集" }}
        </h2>
        <p class="text-gray-400 text-sm md:text-base">用鏡頭捕捉每一個精彩瞬間</p>
      </div>

      <div
        class="flex flex-wrap justify-center gap-3 md:gap-4 mb-8 md:mb-12"
        data-aos="fade-up"
        data-aos-delay="100"
      >
        <button
          v-for="cat in categories"
          :key="cat"
          @click="currentCategory = cat"
          :class="[
            'px-4 py-2 md:px-6 text-sm md:text-base rounded-full border transition duration-300 whitespace-nowrap',
            currentCategory === cat
              ? 'bg-red-600 border-red-600 text-white'
              : 'border-gray-700 text-gray-400 hover:border-white hover:text-white',
          ]"
        >
          {{ cat }}
        </button>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        <div
          v-for="(work, index) in filteredWorks"
          :key="work.title"
          class="group relative overflow-hidden rounded-xl cursor-pointer bg-gray-900 border border-gray-800 hover:border-red-600/50 transition-colors"
          data-aos="fade-up"
          :data-aos-delay="index * 50"
          @click="openModal(work.link)"
        >
          <div class="aspect-video overflow-hidden">
            <img
              :src="getThumbnail(work.link)"
              alt="Work Thumbnail"
              class="w-full h-full object-cover transform group-hover:scale-110 transition duration-700 opacity-90 group-hover:opacity-100"
            />
          </div>
          <div class="absolute inset-0 flex items-center justify-center z-20">
            <div
              class="w-12 h-12 md:w-16 md:h-16 bg-red-600/80 md:bg-red-600 rounded-full flex items-center justify-center shadow-lg transform md:scale-0 group-hover:scale-100 transition duration-300"
            >
              <svg
                class="w-6 h-6 md:w-8 md:h-8 text-white ml-1"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
          </div>
          <div
            class="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-90 flex flex-col justify-end p-4 md:p-6 pointer-events-none"
          >
            <span
              class="text-red-500 text-[10px] md:text-xs font-bold uppercase tracking-wider mb-1"
              >{{ work.category }}</span
            >
            <h3
              class="text-lg md:text-xl font-bold text-white group-hover:text-red-500 transition-colors"
            >
              {{ work.title }}
            </h3>
          </div>
        </div>
      </div>

      <div class="mt-12 text-center" data-aos="fade-up">
        <router-link
          v-if="isHome"
          to="/works"
          class="inline-block border border-gray-600 text-gray-300 hover:border-red-600 hover:text-red-600 hover:bg-gray-900 px-8 py-3 rounded-full transition duration-300 text-sm md:text-base tracking-wide"
        >
          查看更多作品 (View More) &rarr;
        </router-link>

        <router-link
          v-else
          to="/"
          class="inline-block border border-gray-600 text-gray-300 hover:border-white hover:text-white hover:bg-gray-900 px-8 py-3 rounded-full transition duration-300 text-sm md:text-base tracking-wide"
        >
          &larr; 返回首頁 (Back to Home)
        </router-link>
      </div>
    </div>

    <div
      v-if="selectedVideoId"
      class="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-sm p-4 animate-fade-in"
      @click.self="closeModal"
    >
      <div
        class="relative w-full max-w-5xl aspect-video bg-black rounded-lg overflow-hidden shadow-2xl border border-gray-800"
      >
        <button
          @click="closeModal"
          class="absolute -top-10 right-0 md:top-4 md:right-4 text-white hover:text-red-500 z-20 bg-gray-800/80 md:bg-black/50 rounded-full p-2 transition"
        >
          <svg
            class="w-8 h-8 md:w-6 md:h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
        <iframe
          :src="`https://www.youtube.com/embed/${selectedVideoId}?autoplay=1&rel=0`"
          title="YouTube video player"
          class="w-full h-full"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
    </div>
  </section>
</template>

<style scoped>
.animate-fade-in {
  animation: fadeIn 0.3s ease-out;
}
@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
</style>
