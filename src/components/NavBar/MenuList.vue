<script lang="ts" setup>

import Icons from "@/components/icons/Icons.vue";
import Logo from "@/components/Logo/logo.vue";
</script>

<template>
  <div class="hover:scale-110 md:hidden">
    <Icons name="burger"/>
  </div>
  <div>
    <div class="bg-color-one-light border absolute top-0 bottom-0 left-0 w-[80vw] shadow-lg">
      <header class="flex items-center justify-between p-4 border">
        <Logo/>
        <p class="hover:scale-110 md:hidden hover:text-color-five">
          <Icons name="close"/>
        </p>
      </header>
    </div>

  </div>
</template>

<style scoped>

</style>
