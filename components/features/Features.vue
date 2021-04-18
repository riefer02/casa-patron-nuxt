<template>
  <div class="my-16 px-4">
    <div
      class="flex flex-col md:flex-row bg-white text-black rounded-lg shadow-lg"
    >
      <div
        class="block w-full px-3 py-3 md:w-2/3 md:order-1 xl:p-16 my-8 md: md:my-0"
      >
        <div class="block mb-8 sm:mb-0">
          <SectionHeaderText text="Why Casa Patron?" />
        </div>
        <div class="block">
          <FeaturesList :features="features" />
        </div>
      </div>
      <div
        class="feature__image w-full bg-cover h-64 md:h-auto md:min-h-full md:w-1/3 order-1 rounded-b-lg rounded-t-none md:rounded-r-lg md:rounded-l-none flex-grow"
        :style="{ backgroundImage: 'url(' + image + ')' }"
      ></div>
    </div>
  </div>
</template>

<script>
import SectionHeaderText from '@/components/typography/SectionHeaderText.vue'
import FeaturesList from '@/components/features/FeaturesList.vue'
export default {
  components: {
    SectionHeaderText,
    FeaturesList,
  },
  data() {
    return {
      image: require('@/assets/images/master-bedroom-1.jpg'),
      features: [
        {
          title: 'Accessibility',
          description:
            '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        },
        {
          title: 'Modular',
          description:
            '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        },
        {
          title: 'Activities',
          description:
            '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        },
      ],
    }
  },
}
</script>

<style scoped>
@media screen and (max-width: 480px) {
  .feature__image {
    min-height: 400px;
    min-width: 300px;
    background-size: 120%;
    background-position: 50% 100%;
  }
}
</style>
