<template>
  <!-- Hero Section -->
  <div class="relative h-[500px] mb-16">
    <div
      class="absolute inset-0 bg-gradient-to-r from-[#0C1C57]/60 to-[#0C1C57]/40"
    >
      <img
        src="@/assets/contactus.png"
        alt="Contact Us Background"
        class="w-full h-full object-cover mix-blend-overlay opacity-75"
      />
    </div>
    <div
      class="relative container mx-auto px-6 h-full flex flex-col justify-center items-center text-center"
    >
      <h1 class="text-6xl font-bold text-[#F4B400] mb-6">Contact Us</h1>
      <p class="text-2xl text-white/90 max-w-2xl">
        Your trusted partner in finding the perfect home. Reach out to us for
        any inquiries.
      </p>
    </div>
  </div>

  <!-- Contact Content -->
  <div class="container mx-auto px-6 py-16 max-w-7xl">
    <!-- Contact Info Card -->
    <div class="bg-white p-8 rounded-2xl shadow-lg mb-16">
      <div class="grid md:grid-cols-2 gap-8">
        <div class="space-y-3 text-lg">
          <h2 class="text-2xl font-bold mb-6 text-[#0C1C57]">Our Location</h2>
          <div class="flex items-start space-x-4">
            <div class="text-[#F4B400] mt-1">
              <font-awesome-icon icon="location-dot" />
            </div>
            <div>
              <p>မလိခအိမ်ရာ၊ ရတနာလမ်း၊</p>
              <p>သင်္ဃန်းကျွန်းမြို့နယ်၊</p>
              <p>ရန်ကုန်မြို့။</p>
            </div>
          </div>

          <div class="mt-8 space-y-4">
            <h3 class="text-xl font-semibold text-[#0C1C57]">Contact Numbers:</h3>
            <div class="flex items-center space-x-4">
              <div class="text-[#F4B400]">
                <font-awesome-icon icon="phone" />
              </div>
              <div>
                <p>09 795 175979</p>
                <p>09 986 594045</p>
              </div>
            </div>
          </div>
        </div>

        <div class="w-full h-[300px]">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3818.6889337182033!2d96.19671199999999!3d16.841781000000005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTbCsDUwJzMwLjQiTiA5NsKwMTEnNDguMiJF!5e0!3m2!1sen!2smm!4v1742307802454!5m2!1sen!2smm"
            width="100%"
            height="100%"
            style="border: 0"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
            class="w-full h-full rounded-lg shadow-md"
          ></iframe>
        </div>
      </div>
    </div>

    <!-- Contact Form -->
    <div class="bg-white p-8 rounded-2xl shadow-lg">
      <h2 class="text-2xl font-bold mb-8 text-[#0C1C57]">Please write us Query</h2>
      <form class="grid md:grid-cols-2 gap-6">
        <div class="space-y-4">
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">Name</label>
            <input type="text" class="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-[#F4B400] focus:border-transparent" />
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">Email</label>
            <input type="email" class="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-[#F4B400] focus:border-transparent" />
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">Company Name</label>
            <input type="text" class="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-[#F4B400] focus:border-transparent" />
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">Type of Message</label>
            <div class="space-y-2">
              <label class="inline-flex items-center">
                <input type="radio" name="type" value="inquiries" class="text-[#F4B400]" />
                <span class="ml-2">Inquiries</span>
              </label>
              <label class="inline-flex items-center ml-6">
                <input type="radio" name="type" value="feedback" class="text-[#F4B400]" />
                <span class="ml-2">Feedback</span>
              </label>
            </div>
          </div>
        </div>

        <div class="space-y-4">
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">Message</label>
            <textarea rows="6" class="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-[#F4B400] focus:border-transparent"></textarea>
          </div>
          <button type="submit" class="bg-[#F4B400] text-white px-6 py-2 rounded-lg hover:bg-[#F4B400]/90 transition-colors">
            Submit
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
import { library } from "@fortawesome/fontawesome-svg-core";
import { faLocationDot, faPhone } from "@fortawesome/free-solid-svg-icons";

library.add(faLocationDot, faPhone);
</script>
