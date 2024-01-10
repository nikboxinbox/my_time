<script setup lang="ts">
import { CheckCircleIcon } from '@heroicons/vue/24/solid'
</script>

<template lang="pug">

.complete(v-if="true")
  div Day complete!
  CheckCircleIcon.icon__check-circle
.progress(v-else) 
  div Progress: 
  span 20%
  .round

</template>
<style scoped lang="scss">
.complete {
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

.progress {
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
</style>
