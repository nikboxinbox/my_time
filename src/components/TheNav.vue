<script setup lang="ts">
import { ref } from 'vue';
import { ClockIcon, ListBulletIcon, ChartBarIcon } from '@heroicons/vue/24/outline'
import NavItem from './NavItem.vue';

const navItems = { timeline: ClockIcon, activities: ListBulletIcon, progress: ChartBarIcon }
const currentPage = ref('timeline');

</script>

<template lang="pug">

nav.navigation().shadow--top
  ul
    NavItem(
      v-for="icon, page in navItems"
      :key="page"
      :href="`#${page}`"
      :class="{'nav-link--active': currentPage === page}"
      @click="currentPage = page"
      ) 
      component(:is="icon").nav-link__icon  
      .nav-link__text {{page}}         

</template>
<style scoped lang="scss">
.navigation {
  position: sticky;
  bottom: 0;
  background-color: $white;

  ul {
    display: flex;
    align-items: center;
    justify-content: space-around;


  }

  .nav-link--active {
    background-color: #E5E7EB;
  }
}
</style>
