<template>
  <div
    class="
      text-white
      relative
      h-full
      flex
      w-auto
      justify-center
      content-center
      flex-col
    "
  >
    <div class="py-8 px-4 bg-opacity-25">
      <div class="flex justify-center content-center flex-col">
        <h1
          class="
            header__background
            text-center
            antialiased
            text-4xl
            md:text-6xl
            font-black font-serif
            leading-none
            mb-2
          "
        >
          {{ headerTexts.primaryText }}
        </h1>
        <h3
          class="
            header__sub
            text-center
            antialiased
            text-3xl
            font-normal
            tracking-normal
            font-serif
          "
        >
          {{ headerTexts.secondaryText }}
        </h3>
      </div>
      <div class="flex flex-col md:flex-row justify-center pt-5">
        <Button
          class="md:mr-10 mb-5 md:mb-0"
          text="Short Term Rental"
          link="/short-term-rental"
        />
        <Button text="Leadership Retreats" link="/retreats" />
      </div>
    </div>
  </div>
</template>

<script>
import Button from '@/components/buttons/Button.vue'
export default {
  components: {
    Button,
  },
  props: {
    headerTexts: {
      type: Object,
      default: () => {},
    },
  },
  mounted() {
    console.log(this.headerTexts)
  },
}
</script>

<style scoped>
.header__background {
  font-size: 5.5rem;
  text-shadow: 1px 1px 4px black;
  font-family: 'Lobster', cursive;
}

.header__sub {
  font-size: 1.5rem;
  color: rgb(255, 228, 119);
  text-shadow: 1px 1px 2px black;
  font-family: 'Montserrat', cursive;
}

@media screen and (max-width: 640px) {
  .header__background {
    font-size: 4rem;
  }

  .header__sub {
    font-size: 1rem;
  }
}
</style>
