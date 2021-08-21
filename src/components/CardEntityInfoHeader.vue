<template>
  <header :class="$style.root">
    <div :class="$style.title">
      Данные о клиенте
    </div>

    <div>
      <button :class="$style['to-client-page']">
        <img src="@/assets/icons/launch_black_24dp.svg">
      </button>
    </div>
  </header>
</template>

<script>
export default {
  name: 'CardEntityInfoHeader',
};
</script>

<style lang="scss" module>
.root {
  @apply flex justify-between items-center py-xl px-xl;
}

.title {
  @apply text-xl font-medium;

  padding-top: 10px;
  padding-bottom: 10px;
}

.to-client-page {
  @apply flex justify-center items-center p-sm rounded-full shadow-md;

  background-color: #eff4fb;

  img {
    height: 20px;
    width: auto;
  }
}
</style>
