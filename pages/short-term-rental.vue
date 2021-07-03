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
  name: 'ShortTermRental',
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
      pageData: this.$store.state.pages.shortTermRentals,
      loading: true,
    }
  },
  mounted() {
    window.addEventListener('load', () => {
      setTimeout(() => {
        this.loading = false
      }, 1000)
    })
    console.log(this.pageData)
  },
}
</script>
