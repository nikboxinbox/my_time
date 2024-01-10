<script setup lang="ts">
import { CheckCircleIcon } from '@heroicons/vue/24/solid'
import TheLogo from './TheLogo.vue'
import TheHeaderProgress from './TheHeaderProgress.vue'
</script>

<template lang="pug">

header.header().shadow--bottom 
  TheLogo
  TheHeaderProgress

</template>

<style scoped lang="scss">
.header {
  position: sticky;
  top: 0;
  z-index: 20;
  display: grid;
  grid-template-columns: 1fr auto auto;
  align-items: center;
  padding: 0.75rem;
  background-color: $white;
}
</style>
