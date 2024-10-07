<template>
  <header :class="headerClass" class="flex items-center justify-between p-4 shadow-sm">
    <div class="flex items-center space-x-4">
      <MenuList />
      <Logo />
    </div>
    <div>
      <button class="flex items-center space-x-2 bg-color-four-light hover:bg-opacity-90 py-2 px-4 text-white border-2 border-transparent rounded-full">
        <Icons name="plus" />
        <span class="text-md hidden md:block">Add New Task</span>
      </button>
    </div>
  </header>
</template>

<script lang="ts" setup>
import { useDark } from "@vueuse/core";
import Logo from "@/components/Logo/logo.vue";
import MenuList from "@/components/NavBar/MenuList.vue";
import Icons from "@/components/icons/Icons.vue";
import {computed} from "vue";

const isDark = useDark();

const headerClass = computed(() => (isDark.value ? 'bg-color-one-dark' : 'bg-color-one-light'));
</script>

<style scoped>
</style>
