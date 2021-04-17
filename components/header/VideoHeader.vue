<template>
  <div>
    <video-background
      :src="require('@/assets/video/Casa-Patron-Splash-1.mp4')"
      style="height: 600px"
    >
      <TextHeader />
    </video-background>
  </div>
</template>

<script>
import TextHeader from '@/components/header/TextHeader.vue'
export default {
  name: 'VideoHeader',
  components: {
    TextHeader,
  },
  data() {
    return {}
  },
}
</script>

<style></style>
