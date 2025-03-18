<template>
  <!-- Hero Section -->
  <div class="relative h-[500px] mb-16">
    <div
      class="absolute inset-0 bg-gradient-to-r from-[#0C1C57]/60 to-[#0C1C57]/40"
    >
      <img
        src="@/assets/aboutus/image3.png"
        alt="About Us Background"
        class="w-full h-full object-cover mix-blend-overlay opacity-75"
      />
    </div>
    <div
      class="relative container mx-auto px-6 h-full flex flex-col justify-center items-center text-center"
    >
      <h1 class="text-6xl font-bold text-[#F4B400] mb-6">About Us</h1>
      <p class="text-2xl text-white/90 max-w-3xl">Dream Home Group Co.,Ltd</p>
    </div>
  </div>

  <!-- About Content -->
  <div class="container mx-auto px-6 py-16 max-w-7xl">
    <!-- Company Introduction -->
    <div class="text-center mb-16">
      <h2 class="text-3xl font-bold text-[#0C1C57] mb-8">ကုမ္ပဏီမိတ်ဆက်</h2>
      <p class="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-16">
        ကျွန်ုပ်တို့ Dream Home Group Co.,Ltd သည် လူနေမှု အဆင့်အတန်း တိုးတက်
        မြင့်မား ရေး နှင့် ပတ်၀န်းကျင် ဖွံ့ဖြိုးရေးအတွက် အဆောက်အဦများ
        တည်ဆောက်ခြင်း၊ အိမ်ရှင်များစိတ်တိုင်းကျ
        အိမ်အတွင်းပိုင်းဒီဇိုင်းအလှဆင်ခြင်း၊Built-in Modern Furniture များ နှင့်
        Customized Furniture လုပ်ငန်း၊ စွမ်းအင်ခြွေတာရေးအတွက် ဆိုလာစနစ်
        တပ်ဆင်ခြင်း လုပ်ငန်း ၊မိမိတို့ အိုးအိမ် လုံခြုံရေးအတွက် CCTV
        တပ်ဆင်ပေးခြင်း လုပ်ငန်း ၊ အိမ်ခြံမြေ အကျိုးဆောင် လုပ်ငန်းများ ဖြင့်
        ၀န်ဆောင်မှုပေးသော ကုမ္ပဏီ တစ်ခု ဖြစ်ပါသည်။
      </p>

      <!-- Image Gallery -->
      <div class="grid grid-cols-2 gap-8 mb-16">
        <div class="relative overflow-hidden rounded-2xl shadow-lg">
          <img
            src="@/assets/aboutus/image1.png"
            alt="Our Work 1"
            class="w-full h-[400px] object-cover"
          />
        </div>
        <div class="relative overflow-hidden rounded-2xl shadow-lg">
          <img
            src="@/assets/aboutus/image2.png"
            alt="Our Work 2"
            class="w-full h-[400px] object-cover"
          />
        </div>
        <div class="relative overflow-hidden rounded-2xl shadow-lg">
          <img
            src="@/assets/aboutus/image4.png"
            alt="Our Work 3"
            class="w-full h-[400px] object-cover"
          />
        </div>
        <div class="relative overflow-hidden rounded-2xl shadow-lg">
          <img
            src="@/assets/aboutus/image5.png"
            alt="Our Work 4"
            class="w-full h-[400px] object-cover"
          />
        </div>
      </div>
    </div>

    <!-- Services Grid -->
    <div class="grid md:grid-cols-3 gap-8">
      <div class="bg-white p-8 rounded-2xl shadow-lg text-center">
        <div class="text-[#F4B400] text-4xl mb-4">
          <font-awesome-icon icon="building" />
        </div>
        <h3 class="text-xl font-bold text-[#0C1C57] mb-3">
          အဆောက်အဦးများ တည်ဆောက်ခြင်း
        </h3>
        <p class="text-gray-600">
          လူနေမှုအဆင့်အတန်း တိုးတက်မြင့်မားရေးနှင့် ပတ်ဝန်းကျင်ဖွံ့ဖြိုးရေးအတွက်
          အဆောက်အဦးများ တည်ဆောက်ပေးခြင်း
        </p>
      </div>

      <div class="bg-white p-8 rounded-2xl shadow-lg text-center">
        <div class="text-[#F4B400] text-4xl mb-4">
          <font-awesome-icon icon="couch" />
        </div>
        <h3 class="text-xl font-bold text-[#0C1C57] mb-3">
          အိမ်တွင်း ပရိဘောဂများ
        </h3>
        <p class="text-gray-600">
          Built-in Modern Furniture များနှင့် Customized Furniture များ
          ပြုလုပ်ပေးခြင်း
        </p>
      </div>

      <div class="bg-white p-8 rounded-2xl shadow-lg text-center">
        <div class="text-[#F4B400] text-4xl mb-4">
          <font-awesome-icon icon="solar-panel" />
        </div>
        <h3 class="text-xl font-bold text-[#0C1C57] mb-3">ဆိုလာစနစ်</h3>
        <p class="text-gray-600">
          စွမ်းအင်ခြွေတာရေးအတွက် ဆိုလာစနစ်များ တပ်ဆင်ပေးခြင်း
        </p>
      </div>

      <div class="bg-white p-8 rounded-2xl shadow-lg text-center">
        <div class="text-[#F4B400] text-4xl mb-4">
          <font-awesome-icon icon="video" />
        </div>
        <h3 class="text-xl font-bold text-[#0C1C57] mb-3">CCTV တပ်ဆင်ခြင်း</h3>
        <p class="text-gray-600">
          အိမ်ခြံမြေ လုံခြုံရေးအတွက် CCTV ကင်မရာစနစ်များ တပ်ဆင်ပေးခြင်း
        </p>
      </div>

      <div class="bg-white p-8 rounded-2xl shadow-lg text-center">
        <div class="text-[#F4B400] text-4xl mb-4">
          <font-awesome-icon icon="paint-roller" />
        </div>
        <h3 class="text-xl font-bold text-[#0C1C57] mb-3">အိမ်တွင်းဒီဇိုင်း</h3>
        <p class="text-gray-600">
          အိမ်ရှင်များ စိတ်တိုင်းကျ အိမ်အတွင်းပိုင်း ဒီဇိုင်းအလှဆင်ပေးခြင်း
        </p>
      </div>

      <div class="bg-white p-8 rounded-2xl shadow-lg text-center">
        <div class="text-[#F4B400] text-4xl mb-4">
          <font-awesome-icon icon="house" />
        </div>
        <h3 class="text-xl font-bold text-[#0C1C57] mb-3">
          အိမ်ခြံမြေ အကျိုးဆောင်
        </h3>
        <p class="text-gray-600">
          အိမ်ခြံမြေ အရောင်းအဝယ် အကျိုးဆောင်လုပ်ငန်းများ ဆောင်ရွက်ပေးခြင်း
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faBuilding,
  faCouch,
  faSolarPanel,
  faVideo,
  faPaintRoller,
  faHouse,
} from "@fortawesome/free-solid-svg-icons";

library.add(faBuilding, faCouch, faSolarPanel, faVideo, faPaintRoller, faHouse);
</script>
