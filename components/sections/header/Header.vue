<template>
  <div>
    <VideoHeader :header-data="headerData"> </VideoHeader>
  </div>
</template>

<script>
import VideoHeader from '@/components/sections/header/VideoHeader.vue'
export default {
  props: {
    headerData: {
      type: Object,
      default: () => {},
    },
  },
  components: {
    VideoHeader,
  },
}
</script>

<style lang="scss" scoped></style>
