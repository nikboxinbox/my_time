<script setup lang="ts">
import { ref } from 'vue';
import { ClockIcon, ListBulletIcon, ChartBarIcon } from '@heroicons/vue/24/outline'
import { PAGE_TIMELINE, PAGE_ACTIVITIES, PAGE_PROGRESS } from '../constants'
import NavItem from './NavItem.vue';

const navItems = {
  [PAGE_TIMELINE]: ClockIcon,
  [PAGE_ACTIVITIES]: ListBulletIcon,
  [PAGE_PROGRESS]: ChartBarIcon
}
const currentPage = ref(normalizePageHash());


function normalizePageHash() {
  const hash = window.location.hash.slice(1);

  if (Object.keys(navItems).includes(hash)) {
    return hash
  }
  window.location.hash = PAGE_TIMELINE

  return PAGE_TIMELINE
}

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
