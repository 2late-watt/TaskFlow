<script lang="ts" setup>
import {useDark} from "@vueuse/core";

const isDark = useDark();
const appName = "TaskFlow";
</script>

<template>
  <h1 :class="{ 'text-white': isDark}" class="font-bold text-2xl w-fit">
    {{ appName }}</h1>
</template>

<style scoped>

</style>
