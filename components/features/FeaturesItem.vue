<template>
  <div class="my-4 md:my-0">
    <h3
      class="text-center md:text-left underline text-2xl md:text-3xl my-2 md:my-0"
    >
      {{ feature.title }}
    </h3>
    <ParagraphText :text="feature.description" />
  </div>
</template>

<script>
import ParagraphText from '@/components/typography/ParagraphText.vue'
export default {
  components: {
    ParagraphText,
  },
  props: {
    feature: {
      type: Object,
      default: () => {
        return {
          title: 'Placeholder Title',
          description: 'Placeholder description',
        }
      },
    },
  },
}
</script>

<style scoped></style>
