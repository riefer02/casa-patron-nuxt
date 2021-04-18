<template>
  <div>
    <Loader v-if="loading" />
    <div
      v-else
      class="flex flex-wrap overflow-hidden bg-yellow-300 linear-gradient"
    >
      <div class="w-full overflow-hidden">
        <SideDrawer />
      </div>
      <div class="w-full overflow-hidden shadow-md">
        <Header />
      </div>
      <div class="container mx-auto md:px-4 md:py-4">
        <div id="about" class="w-full overflow-hidden"><About /></div>
        <div id="features" class="w-full overflow-hidden"><Features /></div>
        <div id="events" class="w-full overflow-hidden"><EventsList /></div>
        <div id="gallery" class="w-full overflow-hidden"><Gallery /></div>

        <div id="booking" class="w-full overflow-hidden"><Booking /></div>
      </div>
      <div class="w-full overflow-hidden"><Footer /></div>
    </div>
  </div>
</template>

<script>
import Loader from '@/components/utility/Loader.vue'
import Header from '@/components/header/Header.vue'
import About from '@/components/about/About.vue'
import Features from '@/components/features/Features.vue'
import EventsList from '@/components/events/EventsList.vue'
import Booking from '@/components/booking/Booking.vue'
import Footer from '@/components/footer/Footer.vue'
import SideDrawer from '@/components/navigation/SideDrawer.vue'
import Gallery from '@/components/gallery/Gallery.vue'

export default {
  name: 'Home',
  components: {
    Loader,
    Gallery,
    Header,
    About,
    Features,
    EventsList,

    Booking,
    Footer,
    SideDrawer,
  },
  data() {
    return {
      loading: true,
    }
  },
  mounted() {
    window.addEventListener('load', () => {
      this.loading = false
    })
  },
}
</script>

<style>
html {
  scroll-behavior: smooth;
}
h1,
h2,
h3,
h4,
h5,
h6 {
  font-family: 'Lobster', cursive;
}

p {
  font-family: 'Montserrat', sans-serif;
}

.linear-gradient {
  background: rgb(255, 228, 119);
  background: linear-gradient(
    90deg,
    rgb(255, 225, 107) 0%,
    rgb(255, 228, 119),
    rgb(255, 225, 107) 100%
  );
}
</style>
