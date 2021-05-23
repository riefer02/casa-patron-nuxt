<template>
  <div>
    <video-background
      :src="require(`assets/video/${video}`)"
      style="height: 600px"
    >
      <TextHeader :header-texts="headerData.headerTexts" />
    </video-background>
  </div>
</template>

<script>
import TextHeader from '@/components/sections/header/TextHeader.vue'
export default {
  props: {
    headerData: {
      type: Object,
      default: () => {},
    },
  },
  name: 'VideoHeader',
  components: {
    TextHeader,
  },
  data() {
    return {}
  },
  computed: {
    video() {
      return this.headerData.headerVideo
    },
  },
  mounted() {},
}
</script>

<style></style>
