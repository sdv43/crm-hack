<template>
  <header :class="$style.root">
    <nav :class="$style.navigation">
      <button>&larr; Пред. шаг</button>
      <button>На первый шаг</button>
      <button :class="$style['to-script-list']">К скписку скриптов</button>
    </nav>

    <div v-show="false">
      <progress :class="$style.progress" value="40" max="100"/>
    </div>
  </header>
</template>

<script>
export default {
  name: 'CardStepHeader',
};
</script>

<style lang="scss" module>
.root {
  @apply flex justify-between items-center;
}

.navigation {
  @apply flex gap-md w-full text-sm text-gray-500;

  .to-script-list {
    @apply ml-auto;
  }
}

.progress {
  &::-webkit-progress-bar {
    @apply overflow-hidden rounded-full shadow-sm bg-white;
  }

  &::-webkit-progress-value {
    @apply bg-blue-400;
  }

}
</style>
