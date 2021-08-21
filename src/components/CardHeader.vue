<template>
  <header :class="$style.root">
    <div :class="$style.client">
      <p :class="$style.phone">
        Исходящий вызов на +7 916 304 23 44
      </p>

      <h1 :class="$style.name">Михаил Савельев</h1>
    </div>

    <div :class="$style.actions">
      <button :class="$style.action">
        <img src="@/assets/icons/phone_forwarded_white_24dp.svg" alt="null"/>
      </button>
      <button :class="$style.action">
        <img src="@/assets/icons/mic_white_24dp.svg" alt="null"/>
<!--        <img src="@/assets/icons/mic_off_white_24dp.svg" alt="null"/>-->
      </button>
      <button :class="[$style.action, $style.end]">
        <img src="@/assets/icons/call_end_white_24dp.svg" alt="null"/>
      </button>
    </div>
  </header>
</template>

<script>

export default {
  name: 'CardHeader',

  data() {
    return {
    };
  },
};
</script>

<style lang="scss" module>
.root {
  @apply flex justify-between items-center p-xl;
}

.client {
  @apply flex flex-col;

  .phone {
    @apply text-sm text-gray-500;
  }

  .name {
    @apply text-2xl font-medium;
  }
}

.actions {
  @apply flex justify-end gap-md;

  .action {
    @apply flex justify-center items-center p-sm rounded-full;
    @apply border-0 border-solid border-gray-500 shadow-md bg-gray-100 ;

    img {
      height: 20px;
      width: auto;
    }

    &.end {
      @apply bg-red-500;
    }

    &.mic-off {
      @apply bg-red-500;
    }
  }
}
</style>
