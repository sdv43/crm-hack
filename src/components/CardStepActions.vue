<template>
  <div :class="$style.root">
    <button :class="$style.button">Согласен</button>
    <button :class="$style.button">Слишком дорого</button>
    <button :class="$style.button">Не согласен</button>
  </div>
</template>

<script>
export default {
  name: 'CardStepActions',
};
</script>

<style lang="scss" module>
.root {
  @apply flex justify-start flex-wrap gap-md;
}

.button {
  @apply bg-white text-black rounded-lg shadow-md py-sm p-lg text-sm font-medium;
}
</style>
