<script setup>
import { ref } from "vue";
import SectionHeading from "./SectionHeading.vue";
import { contact, inquiryCategories } from "../data/site.js";

const DEFAULT_CATEGORY = "剪輯合作";
const emptyForm = () => ({
  category: DEFAULT_CATEGORY,
  name: "",
  email: "",
  phone: "",
  message: "",
});

const form = ref(emptyForm());
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
        phone: form.value.phone,
        category: form.value.category,
        message: form.value.message,
      }),
    });

    if (response.ok) {
      submitStatus.value = "success";
      form.value = emptyForm();
    } else {
      submitStatus.value = "error";
    }
  } catch {
    submitStatus.value = "error";
  } finally {
    isSubmitting.value = false;
  }
};
</script>

<template>
  <section id="contact-form" class="pt-32 pb-24">
    <div class="container-site grid md:grid-cols-12 gap-12 md:gap-16">
      <div class="md:col-span-4">
        <SectionHeading
          eyebrow="Contact"
          title="聯絡我們"
          subtitle="極致創作力，隨時準備為您的品牌打造最高 Punchline"
        />

        <ul class="space-y-4 text-sm border-t border-stone pt-6" data-aos="fade-up">
          <li>
            <span class="field-label">Email</span>
            <a :href="`mailto:${contact.email}`" class="hover:text-ember transition-colors">
              {{ contact.email }}
            </a>
          </li>
          <li>
            <span class="field-label">Phone</span>
            <a :href="contact.phoneHref" class="hover:text-ember transition-colors">
              {{ contact.phone }}
            </a>
          </li>
          <li>
            <span class="field-label">LINE</span>
            {{ contact.line }}
          </li>
        </ul>
      </div>

      <form
        class="md:col-span-8 bg-bone rounded p-5 sm:p-8 md:p-10 space-y-6"
        data-aos="fade-up"
        data-aos-delay="100"
        @submit.prevent="submitForm"
      >
        <div>
          <label for="category" class="field-label">問題分類 / Category *</label>
          <div class="relative">
            <select id="category" v-model="form.category" required class="field appearance-none pr-10 cursor-pointer">
              <option v-for="cat in inquiryCategories" :key="cat" :value="cat">{{ cat }}</option>
            </select>
            <svg
              class="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-ash pointer-events-none"
              fill="none"
              stroke="currentColor"
              stroke-width="1.5"
              viewBox="0 0 24 24"
            >
              <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </div>

        <div class="grid sm:grid-cols-2 gap-6">
          <div>
            <label for="name" class="field-label">您的稱呼 / Name *</label>
            <input id="name" v-model="form.name" type="text" required class="field" placeholder="例如：王小明" />
          </div>
          <div>
            <label for="phone" class="field-label">行動電話 / Phone *</label>
            <input id="phone" v-model="form.phone" type="tel" required class="field" placeholder="09xx-xxx-xxx" />
          </div>
        </div>

        <div>
          <label for="email" class="field-label">電子信箱 / Email *</label>
          <input id="email" v-model="form.email" type="email" required class="field" placeholder="example@mail.com" />
        </div>

        <div>
          <label for="message" class="field-label">需求說明 / Message *</label>
          <textarea
            id="message"
            v-model="form.message"
            rows="5"
            required
            class="field resize-none"
            placeholder="請詳細描述您的合作需求、影片類型或預算規劃..."
          ></textarea>
        </div>

        <p
          v-if="submitStatus === 'success'"
          class="p-4 rounded border border-[#34785c]/40 text-[#34785c] text-sm"
        >
          發送成功！我們已經收到您的需求，將盡快與您聯繫。
        </p>
        <p
          v-if="submitStatus === 'error'"
          class="p-4 rounded border border-ember/40 text-ember text-sm"
        >
          發送失敗，請檢查網路狀態或稍後再試。
        </p>

        <button
          type="submit"
          :disabled="isSubmitting"
          class="btn-primary w-full sm:w-auto disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {{ isSubmitting ? "提案傳送中..." : "送出合作提案 →" }}
        </button>
      </form>
    </div>
  </section>
</template>
