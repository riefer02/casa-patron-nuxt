<template>
  <div
    class="max-w-full shadow-lg rounded overflow-hidden m-4 sm:flex my-12 md:my-4"
  >
    <div
      class="event-image h-40 sm:h-auto sm:w-48 md:w-64 xl:w-1/3 flex-none bg-cover bg-center rounded rounded-t sm:rounded sm:rounded-l sm:rounded-r-none md:rounded-r-none xl:rounded-b-none rounded-b-none text-center overflow-hidden shadow-lg"
      :style="{ backgroundImage: 'url(' + item.image + ')' }"
    ></div>
    <div
      class="px-6 py-4 bg-white text-black shadow-lg overflow-hidden flex-grow xl:p-12 flex flex-col justify-between"
    >
      <div class="my-8 md: md:my-0">
        <h2 class="mb-2 text-3xl md:text-4xl font-light">{{ item.title }}</h2>
        <ParagraphText :text="item.description" />
      </div>
      <div class="mb-8 md:mb-0 xl:mt-4 flex justify-center">
        <Button text="Learn More" />
      </div>
    </div>
  </div>
</template>

<script>
import ParagraphText from '@/components/typography/ParagraphText.vue'
import Button from '@/components/buttons/Button.vue'
export default {
  components: {
    Button,
    ParagraphText,
  },
  props: {
    item: {
      type: Object,
      default: () => {},
    },
  },
}
</script>

<style scoped>
@media screen and (max-width: 480px) {
  .event-image {
    height: 16rem;
  }
}
</style>
