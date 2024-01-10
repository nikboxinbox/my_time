<script setup lang="ts">
import TheHeader from './components/TheHeader.vue'
import TheNav from './components/TheNav.vue'
</script>

<template lang="pug">
  
TheHeader 
main.main
TheNav

</template>
<style lang="scss" scoped>
.main {
  display: flex;
  flex-direction: column;
  flex-grow: 1;
}
</style>
