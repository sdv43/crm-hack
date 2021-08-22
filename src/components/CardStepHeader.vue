<template>
  <header :class="$style.root">
    <nav :class="$style.navigation">
      <button
        :class="[$style.action, $style['to-prev-step']]"
        @click="toPrevStep"
      >
        &larr; пред. шаг
      </button>

      <button
        :class="$style.action"
        @click="toFirstStep"
      >
        на первый шаг
      </button>

      <button
        :class="[
          $style.action,
          $style['to-script-list']
        ]"
        @click="scriptListToggle($event)"
        data-modal-action
      >
        к скписку скриптов

        <ModalScriptList/>
      </button>
    </nav>

    <div v-show="false">
      <progress :class="$style.progress" value="40" max="100"/>
    </div>
  </header>
</template>

<script>
import ModalScriptList from '@/components/ModalScriptList.vue';

export default {
  name: 'CardStepHeader',
  components: { ModalScriptList },

  methods: {
    scriptListToggle(e) {
      e.id = 'script-list';

      this.$root.$emit('modal::toggle', e);
    },

    toPrevStep() {
      this.$store.dispatch('operatorCard/toPrevStep');
    },

    toFirstStep() {
      this.$store.dispatch('operatorCard/toFirstStep');
    },
  },
};
</script>

<style lang="scss" module>
.root {
  @apply flex justify-between items-center;
}

.navigation {
  @apply flex gap-md w-full text-sm;

  .action {
    &:hover {
      @apply underline;
    }
  }

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
