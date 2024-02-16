<template lang="pug">
li
  a(v-bind="$attrs") 
    slot
   
</template>
<script lang="ts" setup>
defineOptions({
  inheritAttrs: false
})
</script>