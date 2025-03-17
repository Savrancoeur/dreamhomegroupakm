<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const onSwiper = (swiper) => {
  console.log(swiper);
};
const onSlideChange = () => {
  console.log('slide change');
};
</script>

<template>
  <main class="container mx-auto px-6 py-8 min-h-screen">
    <section>
      <!-- Hero Section with Swiper -->
      <div class="mb-12">
        <swiper
          :modules="[Autoplay, Pagination, Navigation]"
          :slides-per-view="1"
          :loop="true"
          :autoplay="{
            delay: 3000,
            disableOnInteraction: false,
          }"
          :pagination="{ clickable: true }"
          :navigation="true"
          class="h-[500px] rounded-lg"
          @swiper="onSwiper"
          @slideChange="onSlideChange"
        >
          <swiper-slide v-for="i in 3" :key="i" class="relative">
            <img
              :src="`https://placehold.co/1200x500/007bff/ffffff?text=Slide+${i}`"
              :alt="`Slide ${i}`"
              class="w-full h-full object-cover"
            />
            <div class="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center text-white">
              <div class="text-center">
                <h2 class="text-4xl font-bold mb-4">Beautiful Home {{ i }}</h2>
                <p class="text-xl">Discover your dream property</p>
              </div>
            </div>
          </swiper-slide>
        </swiper>
      </div>

      <!-- Welcome Section -->
      <div class="text-center py-12">
        <h1 class="text-4xl font-bold mb-4">Welcome to Dream Home Group</h1>
        <p class="text-xl text-gray-600 mb-8">
          Your trusted partner in finding the perfect home
        </p>
      </div>

      <!-- Rest of your content remains the same -->
      <!-- Featured Properties -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div class="bg-white rounded-lg shadow-md overflow-hidden">
          <div class="p-6">
            <h3 class="text-xl font-semibold mb-2">Luxury Villa</h3>
            <p class="text-gray-600 mb-4">
              Beautiful 4 bedroom villa with modern amenities
            </p>
            <button
              class="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
            >
              View Details
            </button>
          </div>
        </div>

        <div class="bg-white rounded-lg shadow-md overflow-hidden">
          <img
            src="https://placehold.co/600x400"
            alt="Property"
            class="w-full h-48 object-cover"
          />
          <div class="p-6">
            <h3 class="text-xl font-semibold mb-2">Modern Apartment</h3>
            <p class="text-gray-600 mb-4">
              Spacious 2 bedroom apartment in the city center
            </p>
            <button
              class="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
            >
              View Details
            </button>
          </div>
        </div>

        <div class="bg-white rounded-lg shadow-md overflow-hidden">
          <img
            src="@/assets/lion.png"
            alt="Property"
            class="w-full h-48 object-cover"
          />
          <div class="p-6">
            <h3 class="text-xl font-semibold mb-2">Family Home</h3>
            <p class="text-gray-600 mb-4">Cozy 3 bedroom house with garden</p>
            <button
              class="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
            >
              View Details
            </button>
          </div>
        </div>
      </div>

      <!-- Call to Action -->
      <div class="text-center mt-12 bg-gray-100 p-8 rounded-lg">
        <h2 class="text-2xl font-bold mb-4">Ready to Find Your Dream Home?</h2>
        <p class="text-gray-600 mb-6">
          Browse our extensive collection of properties or contact us for
          personalized assistance
        </p>
        <button
          class="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700"
        >
          Browse Properties
        </button>
      </div>
    </section>
  </main>
</template>

<style>
.swiper-button-next,
.swiper-button-prev {
  color: white !important;
}

.swiper-pagination-bullet {
  background: white !important;
}

.swiper-pagination-bullet-active {
  background: white !important;
}
</style>
