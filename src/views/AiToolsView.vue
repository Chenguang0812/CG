<script setup>
import { ref, onMounted, onUnmounted } from "vue";

// 隱藏頁面：不放在導覽列 / 首頁，只能用網址 /ai-tools 進入

const tools = [
  {
    title: "AI 告訴你哪裡可以剪",
    desc: "貼上整支片的逐字稿，AI 幫你把片子切成大段落，標出留、刪、待定。大段落定好，細節你自己剪。",
    steps: ["匯出整支片有時間碼的逐字稿", "貼 prompt，回答目標長度和主線", "貼逐字稿，照表剪大段落"],
    prompt: `你是剪輯師的初剪助理。等一下我會貼上一整支影片的逐字稿（有時間碼）。

開始前先問我兩題，等我回答再開始：
1. 這支片要剪成多長？
2. 這支片的主線是什麼（觀眾為什麼點進來）？

任務：把逐字稿切成大段落，判斷每段留、刪或待定。只處理大段落，句子裡的停頓、卡詞我自己剪。

留：推進主線的、情緒高點、拿掉後觀眾會看不懂的資訊
刪：離題、同一件事講第二次、等待和空檔、跟主線無關的閒聊
拿不準的標「待定」，不要硬判

用表格輸出，依時間排序：
開始時間｜結束時間｜這段在講什麼（一句話）｜留／刪／待定｜理由

最後告訴我：留下的總長、跟目標長度差多少；如果太長，建議先砍哪幾段。`,
  },
  {
    title: "AI 告訴你哪裡上字卡",
    desc: "貼上字幕，AI 列出哪幾句該上字卡、用什麼顏色。要不要上，最後你決定。",
    steps: ["匯出字幕 SRT", "貼 prompt，回答片型", "貼字幕，照表上字卡"],
    prompt: `你是剪輯師的字卡助理。等一下我會貼上一支影片的字幕（SRT 或有時間碼的逐字稿）。

開始前先問我：這支是「知識型」（要看得懂）還是「娛樂型」（要被情緒抓住）？等我回答再開始。

上字卡：拉長音、大喊、罵人、金句、驚嘆或反問、句尾的結論
不上：「...」、平凡敘述、長句、一兩個字的短句（髒話除外）

規則：
1. 重點通常在句尾，只取那段，不要整句搬
2. 連續兩句意思不同，只挑比較強的那句
3. 字卡只能一行，超過 14 字只留關鍵詞，不改原意
4. 密度：知識型每分鐘 2–3 張；娛樂型每分鐘 5–8 張

顏色：一般白、正向或講到錢黃、負面或驚訝紅、知識名詞藍

用表格輸出，依時間排序：
時間碼（分.秒.，例如 4.05.）｜字卡文字｜顏色｜為什麼上

最後補一行：總共幾張、每分鐘幾張、哪一段太密或太空。`,
  },
];

const locked = [
  "AI 直接剪好，不只給你段落",
  "字卡自動排上時間軸",
  "字幕自動校好，直接進 Premiere",
  "整套流程串起來，一支長片工時砍一半以上",
];

const openIndex = ref(null);
const toast = ref("");
let toastTimer;

function showToast(msg) {
  toast.value = msg;
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => (toast.value = ""), 1800);
}

async function copyPrompt(i) {
  try {
    await navigator.clipboard.writeText(tools[i].prompt);
    showToast("已複製，貼進 AI 對話框");
  } catch {
    // 剪貼簿不可用時，展開並選取 prompt 讓使用者手動複製
    openIndex.value = i;
    requestAnimationFrame(() => {
      const el = document.getElementById(`prompt-${i}`);
      if (!el) return;
      const range = document.createRange();
      range.selectNodeContents(el);
      const sel = window.getSelection();
      sel.removeAllRanges();
      sel.addRange(range);
    });
    showToast("已選取，長按或 Ctrl+C 複製");
  }
}

// 不讓搜尋引擎收錄這頁
let robotsMeta;
onMounted(() => {
  robotsMeta = document.createElement("meta");
  robotsMeta.name = "robots";
  robotsMeta.content = "noindex, nofollow";
  document.head.appendChild(robotsMeta);
});
onUnmounted(() => {
  robotsMeta?.remove();
  clearTimeout(toastTimer);
});
</script>

<template>
  <main>
    <section class="pt-32 pb-16 md:pb-20">
      <div class="container-site max-w-3xl">
        <p class="eyebrow mb-4">晨光 — 接案剪輯師</p>
        <h1 class="font-serif text-4xl md:text-5xl leading-tight tracking-tight">
          剪輯師的 AI 小工具<span class="text-ember">.</span>
        </h1>
        <p class="mt-6 text-ash leading-relaxed max-w-xl">
          兩段 prompt，複製貼進 ChatGPT 或 Claude 就能用。AI 告訴你哪裡剪、哪裡上字卡，動手的還是你。
        </p>
      </div>
    </section>

    <section class="pb-20 md:pb-28">
      <div class="container-site max-w-3xl border-t border-stone">
        <article
          v-for="(tool, i) in tools"
          :key="tool.title"
          class="py-10 md:py-12 border-b border-stone"
        >
          <span class="font-serif italic text-ash">{{ String(i + 1).padStart(2, "0") }} — 工具</span>
          <h2 class="font-serif text-2xl md:text-3xl mt-4 mb-3">{{ tool.title }}</h2>
          <p class="text-ash leading-relaxed">{{ tool.desc }}</p>

          <ol class="mt-6 space-y-2 text-sm">
            <li v-for="(step, j) in tool.steps" :key="step" class="flex gap-4">
              <span class="font-serif italic text-ash w-4 shrink-0">{{ j + 1 }}.</span>
              <span>{{ step }}</span>
            </li>
          </ol>

          <div class="mt-8 flex flex-wrap items-center gap-4">
            <button type="button" class="btn-primary" @click="copyPrompt(i)">複製 prompt</button>
            <button
              type="button"
              class="text-sm text-ash hover:text-ink transition-colors underline underline-offset-4 decoration-stone"
              :aria-expanded="openIndex === i"
              @click="openIndex = openIndex === i ? null : i"
            >
              {{ openIndex === i ? "收起 prompt" : "看 prompt 內容" }}
            </button>
          </div>

          <pre
            v-show="openIndex === i"
            :id="`prompt-${i}`"
            class="mt-6 p-5 bg-bone border border-stone/70 rounded text-sm leading-relaxed whitespace-pre-wrap font-sans max-h-80 overflow-auto"
          >{{ tool.prompt }}</pre>
        </article>
      </div>
    </section>

    <section class="py-20 md:py-28 bg-ink text-parchment">
      <div class="container-site max-w-3xl">
        <p class="font-serif italic text-sm text-parchment/60 tracking-wide mb-4">03 — 即將開放</p>
        <h2 class="font-serif text-3xl md:text-[2.5rem] leading-tight tracking-tight">想讓 AI 直接動手剪？</h2>
        <p class="mt-4 text-parchment/60 leading-relaxed max-w-xl">
          上面兩個是 AI 告訴你，下面這些是 AI 直接幫你做完。課程開放時解鎖。
        </p>

        <ul class="mt-10 border-t border-parchment/20">
          <li
            v-for="item in locked"
            :key="item"
            class="flex items-center gap-4 py-4 border-b border-parchment/20 text-parchment/85"
          >
            <svg class="h-4 w-4 shrink-0 text-parchment/50" viewBox="0 0 14 14" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" aria-hidden="true">
              <rect x="3" y="6.5" width="8" height="5.5" rx="1" />
              <path d="M5 6.5V5a2 2 0 0 1 4 0v1.5" />
            </svg>
            <span>{{ item }}</span>
          </li>
        </ul>

        <p class="mt-12 text-sm text-parchment/60">課程開放時第一個通知你</p>
        <div class="mt-4 flex flex-wrap gap-3">
          <a class="btn bg-parchment text-ink hover:bg-parchment/85" href="https://lin.ee/q7qXg7o" target="_blank" rel="noopener">加 LINE</a>
          <a class="btn border border-parchment/40 text-parchment hover:border-parchment" href="https://forms.gle/dGDMouQUPaUvXAeq8" target="_blank" rel="noopener">填 1 分鐘問卷</a>
        </div>
      </div>
    </section>

    <Transition
      enter-active-class="transition-opacity duration-200"
      leave-active-class="transition-opacity duration-200"
      enter-from-class="opacity-0"
      leave-to-class="opacity-0"
    >
      <div
        v-if="toast"
        role="status"
        aria-live="polite"
        class="fixed left-1/2 bottom-8 -translate-x-1/2 z-50 bg-ink text-parchment text-sm px-5 py-3 rounded"
      >
        {{ toast }}
      </div>
    </Transition>
  </main>
</template>
