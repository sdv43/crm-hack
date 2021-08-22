<template>
  <header :class="$style.root">
    <div :class="$style.title">
      Продажа кредитной карты (50 тыс. руб)
    </div>

    <div :class="$style.actions">
      <button :class="$style.action">
        Сохранить
      </button>
    </div>
  </header>
</template>

<script>
export default {
  name: 'EditorHeader',
};
</script>

<style lang="scss" module>
.root {
  @apply flex justify-between items-center py-xl px-md;

  .title {
    @apply text-xl font-medium;
  }

  .actions {
    .action {
      @apply flex justify-center items-center mx-auto py-sm px-lg rounded-lg bg-blue-500;
      @apply text-white text-sm font-medium;
    }
  }
}
</style>
