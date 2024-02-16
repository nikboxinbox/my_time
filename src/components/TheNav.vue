<script setup lang="ts">
import { ClockIcon, ListBulletIcon, ChartBarIcon } from '@heroicons/vue/24/outline'
import NavItem from './NavItem.vue';

const navItems = { timeline: ClockIcon, activities: ListBulletIcon, progress: ChartBarIcon }
</script>

<template lang="pug">

nav.navigation().shadow--top
  ul
    NavItem(
      v-for="icon, page in navItems"
      :key="page"
      :href="`#${page}`"
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
  }
}
</style>
