import { defineNuxtRouteMiddleware, navigateTo } from "nuxt/app";

export default defineNuxtRouteMiddleware((to) => {
  if (to.fullPath == "/services") {
    return navigateTo("/#services");
  }
  // Check if the `to` route exists
  if (!Object.keys(to.matched).length) {
    // Redirect to the main route if it doesn't
    return navigateTo("/notfound");
  }
});
