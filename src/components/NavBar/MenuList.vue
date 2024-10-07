<script lang="ts" setup>
import { ref } from 'vue';
import Icons from "@/components/icons/Icons.vue";
import Logo from "@/components/Logo/logo.vue";

const isMenuOpen = ref(false);

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};
</script>

<template>
  <div class="hover:scale-110 md:hidden" @click="toggleMenu">
    <Icons name="burger"/>
  </div>

  <transition name="fade">
    <nav v-if="isMenuOpen" class="fixed inset-0 z-50">
      <div
          class="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm"
          @click="toggleMenu"
      ></div>

      <div
          :class="{ 'translate-x-0': isMenuOpen, '-translate-x-full': !isMenuOpen }"
          class="bg-color-one-light border absolute top-0 bottom-0 left-[-1rem] w-[80vw] shadow-lg transition-transform duration-500 ease-in-out transform"
      >
        <header class="flex items-center justify-between p-4 border">
          <Logo/>
          <button class="hover:scale-110 md:hidden hover:text-color-five" @click="toggleMenu" aria-label="Fermer le menu">
            <Icons name="close"/>
          </button>
        </header>
      </div>
    </nav>
  </transition>
</template>

<style scoped>

</style>
