<template>
  <router-view/>
</template>

<script>
export default {
  name: 'App',

  mounted() {
    this.$store.dispatch('operatorCard/init');
  },
};
</script>

<style lang="scss">
html {
  @apply h-full;
}

body {
  @apply h-full;
}
</style>
