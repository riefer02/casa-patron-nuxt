<template>
  <div>
    <div v-if="headerData.headerImage">
      <HeroHeader :header-data="headerData" />
    </div>
    <div v-else>
      <VideoHeader :header-data="headerData"> </VideoHeader>
    </div>
  </div>
</template>

<script>
import VideoHeader from '@/components/sections/header/VideoHeader.vue'
import HeroHeader from '@/components/sections/header/HeroHeader.vue'

export default {
  props: {
    headerData: {
      type: Object,
      default: () => {},
    },
  },
  components: {
    VideoHeader,
    HeroHeader,
  },
}
</script>

<style lang="scss" scoped></style>
