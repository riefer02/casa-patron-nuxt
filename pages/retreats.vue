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
      </div>
      <div class="w-full overflow-hidden"><Footer /></div>
    </div>
  </div>
</template>

<script>
import Loader from '@/components/utility/Loader.vue'
import Header from '@/components/sections/header/Header.vue'
import About from '@/components/sections/about/About.vue'
import Features from '@/components/sections/features/Features.vue'
import Footer from '@/components/sections/footer/Footer.vue'
import SideDrawer from '@/components/navigation/SideDrawer.vue'

export default {
  name: 'Home',
  components: {
    Loader,
    Header,
    About,
    Features,
    Footer,
    SideDrawer,
  },
  data() {
    return {
      pageData: this.$store.state.pages.retreats,
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
