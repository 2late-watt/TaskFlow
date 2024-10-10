<template>
  <div class="container mx-auto relative">
    <header class="flex justify-between items-center p-4">
      <div :class="textClass" class="hover:scale-110 cursor-pointer" @click="toggleMenu">
        <Icons name="burger"/>
      </div>

      <transition name="fade">
        <nav v-if="isMenuOpen" class="fixed inset-0 z-50">
          <div
              class="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm"
              @click="toggleMenu"
          ></div>
          <div
              :class="menuClass"
              class="border absolute top-0 bottom-0 left-0 w-[70vw] md:w-[20vw] shadow-lg transition-transform duration-500 ease-in-out transform"
          >
            <header class="flex items-center justify-between p-4">
              <Logo/>
            </header>
            <main class="pr-5">
              <Boards @closeMenu="toggleMenu"/>
            </main>
          </div>
        </nav>
      </transition>
    </header>
  </div>
</template>

<script lang="ts" setup>
import {ref, computed} from 'vue';
import Icons from "@/components/icons/Icons.vue";
import Logo from "@/components/Logo/logo.vue";
import Boards from "@/components/Boards/boards.vue";
import {useDark, useToggle} from "@vueuse/core";

const isMenuOpen = ref(false);
const isDark = useDark();
const toggleDarkMode = useToggle(isDark);

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};

const textClass = computed(() => (isDark.value ? 'text-white' : 'text-color-six'));
const menuClass = computed(() => {
  return {
    'translate-x-0': isMenuOpen.value,
    '-translate-x-full': !isMenuOpen.value,
    'bg-color-one-dark': isDark.value,
    'bg-color-one-light': !isDark.value,
  };
});
</script>
