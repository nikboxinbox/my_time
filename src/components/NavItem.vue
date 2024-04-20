<template lang="pug">
li
  a(v-bind="$attrs") 
    slot
   
</template>
<script lang="ts" setup>
// defineOptions({
//   inheritAttrs: false
// })
</script>
<style>
li {
  flex: 1;
  align-items: center;
  display: flex;
  flex-direction: column;
  padding: 0.5rem;

  .nav-link__icon {
    width: 1.5rem;
    height: 1.5rem;
  }

  .nav-link__text {
    margin-top: 3px;
    font-size: 0.75rem;
    line-height: 1rem;
    text-transform: capitalize;
  }
}
</style>
