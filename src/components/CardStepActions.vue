<template>
  <div :class="$style.root">
    <button
      v-for="action in actions"
      :key="action.name"
      :class="$style.button"
      @click="handleAction(action.action, action.params)"
    >
      {{ action.name }}
    </button>
  </div>
</template>

<script>
export default {
  name: 'CardStepActions',

  props: {
    actions: {
      type: Array,
      required: true,
    },
  },

  methods: {
    handleAction(action, params) {
      switch (action) {
        case 'next-step':
          this.$store.dispatch('operatorCard/toStep', params);
          break;

        default:
          break;
      }
    },
  },
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
