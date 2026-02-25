<script setup>
import { ref } from "vue";

const form = ref({
  category: "剪輯合作",
  name: "",
  email: "",
  phone: "",
  message: "",
});

const isSubmitting = ref(false);
const submitStatus = ref(null);

const submitForm = async () => {
  isSubmitting.value = true;
  submitStatus.value = null;

  try {
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        access_key: "25ff17e2-c076-4717-adcf-7c0d016eb2c5",
        subject: `晨光工作室 - 新需求通知 [${form.value.category}]`,
        from_name: form.value.name,
        email: form.value.email,
        phone: form.value.phone, // 加上電話欄位
        category: form.value.category, // 加上分類欄位
        message: form.value.message,
      }),
    });

    if (response.status === 200) {
      submitStatus.value = "success";
      // 成功後清空表單，但保留預設分類
      form.value = { category: "剪輯合作", name: "", email: "", phone: "", message: "" };
    } else {
      submitStatus.value = "error";
    }
  } catch (error) {
    submitStatus.value = "error";
  } finally {
    isSubmitting.value = false;
  }
};
</script>

<template>
  <section
    id="contact"
    class="min-h-screen bg-black relative flex items-center justify-center py-24 pt-32 overflow-hidden"
  >
    <div
      class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-red-600/10 blur-[100px] md:blur-[150px] rounded-full pointer-events-none"
    ></div>

    <div class="max-w-4xl w-full mx-auto px-4 relative z-10">
      <div class="text-center mb-12" data-aos="fade-up">
        <h2 class="text-4xl md:text-5xl font-bold mb-4 text-white tracking-wider">
          聯絡我們<span class="text-red-600">.</span>
        </h2>
        <p class="text-gray-400 text-sm md:text-base tracking-wide">
          極致創作力，隨時準備為您的品牌打造最高 Punchline
        </p>
      </div>

      <div
        class="bg-gradient-to-br from-black via-gray-900 to-red-950/40 backdrop-blur-md border border-gray-800 hover:border-red-600/50 transition-colors duration-500 rounded-2xl p-6 md:p-12 shadow-2xl"
        data-aos="fade-up"
        data-aos-delay="100"
      >
        <form @submit.prevent="submitForm" class="space-y-8">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div class="group relative md:col-span-2">
              <label
                class="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-2 group-focus-within:text-red-500 transition-colors"
                >問題分類 / Category <span class="text-red-500">*</span></label
              >
              <div class="relative">
                <select
                  v-model="form.category"
                  required
                  class="w-full bg-black border border-gray-700 rounded-xl px-5 py-4 text-white appearance-none focus:border-red-600 focus:ring-1 focus:ring-red-600 outline-none transition duration-300 cursor-pointer"
                >
                  <option value="異業合作">異業合作</option>
                  <option value="剪輯合作">剪輯合作</option>
                  <option value="網紅經紀">網紅經紀</option>
                </select>
                <div
                  class="absolute inset-y-0 right-5 flex items-center pointer-events-none text-gray-400 group-focus-within:text-red-500 transition-colors"
                >
                  <svg
                    class="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M19 9l-7 7-7-7"
                    ></path>
                  </svg>
                </div>
              </div>
            </div>

            <div class="group relative">
              <label
                class="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-2 group-focus-within:text-red-500 transition-colors"
                >您的稱呼 / Name <span class="text-red-500">*</span></label
              >
              <input
                v-model="form.name"
                type="text"
                required
                class="w-full bg-black/50 border border-gray-700 rounded-xl px-5 py-4 text-white placeholder-gray-600 focus:border-red-600 focus:ring-1 focus:ring-red-600 outline-none transition duration-300"
                placeholder="例如：王小明"
              />
            </div>

            <div class="group relative">
              <label
                class="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-2 group-focus-within:text-red-500 transition-colors"
                >行動電話 / Phone <span class="text-red-500">*</span></label
              >
              <input
                v-model="form.phone"
                type="tel"
                required
                class="w-full bg-black/50 border border-gray-700 rounded-xl px-5 py-4 text-white placeholder-gray-600 focus:border-red-600 focus:ring-1 focus:ring-red-600 outline-none transition duration-300"
                placeholder="09xx-xxx-xxx"
              />
            </div>

            <div class="group relative md:col-span-2">
              <label
                class="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-2 group-focus-within:text-red-500 transition-colors"
                >電子信箱 / Email <span class="text-red-500">*</span></label
              >
              <input
                v-model="form.email"
                type="email"
                required
                class="w-full bg-black/50 border border-gray-700 rounded-xl px-5 py-4 text-white placeholder-gray-600 focus:border-red-600 focus:ring-1 focus:ring-red-600 outline-none transition duration-300"
                placeholder="example@mail.com"
              />
            </div>
          </div>

          <div class="group relative">
            <label
              class="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-2 group-focus-within:text-red-500 transition-colors"
              >需求說明 / Message <span class="text-red-500">*</span></label
            >
            <textarea
              v-model="form.message"
              rows="5"
              required
              class="w-full bg-black/50 border border-gray-700 rounded-xl px-5 py-4 text-white placeholder-gray-600 focus:border-red-600 focus:ring-1 focus:ring-red-600 outline-none transition duration-300 resize-none"
              placeholder="請詳細描述您的合作需求、影片類型或預算規劃..."
            ></textarea>
          </div>

          <div
            v-if="submitStatus === 'success'"
            class="p-4 bg-green-900/20 border border-green-500/50 rounded-xl text-green-400 text-center animate-fade-in flex items-center justify-center gap-2"
          >
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M5 13l4 4L19 7"
              ></path>
            </svg>
            發送成功！我們已經收到您的需求，將盡快與您聯繫。
          </div>
          <div
            v-if="submitStatus === 'error'"
            class="p-4 bg-red-900/20 border border-red-500/50 rounded-xl text-red-400 text-center animate-fade-in flex items-center justify-center gap-2"
          >
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
            發送失敗，請檢查網路狀態或稍後再試。
          </div>

          <div class="text-center pt-4">
            <button
              :disabled="isSubmitting"
              type="submit"
              class="relative inline-flex items-center justify-center w-full md:w-auto px-12 py-4 text-base font-bold text-white transition-all duration-300 bg-red-600 border border-transparent rounded-full hover:bg-red-700 hover:shadow-[0_0_20px_rgba(220,38,38,0.4)] disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:shadow-none"
            >
              <svg
                v-if="isSubmitting"
                class="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  class="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  stroke-width="4"
                ></circle>
                <path
                  class="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                ></path>
              </svg>
              <span>{{ isSubmitting ? "提案傳送中..." : "送出合作提案 &rarr;" }}</span>
            </button>
          </div>
        </form>
      </div>

      <div
        class="mt-12 flex flex-col md:flex-row items-center justify-center gap-6 text-gray-400 text-sm"
        data-aos="fade-up"
        data-aos-delay="200"
      >
        <div class="flex items-center gap-2">
          <span class="text-red-500">📧</span> roalxfreefire@gmail.com
        </div>
        <div class="hidden md:block text-gray-700">|</div>
        <div class="flex items-center gap-2">
          <span class="text-red-500">📱</span> 0953-006-059
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.animate-fade-in {
  animation: fadeIn 0.4s ease-out forwards;
}
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* 讓預設的 select 樣式更好看，隱藏原生箭頭 */
select {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
}
/* 針對選單選項的底色在部分瀏覽器進行優化 */
select option {
  background-color: #1f1f1f; /* Tailwind gray-900 */
  color: white;
}

select {
  /* 告訴瀏覽器使用深色渲染模式，這會讓彈出選單自動變深色並帶有系統預設圓角 */
  color-scheme: dark;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
}
</style>
