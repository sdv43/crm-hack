<template>
  <div :class="$style.root">
    <button
      :class="$style.action"
      @click="callBackToggle($event)"
      data-modal-action
    >
      <img src="@/assets/icons/add_ic_call_white_24dp.svg" height="24" width="24">

      <Modal
        id="call-back"
        :class="$style['modal-centered']"
      >
        modal content
      </Modal>
    </button>
    <button
      :class="[$style.action, $style['busy']]"
      @click="busyToggle($event)"
      data-modal-action
    >
      <img src="@/assets/icons/settings_phone_white_24dp.svg" height="24" width="24">

      <Modal
        id="busy"
        :class="$style['modal-centered']"
      >
        modal content
      </Modal>
    </button>
    <button
      :class="[$style.action, $style['no-answer']]"
      @click="noAnswerToggle($event)"
      data-modal-action
    >
      <img src="@/assets/icons/phone_missed_white_24dp.svg" height="24" width="24">

      <Modal
        id="no-answer"
        :class="$style['modal-centered']"
      >
        modal content
      </Modal>
    </button>
  </div>
</template>

<script>
import Modal from '@/components/Modal.vue';

export default {
  name: 'CardStepActionsCommon',
  components: { Modal },

  methods: {
    callBackToggle(e) {
      e.id = 'call-back';

      this.$root.$emit('modal::toggle', e);
    },

    busyToggle(e) {
      e.id = 'busy';

      this.$root.$emit('modal::toggle', e);
    },

    noAnswerToggle(e) {
      e.id = 'no-answer';

      this.$root.$emit('modal::toggle', e);
    },
  },
};
</script>

<style lang="scss" module>
.root {
  @apply flex justify-center gap-md;
}

.modal-centered {
  top: 50%;
  left: 50%;
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
