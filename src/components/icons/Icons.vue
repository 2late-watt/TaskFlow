<script lang="ts" setup>
const props = defineProps({
  name: String
});
</script>

<template>
  <div>
    <svg v-if="props.name === 'burger'" height="2em" viewBox="0 0 16 16" width="2em" xmlns="http://www.w3.org/2000/svg">
      <path d="M2.75 12.25h10.5m-10.5-4h10.5m-10.5-4h10.5" fill="none" stroke="currentColor" stroke-linecap="round"
            stroke-linejoin="round" stroke-width="1.5"/>
    </svg>
    <svg v-else-if="props.name === 'plus'" height="1em" viewBox="0 0 32 32" width="1em"
         xmlns="http://www.w3.org/2000/svg">
      <path
          d="M19.05 5.06c0-1.68-1.37-3.06-3.06-3.06s-3.07 1.38-3.06 3.06v7.87H5.06C3.38 12.93 2 14.3 2 15.99c0 1.68 1.38 3.06 3.06 3.06h7.87v7.86c0 1.68 1.37 3.06 3.06 3.06c1.68 0 3.06-1.37 3.06-3.06v-7.86h7.86c1.68 0 3.06-1.37 3.06-3.06c0-1.68-1.37-3.06-3.06-3.06h-7.86z"
          fill="currentColor"/>
    </svg>
    <svg v-else-if="props.name === 'close'" height="1.5em" viewBox="0 0 24 24" width="1.5em"
         xmlns="http://www.w3.org/2000/svg">
      <path d="M20 6.91L17.09 4L12 9.09L6.91 4L4 6.91L9.09 12L4 17.09L6.91 20L12 14.91L17.09 20L20 17.09L14.91 12z"
            fill="currentColor"/>
    </svg>
  </div>
</template>

<style scoped>
</style>
