<template>
  <div class="">
    <!--NavBar-->
    <nav
      class="nav shadow-lg fixed top-0 left-0 md:h-1/10 w-full flex items-center justify-between"
      :class="[
        { 'nav-yellow-bg': scrollPosition <= 540 || scrollPosition === 0 },
      ]"
    >
      <div class="container mx-auto flex items-center justify-between">
        <div @click="toggleNav()" id="nav-icon1" :class="{ open: isOpen }">
          <span></span>
          <span></span>
          <span></span>
        </div>
        <SunIcon class="mr-8" />
      </div>
    </nav>

    <!-- Sidedrawer Overlay -->
    <div
      id="backdrop"
      class="backdrop-container hidden h-full overflow-auto fixed top-0 left-0 w-full"
      :class="[{ 'open-backdrop': isOpen }, { 'close-backdrop': !isOpen }]"
    ></div>

    <!-- Sidedrawer Content-->
    <div
      id="mySidenav"
      class="sidenav-container transition-all bg-white flex flex-col items-center h-full overflow-x-hidden pt-2 fixed top-0 left-0 w-0 shadow-inner shadow-lg"
      :class="[{ 'open-drawer': isOpen }, { 'close-drawer': !isOpen }]"
    >
      <span
        class="drawer-close-button flex items-center justify-end h-12 mb-12 w-full"
      >
        <a
          href="javascript:void(0)"
          class="closebtn font-bold text-5xl pr-4 hover:text-white"
          @click="toggleNav()"
          >&times;</a
        >
      </span>
      <NavList @toggle-nav="toggleNav" />
    </div>
  </div>
</template>

<script>
import NavList from '@/components/navigation/NavList.vue'
import SunIcon from '@/components/icons/SunIcon.vue'

export default {
  components: {
    NavList,
    SunIcon,
  },
  data() {
    return {
      isOpen: false,
      scrollPosition: 0,
    }
  },
  mounted() {
    window.addEventListener('scroll', this.updateScrollPosition)
  },
  destroy() {
    window.removeEventListener('scroll', this.updateScrollPosition)
  },
  methods: {
    toggleNav() {
      this.isOpen = !this.isOpen
    },
    updateScrollPosition() {
      this.scrollPosition = window.scrollY
    },
  },
}
</script>

<style scoped>
nav {
  z-index: 10;
  min-height: 85px;
  background-color: white;
}

.nav {
  transition: all 0.2s ease;
}

.nav-yellow-bg {
  background: linear-gradient(
    90deg,
    rgb(255, 225, 107) 0%,
    rgb(255, 228, 119),
    rgb(255, 225, 107) 100%
  );
  background: rgb(255, 228, 119);
}
#nav-icon1 {
  width: 60px;
  height: 25px;
  position: relative;
  bottom: 10px;
  left: 2rem;
  -webkit-transform: rotate(0deg);
  -moz-transform: rotate(0deg);
  -o-transform: rotate(0deg);
  transform: rotate(0deg);
  -webkit-transition: 0.5s ease-in-out;
  -moz-transition: 0.5s ease-in-out;
  -o-transition: 0.5s ease-in-out;
  transition: 0.5s ease-in-out;
  cursor: pointer;
  z-index: 20;
}

#nav-icon1 span {
  display: block;
  position: absolute;
  height: 6px;
  width: 100%;
  background: black;
  border-radius: 9px;
  opacity: 1;
  left: 0;
  -webkit-transform: rotate(0deg);
  -moz-transform: rotate(0deg);
  -o-transform: rotate(0deg);
  transform: rotate(0deg);
  -webkit-transition: 0.25s ease-in-out;
  -moz-transition: 0.25s ease-in-out;
  -o-transition: 0.25s ease-in-out;
  transition: 0.25s ease-in-out;
}

#nav-icon1 span:nth-child(1) {
  top: 0px;
}

#nav-icon1 span:nth-child(2) {
  top: 18px;
}

#nav-icon1 span:nth-child(3) {
  top: 36px;
}

#nav-icon1.open span:nth-child(1) {
  top: 18px;
  -webkit-transform: rotate(135deg);
  -moz-transform: rotate(135deg);
  -o-transform: rotate(135deg);
  transform: rotate(135deg);
}

#nav-icon1.open span:nth-child(2) {
  opacity: 0;
  left: -60px;
}

#nav-icon1.open span:nth-child(3) {
  top: 18px;
  -webkit-transform: rotate(-135deg);
  -moz-transform: rotate(-135deg);
  -o-transform: rotate(-135deg);
  transform: rotate(-135deg);
}

.backdrop-container {
  background: #ffcd02;
  background: linear-gradient(
    90deg,
    rgba(242, 217, 128, 0.2) 0%,
    #ffcd0246,
    rgba(242, 217, 128, 0.2) 100%
  );
  z-index: 2;
  animation: fadeIn 0.6s cubic-bezier(0.1, 0.95, 0.77, 1.01);
}

.sidenav-container {
  @apply bg-gray-700;
  z-index: 9;
  transition: 0.3s;
}

.sidenav-container .closebtn {
  @apply text-blue-300;
  text-shadow: 1px 1px 2px black;
}

.open-drawer {
  @apply w-3/4;
}

.open-backdrop {
  display: block;
  opacity: 1;
}

.close-drawer {
  width: 0px;
}

.close-backdrop {
  opacity: 0;
}

@media screen and (min-width: 768px) {
  .open-drawer {
    @apply w-2/12;
  }
}
</style>
