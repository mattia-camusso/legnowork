import { defineStore } from "pinia";
import { ref } from "vue";

export const useMainStore = defineStore("store", () => {
  const menuToggle = ref(false);
  const selectedProduct = ref({
    id: "",
    name: "",
    description: "",
  });

  function selectProduct(product) {
    selectedProduct.value = product;
  }

  function toggleMenu() {
    menuToggle.value = !menuToggle.value;
  }

  return {
    menuToggle,
    toggleMenu,
    selectedProduct,
    selectProduct,
  };
});
