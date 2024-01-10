<script setup lang="ts">
import { ClockIcon, ListBulletIcon, ChartBarIcon } from '@heroicons/vue/24/outline'
import TheHeader from './components/TheHeader.vue'

const navItems = { timeline: ClockIcon, activities: ListBulletIcon, progress: ChartBarIcon }
</script>

<template lang="pug">
TheHeader 
main.main
//- Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, praesentium temporibus repellendus corrupti placeat illo distinctio quo. Beatae sapiente odit hic officiis fugit illum repellat. Perspiciatis aliquid sequi quo sit! Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo reprehenderit veniam cumque nisi, unde at in ipsum quia expedita, corporis illum repellendus magni voluptatum vel! Ut nam voluptatibus temporibus quasi. Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam odit quae eius dolores minus adipisci, inventore placeat beatae repudiandae, quo recusandae praesentium quibusdam alias quas fugiat soluta consequuntur cum rerum? Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim fuga quibusdam, tenetur natus reiciendis, temporibus doloremque facilis vero voluptate, dolorum optio excepturi. Aspernatur eos suscipit ratione, ut in voluptatibus vel. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dignissimos beatae quia tenetur dolore? Reprehenderit ratione nulla blanditiis voluptatibus culpa debitis aperiam saepe aliquam assumenda dolorum? Odit dolorem iusto optio dignissimos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita vel quia adipisci id, molestias facilis eos at dignissimos, quam dolorum vero nihil. Consequuntur, dolore. In fugiat sequi labore quae commodi! Lorem ipsum dolor sit amet consectetur adipisicing elit. At ex fugit consectetur veritatis id totam excepturi corrupti earum minima! Laudantium aspernatur omnis minima distinctio ipsam sapiente illum doloremque impedit quisquam. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas, aut aliquam consequuntur rerum officia aperiam molestiae magnam, nam ut unde fuga repudiandae quam cupiditate? Et soluta neque autem deserunt. Nemo? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni rerum dolore magnam similique doloremque fugiat repudiandae reprehenderit saepe delectus, temporibus quisquam eaque corporis, officia ad dolor nihil omnis quis! Hic? Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus fuga vitae consectetur veritatis adipisci nisi officiis, veniam beatae ut recusandae nemo maxime, ex, doloribus ad deleniti. Sed minus aliquid facere. Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque officia corrupti asperiores id nemo veritatis ut facilis dolorem et delectus consequatur voluptate incidunt possimus sapiente corporis modi, veniam aliquid! Quia! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis harum quibusdam atque accusantium! Nostrum praesentium rerum saepe alias tenetur asperiores quibusdam autem dignissimos expedita architecto, repellat nihil numquam. Quos, accusantium.
nav.navigation().shadow--top
  ul
    li(
      v-for="icon, page in navItems"
      :key="page"
      :href="`#${page}`"
      )
      a 
        component(:is="icon").nav-link__icon        
        .nav-link__text {{page}}

</template>
<style lang="scss" scoped>
.main {
  display: flex;
  flex-direction: column;
  flex-grow: 1;
}

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
