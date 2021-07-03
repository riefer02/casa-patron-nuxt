<template>
  <ul class="">
    <li v-for="link in links" :key="link.text">
      <NavItem :link="link" @toggle-nav="$emit('toggle-nav')" />
    </li>
  </ul>
</template>

<script>
import NavItem from '@/components/navigation/NavItem.vue'

export default {
  components: {
    NavItem,
  },
  data() {
    return {
      links: [
        { text: 'Home', link: '/', icon: 'home' },
        // { text: 'Features', link: '#features', icon: 'list-ul' },
        { text: 'Retreats', link: '/retreats', icon: 'laptop-house' },
        {
          text: 'Rentals',
          link: '/short-term-rental',
          icon: 'calendar-alt',
        },
        // { text: 'Gallery', link: '#gallery', icon: 'images' },
        // { text: 'Testimonials', link: '#testimonials', icon: 'users' },
        // { text: 'Booking', link: '#booking', icon: 'book' },
      ],
    }
  },
}
</script>

<style lang="scss" scoped></style>
