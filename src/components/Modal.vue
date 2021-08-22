<template>
  <section
    ref="modalRoot"
    :class="[
      $style.root,
      opened ? $style.opened : $style.closed,
    ]"
  >
    <slot/>
  </section>
</template>

<script>
export default {
  name: 'Modal',

  props: {
    id: {
      type: String,
      required: true,
    },
  },

  data() {
    return {
      opened: false,
    };
  },

  methods: {
    skipEvent(e) {
      return e.path.includes(this.$refs.modalRoot);
    },
  },

  mounted() {
    this.$root.$on('modal::open', (e) => {
      if (this.skipEvent(e)) {
        return;
      }

      if (e.id === this.id) {
        this.opened = true;
      }
    });

    this.$root.$on('modal::close', (e) => {
      if (this.skipEvent(e)) {
        return;
      }

      if (e.id === this.id) {
        this.opened = false;
      }
    });

    this.$root.$on('modal::toggle', (e) => {
      if (this.skipEvent(e)) {
        return;
      }

      if (e.id === this.id) {
        this.opened = !this.opened;
      }
    });

    document.body.addEventListener('click', (e) => {
      if (this.skipEvent(e)) {
        return;
      }

      const modalAction = e.path.find((el) => el.hasAttribute && el.hasAttribute('data-modal-action'));

      if (modalAction) {
        return;
      }

      this.opened = false;
    });
  },
};
</script>

<style lang="scss" module>
.root {
  @apply absolute rounded-lg shadow-2xl bg-white;

  min-width: 180px;

  &.opened {
    @apply block;
  }

  &.closed {
    display: none;
  }
}
</style>
