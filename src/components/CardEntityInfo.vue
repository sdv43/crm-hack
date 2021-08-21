<template>
  <section :class="$style.root">
    <div :class="$style.field">
      <span :class="$style.label">Имя:</span>
      {{` `}}
      <span :class="$style.value">Михаил</span>
    </div>
  </section>
</template>

<script>
export default {
  name: 'CardEntityInfo',
};
</script>

<style lang="scss" module>
.root {
  @apply min-h-full rounded bg-gray-100 m-md p-md;
}

.field {
  .label {
    @apply font-medium;
  }

  .value {

  }
}
</style>
