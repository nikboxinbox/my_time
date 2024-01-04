<script setup lang="ts">
import { CheckCircleIcon } from '@heroicons/vue/20/solid'
</script>

<template lang="pug">
header.header().shadow--bottom 
  a(href="#")
    img.logo(src="./assets/logo.png", alt="Logo")
  a(href="#")
    .section-right--complete(v-if="true")
      div Day complete!
      CheckCircleIcon.icon__check-circle
    .section-right--progress(v-else) 
      div Progress: 
      span 20%
      .round
main.main Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, praesentium temporibus repellendus corrupti placeat illo distinctio quo. Beatae sapiente odit hic officiis fugit illum repellat. Perspiciatis aliquid sequi quo sit! Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo reprehenderit veniam cumque nisi, unde at in ipsum quia expedita, corporis illum repellendus magni voluptatum vel! Ut nam voluptatibus temporibus quasi. Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam odit quae eius dolores minus adipisci, inventore placeat beatae repudiandae, quo recusandae praesentium quibusdam alias quas fugiat soluta consequuntur cum rerum? Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim fuga quibusdam, tenetur natus reiciendis, temporibus doloremque facilis vero voluptate, dolorum optio excepturi. Aspernatur eos suscipit ratione, ut in voluptatibus vel. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dignissimos beatae quia tenetur dolore? Reprehenderit ratione nulla blanditiis voluptatibus culpa debitis aperiam saepe aliquam assumenda dolorum? Odit dolorem iusto optio dignissimos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita vel quia adipisci id, molestias facilis eos at dignissimos, quam dolorum vero nihil. Consequuntur, dolore. In fugiat sequi labore quae commodi! Lorem ipsum dolor sit amet consectetur adipisicing elit. At ex fugit consectetur veritatis id totam excepturi corrupti earum minima! Laudantium aspernatur omnis minima distinctio ipsam sapiente illum doloremque impedit quisquam. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas, aut aliquam consequuntur rerum officia aperiam molestiae magnam, nam ut unde fuga repudiandae quam cupiditate? Et soluta neque autem deserunt. Nemo? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni rerum dolore magnam similique doloremque fugiat repudiandae reprehenderit saepe delectus, temporibus quisquam eaque corporis, officia ad dolor nihil omnis quis! Hic? Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus fuga vitae consectetur veritatis adipisci nisi officiis, veniam beatae ut recusandae nemo maxime, ex, doloribus ad deleniti. Sed minus aliquid facere. Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque officia corrupti asperiores id nemo veritatis ut facilis dolorem et delectus consequatur voluptate incidunt possimus sapiente corporis modi, veniam aliquid! Quia! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis harum quibusdam atque accusantium! Nostrum praesentium rerum saepe alias tenetur asperiores quibusdam autem dignissimos expedita architecto, repellat nihil numquam. Quos, accusantium.
nav.navigation().shadow--top
  ul
    li(href="#") Timeline
    li(href="#") Activites
    li(href="#") Progress 


</template>
<style lang="scss" scoped>
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
    padding: none;
    li {
      flex: 1;
      align-items: center;
      display: flex;
      flex-direction: column;
      padding: 0.5rem;

      a {
        // text-transform: capitalize;
      }
    }
  }
}
</style>
