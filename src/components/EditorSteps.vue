<template>
  <section :class="$style.root">
    editor
  </section>
</template>

<script>
export default {
  name: 'EditorSteps',
};
</script>

<style lang="scss" module>
.root {
  @apply p-xl rounded;

  background-color: #eff4fb;
}
</style>
