<template>
  <div
    class="hero-header h-full w-full"
    :style="{ backgroundImage: 'url(' + image + ')' }"
  >
    <TextHeader :header-texts="headerData.headerTexts" />
  </div>
</template>

<script>
import TextHeader from './TextHeader.vue'

export default {
  props: {
    headerData: {
      type: Object,
      default: () => {},
    },
  },
  components: {
    TextHeader,
  },
  computed: {
    image() {
      return require(`@/assets/images/${this.headerData.headerImage}`)
    },
  },
}
</script>

<style scoped>
.hero-header {
  height: 600px;
  width: 100%;
  background-size: cover;
}
</style>