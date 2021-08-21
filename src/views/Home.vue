<template>
  <section :class="$style.root">
    <ul>
      <li :class="$style.link">
        <router-link :to="{name:'OperatorCard'}">Operator Card</router-link>
      </li>
      <li :class="$style.link">
        <router-link :to="{name:'ScriptEditor'}">Script Editor</router-link>
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  name: 'Home',
};
</script>

<style lang="scss" module>
.root {
  @apply h-full flex justify-center items-center;
}

.link {
  @apply m-2;
}
</style>
