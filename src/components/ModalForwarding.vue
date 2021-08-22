<template>
  <Modal
    id="call-forwarding"
    :class="$style['forwarding-modal']"
  >
    <header :class="$style.title">
      Перевод звонка в:
    </header>

    <ul @click="close" :class="$style.menu">
      <li :class="$style.item">Отдел продаж</li>
      <li :class="$style.item">Главный менеджер</li>
      <li :class="$style.item">Служба безопасности</li>
    </ul>
  </Modal>
</template>

<script>
import Modal from '@/components/Modal.vue';

export default {
  name: 'ModalForwarding',

  components: { Modal },

  methods: {
    close() {
      this.$root.$emit('modal::close', { id: 'call-forwarding', path: [] });
    },
  },
};
</script>

<style lang="scss" module>
.forwarding-modal {
  @apply py-sm;

  transform: translateY(calc(50% + 32px));

  .title {
    @apply pb-sm px-md font-medium text-sm text-left;
  }

  .menu {
    @apply flex flex-col items-stretch text-sm text-left;

    .item {
      @apply py-sm px-md;

      &:hover {
        @apply cursor-pointer;

        background-color: #eff4fb;
      }
    }
  }
}
</style>
