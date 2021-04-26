<template>
  <div>
    <Loader v-if="loading" />
    <div v-else class="flex flex-wrap overflow-hidden linear-gradient">
      <div class="w-full overflow-hidden">
        <SideDrawer />
      </div>
      <div class="w-full overflow-hidden shadow-md">
        <Header :header-data="pageData.header" />
      </div>
      <div class="container mx-auto md:px-4 md:py-4">
        <div id="about" class="w-full overflow-hidden">
          <About :about-data="pageData.about" />
        </div>
        <div id="features" class="w-full overflow-hidden">
          <Features :features-data="pageData.features" />
        </div>
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
      pageData: this.$store.state.pages.home,
      loading: true,
    }
  },
  mounted() {
    window.addEventListener('load', () => {
      setTimeout(() => {
        this.loading = false
      }, 1000)
    })
  },
}
</script>

<style></style>
