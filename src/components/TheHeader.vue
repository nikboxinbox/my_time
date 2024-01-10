<script setup lang="ts">
import { CheckCircleIcon } from '@heroicons/vue/24/solid'
</script>
<template lang="pug">
header.header().shadow--bottom 
  a(href="#")
    img.logo(src="../assets/logo.png", alt="Logo")
  a(href="#")
    .section-right--complete(v-if="true")
      div Day complete!
      CheckCircleIcon.icon__check-circle
    .section-right--progress(v-else) 
      div Progress: 
      span 20%
      .round
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
  .logo {
    height: 2.25rem;
  }

  .section-right--complete {
    display: flex;
    align-items: center;
    gap: 0.25rem;
    div {
      font-size: 1rem;
      line-height: 1.25rem;
    }
    .icon__check-circle {
      height: 1.75rem;
      color: #10b981;
    }
  }

  .section-right--progress {
    display: flex;
    align-items: center;
    gap: 0.25rem;

    div {
      span {
        display: flex;
        align-items: center;
        gap: 0.25rem;
      }
    }

    .round {
      height: 0.75rem;
      width: 0.75rem;
      border-radius: 9999px;
      background-color: #ef4444;
    }
  }
}
</style>
