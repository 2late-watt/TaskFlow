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
    <svg v-else-if="props.name === 'board'" height="1.5em" viewBox="0 0 24 24" width="1.5em"
         xmlns="http://www.w3.org/2000/svg">
      <path
          d="M3 6.25A3.25 3.25 0 0 1 6.25 3h11.5A3.25 3.25 0 0 1 21 6.25v11.5A3.25 3.25 0 0 1 17.75 21H6.25A3.25 3.25 0 0 1 3 17.75zm1.5 6.25v5.25c0 .966.784 1.75 1.75 1.75H14v-7zM14 11V4.5H6.25A1.75 1.75 0 0 0 4.5 6.25V11zm5.5-1.5h-4v5h4zm0 6.5h-4v3.5h2.25a1.75 1.75 0 0 0 1.75-1.75zm0-8V6.25a1.75 1.75 0 0 0-1.75-1.75H15.5V8z"
          fill="currentColor"/>
    </svg>
    <svg v-else-if="props.name === 'sun'" height="1em" viewBox="0 0 24 24" width="1em"
         xmlns="http://www.w3.org/2000/svg">
      <path d="M12 7a5 5 0 1 0 0 10a5 5 0 0 0 0-10" fill="currentColor"/>
      <path clip-rule="evenodd"
            d="M12 1a1 1 0 0 1 1 1v1a1 1 0 1 1-2 0V2a1 1 0 0 1 1-1M3.293 3.293a1 1 0 0 1 1.414 0l1.5 1.5a1 1 0 0 1-1.414 1.414l-1.5-1.5a1 1 0 0 1 0-1.414m17.414 0a1 1 0 0 1 0 1.414l-1.5 1.5a1 1 0 1 1-1.414-1.414l1.5-1.5a1 1 0 0 1 1.414 0M1 12a1 1 0 0 1 1-1h1a1 1 0 1 1 0 2H2a1 1 0 0 1-1-1m19 0a1 1 0 0 1 1-1h1a1 1 0 1 1 0 2h-1a1 1 0 0 1-1-1M6.207 17.793a1 1 0 0 1 0 1.414l-1.5 1.5a1 1 0 0 1-1.414-1.414l1.5-1.5a1 1 0 0 1 1.414 0m11.586 0a1 1 0 0 1 1.414 0l1.5 1.5a1 1 0 0 1-1.414 1.414l-1.5-1.5a1 1 0 0 1 0-1.414M12 20a1 1 0 0 1 1 1v1a1 1 0 1 1-2 0v-1a1 1 0 0 1 1-1"
            fill="currentColor"
            fill-rule="evenodd"/>
    </svg>
    <svg v-else-if="props.name === 'moon'" height="1em" viewBox="0 0 24 24" width="1em"
         xmlns="http://www.w3.org/2000/svg">
      <path
          d="M20.958 15.325c.204-.486-.379-.9-.868-.684a7.7 7.7 0 0 1-3.101.648c-4.185 0-7.577-3.324-7.577-7.425a7.3 7.3 0 0 1 1.134-3.91c.284-.448-.057-1.068-.577-.936C5.96 4.041 3 7.613 3 11.862C3 16.909 7.175 21 12.326 21c3.9 0 7.24-2.345 8.632-5.675"
          fill="currentColor"/>
      <path
          d="M15.611 3.103c-.53-.354-1.162.278-.809.808l.63.945a2.33 2.33 0 0 1 0 2.588l-.63.945c-.353.53.28 1.162.81.808l.944-.63a2.33 2.33 0 0 1 2.588 0l.945.63c.53.354 1.162-.278.808-.808l-.63-.945a2.33 2.33 0 0 1 0-2.588l.63-.945c.354-.53-.278-1.162-.809-.808l-.944.63a2.33 2.33 0 0 1-2.588 0z"
          fill="currentColor"/>
    </svg>
    <svg v-else-if="props.name === 'eye'" height="1em" viewBox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
      <g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
        <path d="M10.585 10.587a2 2 0 0 0 2.829 2.828"/>
        <path
            d="M16.681 16.673A8.7 8.7 0 0 1 12 18q-5.4 0-9-6q1.908-3.18 4.32-4.674m2.86-1.146A9 9 0 0 1 12 6q5.4 0 9 6q-1 1.665-2.138 2.87M3 3l18 18"/>
      </g>
    </svg>
    <svg v-else height="1em" viewBox="0 0 32 32" width="1em"
         xmlns="http://www.w3.org/2000/svg">
      <path
          d="M19.05 5.06c0-1.68-1.37-3.06-3.06-3.06s-3.07 1.38-3.06 3.06v7.87H5.06C3.38 12.93 2 14.3 2 15.99c0 1.68 1.38 3.06 3.06 3.06h7.87v7.86c0 1.68 1.37 3.06 3.06 3.06c1.68 0 3.06-1.37 3.06-3.06v-7.86h7.86c1.68 0 3.06-1.37 3.06-3.06c0-1.68-1.37-3.06-3.06-3.06h-7.86z"
          fill="currentColor"/>
    </svg>
  </div>
</template>

<style scoped>
</style>
