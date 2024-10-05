<template>
  <div :class="{ 'bg-color-one-dark': isDark }" class="h-screen">
    <RouterView/>
  </div>
</template>

<script lang="ts" setup>
import {useDark} from "@vueuse/core";

const isDark = useDark();
</script>

<style scoped>
</style>
