<template>
  <footer class="bg-[#0C1C57] shadow-md mt-auto">
    <div class="container mx-auto px-4 sm:px-6 py-8">
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        <!-- Company Info -->
        <div class="text-center sm:text-left">
          <h3 class="text-[#F4B400] text-xl lg:text-lg font-bold mb-4">
            Dream Home Group
          </h3>
          <p class="text-[#F4B400] mb-4 text-sm lg:text-base">
            ကျွန်ုပ်တို့ Dream Home Group Co.,Ltd သည် လူမှုဘဝပါတ်ဝန်းကျင်
            ဖွံ့ဖြိုးတိုးတက်မှုအတွက် အဆောက်အဦးတည်ဆောက်ခြင်း၊
            အိမ်အတွင်းအလှဆင်ခြင်း၊ စွမ်းအင်ခြွေတာရေးအတွက် ဆိုလာစနစ်တပ်ဆင်ခြင်း၊
            Modern Furniture လုပ်ငန်းနှင့်
            အိမ်ခြံမြေအကျိုးဆောင်လုပ်ငန်းများဖြင့် ဝန်ဆောင်မှုပေးသော
            ကုမ္ပဏီတစ်ခုဖြစ်ပါသည်။
          </p>
        </div>

        <!-- Quick Links -->
        <div class="text-center sm:text-left">
          <h3 class="text-[#F4B400] text-xl lg:text-lg font-bold mb-4">အမြန်လမ်းကြောင်းများ</h3>
          <ul class="space-y-3">
            <li>
              <router-link to="/" class="text-[#F4B400] hover-underline-animation text-sm lg:text-base">
                ပင်မစာမျက်နှာ
              </router-link>
            </li>
            <li>
              <router-link to="/about" class="text-[#F4B400] hover-underline-animation text-sm lg:text-base">
                ကုမ္ပဏီအကြောင်း
              </router-link>
            </li>
            <li>
              <router-link to="/donations" class="text-[#F4B400] hover-underline-animation text-sm lg:text-base">
                လှူဒါန်းမှုများ
              </router-link>
            </li>
            <li>
              <router-link to="/contact" class="text-[#F4B400] hover-underline-animation text-sm lg:text-base">
                ဆက်သွယ်ရန်
              </router-link>
            </li>
          </ul>
        </div>

        <!-- Contact Info -->
        <div class="text-center sm:text-left">
          <h3 class="text-[#F4B400] text-xl lg:text-lg font-bold mb-4">ဆက်သွယ်ရန်</h3>
          <ul class="space-y-3 text-sm lg:text-base">
            <li class="text-[#F4B400]">မလိခအိမ်ရာ၊ ရတနာလမ်း၊</li>
            <li class="text-[#F4B400]">သင်္ဃန်းကျွန်းမြို့နယ်၊ ရန်ကုန်မြို့။</li>
            <li class="text-[#F4B400]">ဖုန်း - 09 795 175979</li>
            <li class="text-[#F4B400]">ဖုန်း - 09 986 594045</li>
            <li class="text-[#F4B400]">E-mail - info@dreamhomegroup.com</li>
          </ul>
        </div>

        <!-- Social Media -->
        <div class="text-center sm:text-left">
          <h3 class="text-[#F4B400] text-xl lg:text-lg font-bold mb-4">လူမှုကွန်ယက်များ</h3>
          <div class="flex justify-center sm:justify-start space-x-8">
            <a href="#" class="text-[#F4B400] building-block-hover">
              <font-awesome-icon :icon="['fab', 'facebook']" class="text-2xl lg:text-3xl" />
            </a>
            <a href="#" class="text-[#F4B400] building-block-hover">
              <font-awesome-icon :icon="['fab', 'instagram']" class="text-2xl lg:text-3xl" />
            </a>
            <a href="#" class="text-[#F4B400] building-block-hover">
              <font-awesome-icon :icon="['fab', 'linkedin']" class="text-2xl lg:text-3xl" />
            </a>
          </div>
        </div>
      </div>

      <div class="border-t border-[#F4B400] mt-8 pt-8 text-center">
        <p class="text-[#F4B400] text-sm lg:text-base">
          မူပိုင်ခွင့် © {{ new Date().getFullYear() }} Dream Home Group။ မူပိုင်ခွင့်အားလုံး ထိန်းသိမ်းပြီး ဖြစ်ပါသည်။
        </p>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.hover-underline-animation {
  position: relative;
  display: inline-block;
}

.hover-underline-animation::after {
  content: "";
  position: absolute;
  width: 0;
  height: 2px;
  bottom: -2px;
  left: 50%;
  background-color: #f4b400;
  transition: all 0.3s ease-out;
  transform: translateX(-50%);
}

.hover-underline-animation:hover::after {
  width: 100%;
}

.building-block-hover {
  display: inline-block;
  position: relative;
  transition: all 0.4s ease;
  transform-origin: bottom;
}

.building-block-hover::before {
  content: "";
  position: absolute;
  bottom: -8px;
  left: 50%;
  width: 0;
  height: 4px;
  background-color: #f4b400;
  transform: translateX(-50%);
  transition: width 0.3s ease;
}

.building-block-hover:hover {
  transform: translateY(-10px);
  filter: brightness(1.2);
}

.building-block-hover:hover::before {
  width: 100%;
  box-shadow: 0 2px 8px rgba(244, 180, 0, 0.4);
}

.building-block-hover:active {
  transform: translateY(-5px);
}
</style>
