<template>
  <div :class="bgClass" class="h-screen">
    <RouterView/>
  </div>
</template>

<script lang="ts" setup>
import {useDark} from "@vueuse/core";
import {computed} from "vue";

const isDark = useDark();

const bgClass = computed(() => (isDark.value ? 'bg-color-two-dark' : 'bg-color-two-light'));
</script>

<style scoped>
</style>
