<template>
  <div :class="$style.root">
    <button :class="$style.action">
      <img src="@/assets/icons/add_ic_call_white_24dp.svg" height="24" width="24">
    </button>
    <button :class="[$style.action, $style['busy']]">
      <img src="@/assets/icons/settings_phone_white_24dp.svg" height="24" width="24">
    </button>
    <button :class="[$style.action, $style['no-answer']]">
      <img src="@/assets/icons/phone_missed_white_24dp.svg" height="24" width="24">
    </button>
  </div>
</template>

<script>
export default {
  name: 'CardStepActionsCommon',
};
</script>

<style lang="scss" module>
.root {
  @apply flex justify-center gap-md;
}

.action {
  @apply flex flex-col justify-center items-center gap-sm rounded-xl bg-blue-500;
  @apply text-white text-xs font-medium;

  height: 60px;
  width: 60px;

  &.busy {
    @apply bg-yellow-500;
  }

  &.no-answer {
    @apply bg-red-500;
  }
}
</style>
