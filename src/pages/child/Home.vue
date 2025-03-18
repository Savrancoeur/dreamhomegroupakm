<template>
  <main class="container mx-auto px-6 py-8 min-h-screen">
    <section>
      <!-- Carousel Section -->
      <div class="relative overflow-hidden h-[600px] mb-12 rounded-lg">
        <div
          class="flex transition-transform duration-500 ease-in-out"
          ref="carousel"
        >
          <div v-for="i in 5" :key="i" class="min-w-full h-[600px] relative">
            <img
              :src="`/src/assets/carousel/photo${i}.jpg`"
              :alt="`Slide ${i}`"
              class="w-full h-full object-cover"
            />
            <div
              class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"
            >
              <div class="absolute bottom-8 left-8 text-white">
                <h3 class="text-2xl font-bold mb-2">Dream Home Group</h3>
                <p class="text-lg text-white/90">
                  ကျွန်ုပ်တို့၏ လုပ်ငန်းခွင်များ
                </p>
              </div>
            </div>
          </div>
        </div>

        <!-- Navigation dots -->
        <div
          class="absolute bottom-4 left-0 right-0 flex justify-center space-x-2"
        >
          <button
            v-for="i in 5"
            :key="i"
            @click="goToSlide(i - 1)"
            :class="[
              'w-3 h-3 rounded-full transition-all',
              currentSlide === i - 1
                ? 'bg-white scale-125'
                : 'bg-white bg-opacity-50',
            ]"
          ></button>
        </div>

        <!-- Arrow navigation -->
        <button
          @click="prevSlide"
          class="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>
        <button
          @click="nextSlide"
          class="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>

      <!-- Welcome Section -->

      <!-- Featured Services with Animation -->
      <div class="py-24 bg-gray-50">
        <div class="container mx-auto px-6 max-w-7xl">
          <div class="grid md:grid-cols-2 gap-12 items-center">
            <div class="space-y-6">
              <h2 class="text-4xl font-bold text-[#0C1C57]">
                အကောင်းဆုံး ဝန်ဆောင်မှုများ
              </h2>
              <div class="space-y-4">
                <div class="flex items-start space-x-4">
                  <div class="text-[#F4B400] text-2xl mt-1">
                    <font-awesome-icon icon="building" />
                  </div>
                  <div>
                    <h3 class="text-xl font-semibold text-[#0C1C57]">
                      အဆောက်အဦး တည်ဆောက်ခြင်း
                    </h3>
                    <p class="text-gray-600 mt-2">
                      ခိုင်ခံ့ပြီး ခေတ်မီသော အဆောက်အဦးများ တည်ဆောက်ခြင်း
                    </p>
                  </div>
                </div>
                <div class="flex items-start space-x-4">
                  <div class="text-[#F4B400] text-2xl mt-1">
                    <font-awesome-icon icon="paint-roller" />
                  </div>
                  <div>
                    <h3 class="text-xl font-semibold text-[#0C1C57]">
                      အိမ်အတွင်း အလှဆင်ခြင်း
                    </h3>
                    <p class="text-gray-600 mt-2">
                      ခေတ်မီဆန်းသစ်သော ဒီဇိုင်းများဖြင့် အလှဆင်ခြင်း
                    </p>
                  </div>
                </div>
                <div class="flex items-start space-x-4">
                  <div class="text-[#F4B400] text-2xl mt-1">
                    <font-awesome-icon icon="solar-panel" />
                  </div>
                  <div>
                    <h3 class="text-xl font-semibold text-[#0C1C57]">
                      ဆိုလာစနစ် တပ်ဆင်ခြင်း
                    </h3>
                    <p class="text-gray-600 mt-2">
                      စွမ်းအင်ခြွေတာရေးအတွက် ဆိုလာစနစ်များ တပ်ဆင်ပေးခြင်း
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="relative">
              <img
                src="@/assets/home/photo2.png"
                alt="Construction Process"
                class="rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-500"
              />
              <div
                class="absolute -bottom-6 -left-6 bg-[#F4B400] p-6 rounded-xl shadow-xl"
              >
                <p class="text-2xl font-bold text-[#0C1C57]">၁၀+ နှစ်</p>
                <p class="text-[#0C1C57]/80">အတွေ့အကြုံ</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Hero Section with Video/Animation Background -->
      <div class="relative h-screen">
        <div
          class="absolute inset-0 bg-gradient-to-r from-[#0C1C57]/70 to-[#0C1C57]/50"
        >
          <img
            src="@/assets/home/photo1.png"
            alt="Dream Home Group"
            class="w-full h-full object-cover mix-blend-overlay"
          />
        </div>
        <div
          class="relative container mx-auto px-6 h-full flex flex-col justify-center items-center text-center"
        >
          <h1 class="text-4xl md:text-5xl lg:text-7xl font-bold text-[#F4B400] mb-4 md:mb-8">
            Dream Home Group
          </h1>
          <p class="text-base md:text-lg lg:text-2xl text-white/90 max-w-4xl leading-relaxed px-4 md:px-6">
            ကျွန်ုပ်တို့ Dream Home Group Co.,Ltd သည် လူမှုဘဝပါတ်ဝန်းကျင်
            ဖွံ့ဖြိုးတိုးတက်မှုအတွက် အဆောက်အဦးတည်ဆောက်ခြင်း၊
            အိမ်အတွင်းအလှဆင်ခြင်း၊ စွမ်းအင်ခြွေတာရေးအတွက် ဆိုလာစနစ်တပ်ဆင်ခြင်း၊
            Modern Furniture လုပ်ငန်းနှင့်
            အိမ်ခြံမြေအကျိုးဆောင်လုပ်ငန်းများဖြင့် ဝန်ဆောင်မှုပေးသော
            ကုမ္ပဏီတစ်ခုဖြစ်ပါသည်။
          </p>
          <div class="mt-8 md:mt-12">
            <router-link
              to="/contact"
              class="inline-block bg-[#F4B400] text-[#0C1C57] px-6 md:px-8 py-2 md:py-3 rounded-full text-lg md:text-xl font-semibold hover:bg-[#F4B400]/90 transition-all duration-300 relative overflow-hidden group"
            >
              <span class="relative z-10">ဆက်သွယ်ရန်</span>
              <span
                class="absolute inset-0 bg-gradient-to-r from-yellow-400 via-[#F4B400] to-yellow-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              ></span>
              <span
                class="absolute -inset-1 border-2 border-dashed border-[#0C1C57] rounded-full opacity-0 group-hover:opacity-30 group-hover:animate-spin-slow"
              ></span>
            </router-link>
          </div>
        </div>
      </div>

      <!-- Project Showcase -->
      <div class="py-24">
        <div class="container mx-auto px-6 max-w-7xl">
          <h2 class="text-4xl font-bold text-center text-[#0C1C57] mb-16">
            ကျွန်ုပ်တို့၏ စီမံကိန်းများ
          </h2>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div
              v-for="i in 8"
              :key="i"
              @click="toggleCard(i)"
              class="group relative overflow-hidden rounded-xl shadow-lg cursor-pointer hover:shadow-xl transition-shadow duration-300"
            >
              <img
                :src="`/src/assets/home/photo${i}.png`"
                :alt="`Project ${i}`"
                class="w-full h-[300px] object-cover transition-transform duration-500"
                :class="[
                  'group-hover:scale-105',
                  { 'scale-105': activeCard === i }
                ]"
              />
              <!-- Construction overlay -->
              <div 
                class="absolute inset-0 bg-[#F4B400]/10 transition-all duration-300"
                :class="[
                  'opacity-0 group-hover:opacity-100',
                  { 'opacity-100': activeCard === i }
                ]"
              >
                <div class="absolute inset-0 border-4 border-dashed border-[#F4B400]/80 animate-border-dance"></div>
                <div class="absolute top-4 left-4 bg-[#F4B400] p-3 rounded-full transform -rotate-12">
                  <font-awesome-icon icon="building" class="w-6 h-6 text-[#0C1C57]" />
                </div>
                <div class="absolute top-4 right-4 bg-[#F4B400] p-3 rounded-full transform rotate-12">
                  <font-awesome-icon icon="paint-roller" class="w-6 h-6 text-[#0C1C57]" />
                </div>
              </div>
              <!-- Content overlay -->
              <div 
                class="absolute inset-0 bg-gradient-to-t from-[#0C1C57]/70 to-transparent transition-all duration-300"
                :class="[
                  'opacity-0 group-hover:opacity-100',
                  { 'opacity-100': activeCard === i }
                ]"
              >
                <div class="absolute bottom-6 left-6">
                  <h3 class="text-xl font-semibold text-[#F4B400]">
                    {{
                      [
                        "အဆောက်အဦး စီမံကိန်း",
                        "အိမ်တွင်းအလှဆင်မှု",
                        "ဆိုလာစနစ်",
                        "Modern Furniture",
                        "အိမ်ခြံမြေဝန်ဆောင်မှု",
                        "အိမ်ရာစီမံကိန်း",
                        "ရုံးခန်းဒီဇိုင်း",
                        "စက်မှုလုပ်ငန်းသုံးအဆောက်အအုံ",
                      ][i - 1]
                    }}
                  </h3>
                  <p class="text-white/90 mt-2">
                    {{
                      [
                        "ရန်ကုန်မြို့",
                        "ဒီဇိုင်းလက်ရာများ",
                        "စွမ်းအင်ခြွေတာရေး",
                        "ပရိဘောဂများ",
                        "အိမ်ခြံမြေဝန်ဆောင်မှု",
                        "မန္တလေးမြို့",
                        "ခေတ်မီရုံးခန်းများ",
                        "စက်မှုဇုန်စီမံကိန်း",
                      ][i - 1]
                    }}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";

const carousel = ref(null);
const currentSlide = ref(0);
const activeCard = ref(null); // Add this line
const totalSlides = 5;
let autoplayInterval = null;

// Add this function
const toggleCard = (index) => {
  if (window.innerWidth <= 768) {
    activeCard.value = activeCard.value === index ? null : index;
  }
};

const updateCarousel = () => {
  if (carousel.value) {
    const translateValue = currentSlide.value * -100;
    carousel.value.style.transform = `translateX(${translateValue}%)`;

    if (currentSlide.value === totalSlides - 1) {
      carousel.value.addEventListener(
        "transitionend",
        () => {
          currentSlide.value = 0;
          carousel.value.style.transition = "none";
          carousel.value.style.transform = "translateX(0)";
          requestAnimationFrame(() => {
            carousel.value.style.transition = "transform 1s ease-in-out";
          });
          carousel.value.removeEventListener("transitionend", () => {}); // Remove the listener after execution
        },
        { once: true }
      ); // Ensure the listener only runs once
    }
  }
};

const nextSlide = () => {
  currentSlide.value = (currentSlide.value + 1) % totalSlides;
  updateCarousel();
};

const prevSlide = () => {
  currentSlide.value = (currentSlide.value - 1 + totalSlides) % totalSlides;
  updateCarousel();
};

const goToSlide = (index) => {
  currentSlide.value = index;
  updateCarousel();
  setTimeout(resetAutoplay, 600);
};

const resetAutoplay = () => {
  if (autoplayInterval) {
    clearInterval(autoplayInterval);
  }
  autoplayInterval = setInterval(nextSlide, 4000);
};

onMounted(() => {
  updateCarousel();
  resetAutoplay();
});

onBeforeUnmount(() => {
  if (autoplayInterval) {
    clearInterval(autoplayInterval);
  }
});
</script>

<style>
.transition-transform {
  transition: transform 1s ease-in-out;
}

@keyframes spin-slow {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

.animate-spin-slow {
  animation: spin-slow 8s linear infinite;
}

@keyframes border-dance {
  0% {
    clip-path: inset(0 0 95% 0);
  }
  25% {
    clip-path: inset(0 95% 0 0);
  }
  50% {
    clip-path: inset(95% 0 0 0);
  }
  75% {
    clip-path: inset(0 0 0 95%);
  }
  100% {
    clip-path: inset(0 0 95% 0);
  }
}

.animate-border-dance {
  animation: border-dance 3s linear infinite;
}
</style>
