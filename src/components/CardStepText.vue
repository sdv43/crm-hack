<template>
  <section :class="$style.root">
    <div :class="$style.label">
      Вопрос:
    </div>
    <p :class="$style.text">
      Да, можем предложить щебень по 500 руб., но объем отгрузки будет от 30 тонн.
    </p>
  </section>
</template>

<script>
export default {
  name: 'CardStepText',
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
