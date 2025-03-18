<template>
  <!-- Hero Section -->
  <div class="relative h-[500px] mb-16">
    <div
      class="absolute inset-0 bg-gradient-to-r from-[#0C1C57]/60 to-[#0C1C57]/40"
    >
      <img
        src="@/assets/donations/photo1.png"
        alt="CSR Background"
        class="w-full h-full object-cover mix-blend-overlay opacity-75"
      />
    </div>
    <div
      class="relative container mx-auto px-6 h-full flex flex-col justify-center items-center text-center"
    >
      <h1 class="text-6xl font-bold text-[#F4B400] mb-6">
        Corporate Social Responsibility (CSR)
      </h1>
      <p class="text-2xl text-white/90 max-w-3xl">
        Dream Home Group of Company သည် လူမှု ပတ်၀န်းကျင် အကျိုးပြုလုပ်ငန်းများ
        ကို အစဉ်ဆောင်ရွက်ပေးနေသော အဖွဲ့အစည်းဖြစ်သည်။
      </p>
    </div>
  </div>

  <!-- Donation Content -->
  <div class="container mx-auto px-6 py-16 max-w-7xl">
    <!-- Mission Statement -->
    <div class="text-center mb-16">
      <h2 class="text-3xl font-bold text-[#0C1C57] mb-4">
        လူမှုရေးဆောင်ရွက်ချက်များ
      </h2>
      <p class="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
        လူမှုရေးဆောင်ရွက်ချက်အနေဖြင့် သန်လျင်မြို့နယ် ရှိ ချစ်ခြင်းမေတ္တာ
        မိဘမဲ့ဂေဟာ ရှိ မိဘမဲ့ ကလေးငယ်များအတွက် ဆန် ၊ဆီ နှင့် တကွ
        ကျောင်း၀တ်စုံများ ထောက်ပံ့ပေးခြင်း ၊ ပဲခူးမြို့ အောင်သုခ ဓမ္မရိပ်သာခွဲ
        အတွက် Solar maintenance လုပ်ငန်း များ ဆောင်ရွက်ပေးခြင်း တို့ဖြစ်သည်။
      </p>
    </div>
    <!-- Donation Categories -->
    <div class="grid md:grid-cols-3 gap-8 mb-16">
      <div class="bg-white p-8 rounded-2xl shadow-lg text-center">
        <div class="text-[#F4B400] text-4xl mb-4">
          <font-awesome-icon icon="hand-holding-heart" />
        </div>
        <h3 class="text-xl font-bold text-[#0C1C57] mb-3">Humanitarian Aid</h3>
        <p class="text-gray-600">
          Supporting communities with essential supplies and resources during
          times of need.
        </p>
      </div>

      <div class="bg-white p-8 rounded-2xl shadow-lg text-center">
        <div class="text-[#F4B400] text-4xl mb-4">
          <font-awesome-icon icon="graduation-cap" />
        </div>
        <h3 class="text-xl font-bold text-[#0C1C57] mb-3">Education Support</h3>
        <p class="text-gray-600">
          Providing educational resources and scholarships to underprivileged
          students.
        </p>
      </div>

      <div class="bg-white p-8 rounded-2xl shadow-lg text-center">
        <div class="text-[#F4B400] text-4xl mb-4">
          <font-awesome-icon icon="house" />
        </div>
        <h3 class="text-xl font-bold text-[#0C1C57] mb-3">
          Housing Assistance
        </h3>
        <p class="text-gray-600">
          Helping families achieve their dream of having a safe and comfortable
          home.
        </p>
      </div>
    </div>

    <!-- Recent Donations -->
    <div class="bg-white p-8 rounded-2xl shadow-lg">
      <h2 class="text-2xl font-bold text-[#0C1C57] mb-8">
        Our Recent Activities
      </h2>

      <!-- Gallery Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div class="group relative overflow-hidden rounded-xl shadow-lg">
          <img
            src="@/assets/donations/photo3.png"
            alt="CSR Activity"
            class="w-full h-72 object-cover transition-transform duration-300 group-hover:scale-110"
          />
          <div
            class="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          >
            <div class="absolute bottom-4 left-4 text-white">
              <h3 class="text-lg font-semibold">အောင်သုခ ဓမ္မရိပ်သာခွဲ</h3>
              <p class="text-sm">ပဲခူးမြို့</p>
            </div>
          </div>
        </div>

        <div class="group relative overflow-hidden rounded-xl shadow-lg">
          <img
            src="@/assets/donations/photo2.png"
            alt="CSR Activity"
            class="w-full h-72 object-cover transition-transform duration-300 group-hover:scale-110"
          />
          <div
            class="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          >
            <div class="absolute bottom-4 left-4 text-white">
              <h3 class="text-lg font-semibold">Solar Maintenance</h3>
              <p class="text-sm">ဓမ္မရိပ်သာအတွက် ပြုပြင်ထိန်းသိမ်းခြင်း</p>
            </div>
          </div>
        </div>

        <div class="group relative overflow-hidden rounded-xl shadow-lg">
          <img
            src="@/assets/donations/photo4.png"
            alt="CSR Activity"
            class="w-full h-72 object-cover transition-transform duration-300 group-hover:scale-110"
          />
          <div
            class="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          >
            <div class="absolute bottom-4 left-4 text-white">
              <h3 class="text-lg font-semibold">
                ကျောင်းဝတ်စုံများ လှူဒါန်းခြင်း
              </h3>
              <p class="text-sm">မိဘမဲ့ကလေးများအတွက်</p>
            </div>
          </div>
        </div>

        <div class="group relative overflow-hidden rounded-xl shadow-lg">
          <img
            src="@/assets/donations/photo6.png"
            alt="CSR Activity"
            class="w-full h-72 object-cover transition-transform duration-300 group-hover:scale-110"
          />
          <div
            class="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          >
            <div class="absolute bottom-4 left-4 text-white">
              <h3 class="text-lg font-semibold">
                စားသောက်ကုန်များ ထောက်ပံ့ခြင်း
              </h3>
              <p class="text-sm">ဆန်၊ ဆီ နှင့် အခြားပစ္စည်းများ</p>
            </div>
          </div>
        </div>

        <div class="group relative overflow-hidden rounded-xl shadow-lg">
          <img
            src="@/assets/donations/photo5.png"
            alt="CSR Activity"
            class="w-full h-72 object-cover transition-transform duration-300 group-hover:scale-110"
          />
          <div
            class="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          >
            <div class="absolute bottom-4 left-4 text-white">
              <h3 class="text-lg font-semibold">ချစ်ခြင်းမေတ္တာ ပရဟိတဂေဟာ</h3>
              <p class="text-sm">ကျောက်တန်း မြို့နယ်</p>
            </div>
          </div>
        </div>

        <div class="group relative overflow-hidden rounded-xl shadow-lg">
          <img
            src="@/assets/donations/photo8.png"
            alt="CSR Activity"
            class="w-full h-72 object-cover transition-transform duration-300 group-hover:scale-110"
          />
          <div
            class="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          >
            <div class="absolute bottom-4 left-4 text-white">
              <h3 class="text-lg font-semibold">လှူဒါန်းမှုအခမ်းအနား</h3>
              <p class="text-sm">ပရဟိတလုပ်ငန်းများ</p>
            </div>
          </div>
        </div>

        <div class="group relative overflow-hidden rounded-xl shadow-lg">
          <img
            src="@/assets/donations/photo7.png"
            alt="CSR Activity"
            class="w-full h-72 object-cover transition-transform duration-300 group-hover:scale-110"
          />
          <div
            class="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          >
            <div class="absolute bottom-4 left-4 text-white">
              <h3 class="text-lg font-semibold">လူမှုရေးဆောင်ရွက်ချက်များ</h3>
              <p class="text-sm">ပရဟိတလုပ်ငန်းများ</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faHandHoldingHeart,
  faGraduationCap,
  faHouse,
} from "@fortawesome/free-solid-svg-icons";

library.add(faHandHoldingHeart, faGraduationCap, faHouse);
</script>
