<script setup lang="ts">
import { CheckCircleIcon } from '@heroicons/vue/20/solid'
</script>
<template lang="pug">
header.header().shadow 
  a(href="#")
    img.logo(src="./assets/logo.png", alt="Logo")
  a(href="#")
    div Day complete!
  CheckCircleIcon.icon__check-circle
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
  padding: 12px;
  .logo {
    height: 68px;
  }
  .icon__check-circle {
    height: 36px;
    margin-left: 6px;
  }
}
</style>
