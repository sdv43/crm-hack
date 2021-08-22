<template>
  <Modal
    id="script-list"
    :class="$style['script-list-modal']"
  >
    <header :class="$style.title">
      Выберите скрипт:
    </header>

    <ul :class="$style.menu">
      <li :class="$style.item">Кредит</li>
      <li :class="$style.item">Страховка</li>
      <li :class="$style.item">Мобильная связь</li>
    </ul>
  </Modal>
</template>

<script>
import Modal from '@/components/Modal.vue';

export default {
  name: 'ModalScriptList',
  components: { Modal },
};
</script>

<style lang="scss" module>
.script-list-modal {
  @apply py-sm;

  transform: translateY(15px);

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
