import { createRouter, createWebHistory } from "vue-router";

// step 1: Import pages
const Home = () => import("../pages/child/Home.vue");
const About = () => import("../pages/child/About.vue");
const Donations = () => import("../pages/child/Donations.vue");
const Company1 = () => import("../pages/child/companies/Company1.vue");
const Company2 = () => import("../pages/child/companies/Company2.vue");
const Company3 = () => import("../pages/child/companies/Company3.vue");
const Contact = () => import("../pages/child/Contact.vue");

// step 2: Define routes
const routes = [
  { path: "/", name: "home", component: Home },
  { path: "/about", name: "about", component: About },
  { path: "/donations", name: "donations", component: Donations },
  { path: "/companies/company-1", name: "company1", component: Company1 },
  { path: "/companies/company-2", name: "company2", component: Company2 },
  { path: "/companies/company-3", name: "company3", component: Company3 },
  { path: "/contact", name: "contact", component: Contact },
];

// step 3: Create router instance
const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
