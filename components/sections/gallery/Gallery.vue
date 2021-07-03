<template>
  <div class="my-12 px-4">
    <div
      class="
        grid-container
        bg-white
        text-black
        rounded-lg
        shadow-lg
        overflow-hidden
      "
    >
      <div
        class="one"
        :style="{ backgroundImage: 'url(' + image[0] + ')' }"
      ></div>
      <div
        class="two"
        :style="{ backgroundImage: 'url(' + image[1] + ')' }"
      ></div>
      <div
        class="three"
        :style="{ backgroundImage: 'url(' + image[2] + ')' }"
      ></div>
      <div
        class="four"
        :style="{ backgroundImage: 'url(' + image[3] + ')' }"
      ></div>
      <div
        class="five"
        :style="{ backgroundImage: 'url(' + image[4] + ')' }"
      ></div>
      <div
        class="six"
        :style="{ backgroundImage: 'url(' + image[5] + ')' }"
      ></div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      image: [
        require('@/assets/images/niche.jpg'),
        require('@/assets/images/kitchen.jpg'),
        require('@/assets/images/lower-bedroom-1.jpg'),
        require('@/assets/images/carport.jpg'),
        require('@/assets/images/bathroom-2.jpg'),
        require('@/assets/images/valley-view-3.jpg'),
      ],
    }
  },
}
</script>

<style scoped>
@media screen and (max-width: 1280px) {
}

.grid-container {
  height: 600px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  gap: 0px 0px;
  grid-template-areas:
    'one two three'
    'four five six';
}

.one {
  grid-area: one;
  background-position: center;
  background-size: 140%;
}
.two {
  grid-area: two;
  background-position: center;
  background-size: 140%;
}
.three {
  grid-area: three;
  background-position: center;
  background-size: 140%;
}
.four {
  grid-area: four;
  background-position: center;
  background-size: 140%;
}
.five {
  grid-area: five;
  background-position: center;
  background-size: 140%;
}
.six {
  grid-area: six;
  background-position: center;
  background-size: 140%;
}

@media screen and (max-width: 1280px) {
  .grid-container {
    height: auto;
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
  }

  .one,
  .two,
  .three,
  .four,
  .five,
  .six {
    min-height: 400px;
    min-width: 300px;
  }
}

@media screen and (max-width: 480px) {
  .grid-container {
    height: auto;
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
  }

  .one,
  .two,
  .three,
  .four,
  .five,
  .six {
    min-height: 400px;
    min-width: 300px;
    background-size: 210%;
    background-position: center;
  }
}
</style>
