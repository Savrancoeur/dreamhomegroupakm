<script setup>
import { ref } from 'vue';

const isMenuOpen = ref(false);
const dropdownStates = ref(new Map());

const navItems = [
  { name: "Home", path: "/" },
  { name: "About Us", path: "/about" },
  {
    name: "Lines of Companies",
    path: "/companies",
    children: [
      { name: "Company 1", path: "/companies/company-1" },
      { name: "Company 2", path: "/companies/company-2" },
      { name: "Company 3", path: "/companies/company-3" },
    ],
  },
  { name: "Donations", path: "/donations" },
  { name: "Contact Us", path: "/contact" },
];

const toggleDropdown = (itemName) => {
  dropdownStates.value.set(itemName, !dropdownStates.value.get(itemName));
};

const isDropdownOpen = (itemName) => {
  return dropdownStates.value.get(itemName) || false;
};
</script>

<template>
  <header class="bg-[#0C1C57] shadow-md">
    <nav class="container mx-auto px-6 py-4">
      <div class="flex items-center justify-between">
        <div class="flex items-center space-x-3">
          <router-link to="/">
            <div class="bg-white p-2 rounded-lg">
              <img src="@/assets/logo.png" alt="Dream Home Group Logo" class="h-12 md:h-16 w-auto" />
            </div>
          </router-link>
          <div class="text-sm md:text-xl font-bold text-[#F4B400]">
            Dream Home Group Co.,Ltd
          </div>
        </div>

        <!-- Mobile menu button -->
        <button @click="isMenuOpen = !isMenuOpen" class="md:hidden text-[#F4B400] p-2">
          <font-awesome-icon :icon="isMenuOpen ? 'xmark' : 'bars'" size="xl" />
        </button>

        <!-- Desktop Navigation -->
        <ul class="hidden md:flex space-x-6 text-lg">
          <li v-for="item in navItems" :key="item.name" class="relative">
            <router-link
              v-if="!item.children"
              :to="item.path"
              class="text-[#F4B400] hover-underline-animation text-lg"
              active-class="text-[#F4B400] font-semibold active-link"
            >
              {{ item.name }}
            </router-link>
            <div v-else class="group inline-block">
              <span
                class="text-[#F4B400] flex items-center whitespace-nowrap cursor-pointer hover-underline-animation text-lg"
              >
                {{ item.name }}
                <svg
                  class="w-4 h-4 ml-1 inline-block"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </span>
              <div class="absolute hidden group-hover:block w-48 pt-2 z-50">
                <div class="bg-[#0C1C57] shadow-lg rounded-lg py-2">
                  <router-link
                    v-for="child in item.children"
                    :key="child.name"
                    :to="child.path"
                    class="block px-4 py-2 text-[#F4B400] hover:bg-[#162761] hover-underline-animation"
                  >
                    {{ child.name }}
                  </router-link>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>

      <!-- Mobile Navigation -->
      <div 
        v-show="isMenuOpen" 
        class="md:hidden mt-4 absolute left-0 right-0 bg-[#0C1C57] border-t border-[#F4B400]/20 shadow-lg z-50 px-4 py-6"
      >
        <ul class="flex flex-col space-y-4">
          <li v-for="item in navItems" :key="item.name" class="relative">
            <router-link
              v-if="!item.children"
              :to="item.path"
              class="text-[#F4B400] block py-2 hover:bg-[#162761] rounded-lg px-4"
              active-class="text-[#F4B400] font-semibold bg-[#162761]"
              @click="isMenuOpen = false"
            >
              {{ item.name }}
            </router-link>
            <!-- In the mobile navigation section, update the button and dropdown: -->
            <div v-else class="relative">
              <button
                @click="toggleDropdown(item.name)"
                class="text-[#F4B400] w-full text-left flex items-center justify-between py-2 px-4 hover:bg-[#162761] rounded-lg"
              >
                {{ item.name }}
                <svg
                  class="w-4 h-4 ml-1"
                  :class="{ 'transform rotate-180': isDropdownOpen(item.name) }"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div v-show="isDropdownOpen(item.name)" class="mt-2 ml-4 border-l-2 border-[#F4B400]/20">
                <router-link
                  v-for="child in item.children"
                  :key="child.name"
                  :to="child.path"
                  class="text-[#F4B400] block py-2 px-4 hover:bg-[#162761] rounded-lg"
                  @click="isMenuOpen = false"
                >
                  {{ child.name }}
                </router-link>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </nav>
  </header>
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

.active-link::after {
  content: "";
  position: absolute;
  width: 100%;
  height: 2px;
  bottom: -2px;
  left: 50%;
  background-color: #f4b400;
  transform: translateX(-50%);
}
</style>
