<template>
  <main class="container mx-auto px-6 py-8 min-h-screen">
    <section>
      <div class="text-center py-12">
        <h1 class="text-4xl font-bold mb-4">Contact Us</h1>
        <p class="text-xl text-gray-600 mb-8">Get in touch with our team</p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
        <div class="bg-white rounded-lg shadow-md p-8">
          <h2 class="text-2xl font-semibold mb-6">Send us a Message</h2>
          <form class="space-y-6">
            <div>
              <label class="block text-gray-700 mb-2">Name</label>
              <input type="text" class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500">
            </div>
            <div>
              <label class="block text-gray-700 mb-2">Email</label>
              <input type="email" class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500">
            </div>
            <div>
              <label class="block text-gray-700 mb-2">Message</label>
              <textarea rows="4" class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"></textarea>
            </div>
            <button class="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700">
              Send Message
            </button>
          </form>
        </div>

        <div class="space-y-8">
          <div>
            <h2 class="text-2xl font-semibold mb-4">Contact Information</h2>
            <div class="space-y-4">
              <p class="flex items-center text-gray-600">
                <span class="mr-3">📍</span> 123 Business Street, City, Country
              </p>
              <p class="flex items-center text-gray-600">
                <span class="mr-3">📞</span> +1 234 567 890
              </p>
              <p class="flex items-center text-gray-600">
                <span class="mr-3">✉️</span> contact@example.com
              </p>
            </div>
          </div>

          <div>
            <h2 class="text-2xl font-semibold mb-4">Business Hours</h2>
            <div class="space-y-2 text-gray-600">
              <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
              <p>Saturday: 10:00 AM - 4:00 PM</p>
              <p>Sunday: Closed</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>