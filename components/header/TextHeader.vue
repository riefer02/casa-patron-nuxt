<template>
  <div
    class="relative h-full flex w-auto justify-center content-center flex-col"
  >
    <div class="z-1 py-8 px-4 bg-opacity-25">
      <div class="relative z-10 flex justify-center content-center flex-col">
        <h1
          class="header__background text-center antialiased text-6xl font-black font-serif leading-none mb-2"
        >
          Casa Patron
        </h1>
        <h3
          class="text-center antialiased text-3xl font-normal tracking-normal header-subtext-shadow font-serif"
        >
          Explore New Mexico's Enchantments
        </h3>
      </div>
      <div class="relative z-10 flex justify-center pt-5">
        <Button text="Learn More" link="about" />
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
}
</script>

<style scoped>
.header__background {
  position: relative;
  z-index: 3;
  font-size: 5.5rem;
  color: rgba(242, 217, 128, 1);
  text-shadow: 0px 0px 8px black;
  font-family: 'Lobster', cursive;
}
.header__background:after {
  position: absolute;
  top: -50%;
  left: 25%;
  content: '';
  height: 288px;
  width: 50%;
  background-color: rgba(102, 126, 234, 1);
  display: block;
  z-index: -1;
  transform: skewX(-15deg);
  opacity: 10%;
}

.header-text-shadow {
  text-shadow: 0px 0px 3px rgba(242, 217, 128, 1);
  font-family: 'Lobster', cursive;
  position: relative;
  z-index: 2;
}

.header-subtext-shadow {
  text-shadow: 0px 0px 2px rgba(242, 217, 128, 1);
  font-family: 'Lobster', cursive;
  position: relative;
  z-index: 2;
}
</style>
