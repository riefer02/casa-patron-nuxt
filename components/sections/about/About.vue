<template>
  <div class="mt-12 mb-4 px-4">
    <div
      class="flex flex-col md:flex-row bg-white text-black rounded-lg shadow-lg"
    >
      <div class="w-full lg:w-2/3 lg:order-2 p-6 xl:p-16">
        <div class="my-8 md: md:my-0">
          <SectionHeaderText :text="aboutData.header" />
        </div>
        <div class="">
          <ParagraphText :text="aboutData.paragraph" />
        </div>
        <div class="flex justify-center px-2 py-2 my-8 md: md:my-0">
          <Button :text="aboutData.cta.label" :link="aboutData.cta.linkUrl" />
        </div>
      </div>
      <div
        class="about__image w-full bg-cover h-64 md:h-auto md:min-h-full md:w-1/3 order-1 rounded-b-lg rounded-t-none md:rounded-l-lg md:rounded-r-none flex-grow"
        :style="{ backgroundImage: 'url(' + image + ')' }"
      ></div>
    </div>
  </div>
</template>

<script>
import SectionHeaderText from '@/components/typography/SectionHeaderText.vue'
import ParagraphText from '@/components/typography/ParagraphText.vue'
import Button from '@/components/buttons/Button.vue'
export default {
  components: {
    SectionHeaderText,
    ParagraphText,
    Button,
  },
  props: {
    aboutData: {
      type: Object,
      default: () => {},
    },
  },
  data() {
    return {
      // image: require('@/assets/images/backdoor.jpg'),
      placeholderText:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    }
  },
  computed: {
    image() {
      return require(`@/assets/images/${this.aboutData.image}`)
    },
  },
}
</script>

<style scoped>
@media screen and (max-width: 480px) {
  .about__image {
    min-height: 400px;
    min-width: 300px;
    background-size: cover;
    background-position: center;
  }
}
</style>
