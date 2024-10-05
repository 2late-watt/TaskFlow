<script lang="ts" setup>
import {useDark, useToggle} from "@vueuse/core";
import Button from 'primevue/button';


const isDark = useDark();
const toggleDarkMode = useToggle(isDark);
</script>

<template>
  <div class="card flex justify-center">
    <Button label="Toggle Dark Mode" @click="toggleDarkMode()"/>
  </div>
</template>

<style scoped>

</style>
