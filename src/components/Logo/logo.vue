<template>
  <h1 :class="headerClass" class="font-bold text-2xl w-fit">
    {{ appName }}
  </h1>
</template>

<script lang="ts" setup>
import {useDark} from "@vueuse/core";
import {computed} from "vue";

const isDark = useDark();
const appName = "TaskFlow";

const headerClass = computed(() => (isDark.value ? 'text-white' : 'text-black')); // Ajoutez une classe par défaut si nécessaire
</script>

<style scoped>
</style>
