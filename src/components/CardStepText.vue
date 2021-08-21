<template>
  <section :class="$style.root">
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
  @apply p-md;
}

.text {
  @apply text-2xl;
}
</style>
