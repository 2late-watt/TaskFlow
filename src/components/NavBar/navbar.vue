<script lang="ts" setup>
import {useDark, useToggle} from "@vueuse/core";
import Button from 'primevue/button';
import Logo from "@/components/Logo/logo.vue";
import MenuList from "@/components/NavBar/MenuList.vue";
import Icons from "@/components/icons/Icons.vue";


const isDark = useDark();
const toggleDarkMode = useToggle(isDark);
</script>

<template>
  <header :class="{'bg-color-one-dark' : isDark}"
          class="flex items-center justify-between bg-color-one-light p-4  shadow-sm">
    <div class="flex items-center space-x-4">
      <MenuList/>
      <Logo/>
    </div>
    <div>
      <button
          class="flex items-center space-x-2 bg-color-four-light hover:bg-opacity-90 py-2 px-4 text-white border-2 border-transparent rounded-full">
        <Icons name="plus"/>
        <span class="text-md hidden md:block">Add New Task</span>
      </button>
    </div>
  </header>
  <!--  <div class="card flex justify-center">-->
  <!--    <Button label="Toggle Dark Mode" @click="toggleDarkMode()"/>-->
  <!--  </div>-->
</template>

<style scoped>

</style>
