<script setup>
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
</script>

<template>
  <header class="bg-white shadow-md">
    <nav class="container mx-auto px-6 py-4">
      <div class="flex items-center justify-between">
        <div class="flex items-center space-x-3">
          <img
            src="@/assets/logo.jpg"
            alt="Dream Home Group Logo"
            class="h-16 w-auto"
          />
          <div class="text-xl font-bold">Dream Home Group Co.,Ltd</div>
        </div>
        <ul class="flex space-x-6">
          <li v-for="item in navItems" :key="item.name" class="relative">
            <router-link
              v-if="!item.children"
              :to="item.path"
              class="text-gray-600 hover:text-gray-900"
              active-class="text-blue-600 font-semibold"
            >
              {{ item.name }}
            </router-link>
            <!-- Modified dropdown container with increased hover area -->
            <div v-else class="group inline-block">
              <span
                class="text-gray-600 hover:text-gray-900 flex items-center cursor-pointer"
              >
                {{ item.name }}
                <svg
                  class="w-4 h-4 ml-1"
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
              <!-- Dropdown with extended hover area -->
              <div class="absolute hidden group-hover:block w-48 pt-2">
                <div class="bg-white shadow-lg rounded-lg py-2">
                  <router-link
                    v-for="child in item.children"
                    :key="child.name"
                    :to="child.path"
                    class="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                  >
                    {{ child.name }}
                  </router-link>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </nav>
  </header>
</template>
