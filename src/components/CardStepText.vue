<template>
  <section :class="$style.root">
    <div :class="$style.label">
      Вопрос:
    </div>
    <p :class="$style.text">
      {{ text }}
    </p>
  </section>
</template>

<script>
export default {
  name: 'CardStepText',

  props: {
    text: {
      type: String,
      required: true,
    },
  },
};
</script>

<style lang="scss" module>
.root {
}

.label {
  @apply mb-sm text-sm text-gray-500;
}

.text {
  @apply text-2xl;
}
</style>
