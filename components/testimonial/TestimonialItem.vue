<template>
  <div class="lg:w-3/4 xl:w-1/2 mt-6 md:mt-0 rounded-lg m-2 md:m-0 p-2">
    <div
      class="testimonial__card-body sm:flex bg-white rounded-lg shadow-lg px-3 sm:p-0"
    >
      <div
        class="flex justify-center align-center md:block w-32 sm:w-1/3 h-32 p-4 sm:p-0 sm:h-auto sm:rounded-none rounded-full mx-auto md:mr-0 flex-shrink-0"
      >
        <img
          src="https://unsplash.it/804/800"
          alt="profile image"
          class="bg-cover w-full h-full p-2 sm:p-0 rounded-full sm:rounded-lg sm:rounded-r-none mx-auto shadow-lg"
        />
      </div>
      <div class="flex flex-col justify-between p-0 sm:p-2 md:p-4 xl:p-2">
        <ParagraphText
          text="'It really saves me time and effort. FWR Bootstrap
        Blocks is exactly what our business has been lacking.'"
        />
        <div class="flex flex-col pr-4">
          <div class="text-indigo-500 font-bold uppercase mt-0 self-end">
            - Jesse D.
          </div>
          <div class="text-black self-end">Apple</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ParagraphText from '@/components/typography/ParagraphText.vue'
export default {
  components: {
    ParagraphText,
  },
}
</script>

<style scoped>
.testimonial__card-body {
  height: 200px;
}

@media screen and (max-width: 480px) {
  .testimonial__card-body {
    height: auto;
    padding-bottom: 0.9rem;
  }
}
</style>
