<template>
  <div class="flex justify-start items-center xl:text-4xl">
    <font-awesome-icon
      :icon="['fa', link.icon]"
      class="mr-3 text-3xl xl:text-4xl fa-fw text-blue-400"
    />
    <a
      :id="link.text + '-link'"
      class="block text-3xl xl:text-5xl mx-0 my-2 no-underline hover:text-white"
      :href="link.link"
      >{{ link.text }}</a
    >
  </div>
</template>

<script>
export default {
  props: {
    link: {
      type: Object,
      default: () => {
        return {}
      },
    },
  },
}
</script>

<style scoped>
a {
  @apply text-white;
  font-family: 'Lobster', cursive;
  text-shadow: 1px 1px 2px #000;
  transition: all 0.3s;
}
</style>
