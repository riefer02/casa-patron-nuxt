<template>
  <div
    class="max-w-full xl:w-1/3 shadow-lg rounded overflow-hidden m-4 sm:flex xl:flex-col"
  >
    <div
      class="xl:h-48 h-40 sm:h-auto sm:w-48 md:w-64 xl:w-full flex-none bg-cover bg-center rounded rounded-t sm:rounded sm:rounded-l sm:rounded-r-none md:rounded-r-none xl:rounded-b-none rounded-b-none text-center overflow-hidden shadow-inner shadow-lg"
      :style="{ backgroundImage: 'url(' + item.image + ')' }"
    ></div>
    <div
      class="px-6 py-4 bg-white text-black shadow-lg overflow-hidden flex-grow xl:p-12 flex flex-col justify-between"
    >
      <div>
        <h2 class="mb-2 xl:text-2xl font-light">{{ item.title }}</h2>
        <ParagraphText :text="item.description" />
      </div>
      <div class="flex justify-center">
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

<style lang="scss" scoped></style>
