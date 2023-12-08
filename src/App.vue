<script setup lang="ts">
import { CheckCircleIcon } from '@heroicons/vue/20/solid'
</script>
<template lang="pug">
header.header().shadow 
  a(href="#")
    img.logo(src="./assets/logo.png", alt="Logo")
  a(href="#")
    .section-right--complete(v-if="false")
      div Day complete!
      CheckCircleIcon.icon__check-circle
    .section-right--progress(v-else) 
      div Progress: 
      span 20%
      .round
main Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita vel quia adipisci id, molestias facilis eos at dignissimos, quam dolorum vero nihil. Consequuntur, dolore. In fugiat sequi labore quae commodi! Lorem ipsum dolor sit amet consectetur adipisicing elit. At ex fugit consectetur veritatis id totam excepturi corrupti earum minima! Laudantium aspernatur omnis minima distinctio ipsam sapiente illum doloremque impedit quisquam. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas, aut aliquam consequuntur rerum officia aperiam molestiae magnam, nam ut unde fuga repudiandae quam cupiditate? Et soluta neque autem deserunt. Nemo? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni rerum dolore magnam similique doloremque fugiat repudiandae reprehenderit saepe delectus, temporibus quisquam eaque corporis, officia ad dolor nihil omnis quis! Hic? Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus fuga vitae consectetur veritatis adipisci nisi officiis, veniam beatae ut recusandae nemo maxime, ex, doloribus ad deleniti. Sed minus aliquid facere. Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque officia corrupti asperiores id nemo veritatis ut facilis dolorem et delectus consequatur voluptate incidunt possimus sapiente corporis modi, veniam aliquid! Quia! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis harum quibusdam atque accusantium! Nostrum praesentium rerum saepe alias tenetur asperiores quibusdam autem dignissimos expedita architecto, repellat nihil numquam. Quos, accusantium.
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
