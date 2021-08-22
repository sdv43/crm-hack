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
        <div :class="$style['modal-text']">
          <div>
            Перезвонить через:
            <select>
              <option>30 минут</option>
              <option>1 час</option>
              <option>3 часа</option>
              <option>Завтра</option>
              <option>1 неделя</option>
              <option>1 месяц</option>
            </select>
          </div>

          <button
            :class="$style['call-back-button']"
            @click="$root.$emit('modal::close', {path: [], id: 'call-back'})"
          >
            Перезвонить
          </button>
        </div>
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
        <p :class="$style['modal-text']">
          Запланирован перезвон через
          <br>
          15 минут
        </p>
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
        <p :class="$style['modal-text']">
          Клиент переведн в статус
          <br>
          недозвон
        </p>
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
      this.closeModalTimeout(e);
    },

    noAnswerToggle(e) {
      e.id = 'no-answer';

      this.$root.$emit('modal::toggle', e);
      this.closeModalTimeout(e);
    },

    closeModalTimeout(event) {
      setTimeout(() => {
        this.$root.$emit('modal::close', event);
      }, 3500);
    },
  },
};
</script>

<style lang="scss" module>
.root {
  @apply flex justify-center gap-md;
}

.modal-centered {
  @apply p-lg;

  min-width: 300px;
  top: 50%;
  left: calc(50% - 150px);

  .modal-text {
    @apply m-auto font-medium text-base text-black;
  }

  .call-back-button {
    @apply flex justify-center items-center mt-md mx-auto py-sm px-lg rounded-lg bg-blue-500;
    @apply text-white text-xs font-medium;
  }
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
