<template>
  <header :class="$style.root">
    <div :class="$style.client">
      <p :class="$style.phone">
        Исходящий вызов на {{ phoneNumber }}
      </p>

      <h1 :class="$style.name">
        {{ clientFullName }}
      </h1>
    </div>

    <div :class="$style.actions">
      <button :class="$style.action">
        <img src="@/assets/icons/phone_forwarded_white_24dp.svg" alt="null"/>
      </button>
      <button
        :class="[
        $style.action,
        mute ? $style['mic-off'] : ''
        ]"
        @click="micToggle"
      >
        <img v-show="mute" src="@/assets/icons/mic_off_white_24dp.svg" alt="null"/>
        <img v-show="!mute" src="@/assets/icons/mic_white_24dp.svg" alt="null"/>
      </button>
      <button
        :class="[$style.action, $style.end]"
        @click="callEnd"
      >
        <img src="@/assets/icons/call_end_white_24dp.svg" alt="null"/>
      </button>
    </div>
  </header>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'CardHeader',

  data() {
    return {
      mute: false,
    };
  },

  computed: {
    ...mapState('client', [
      'name',
      'lastName',
    ]),

    ...mapState('operatorCard', [
      'phoneNumber',
    ]),

    clientFullName() {
      return `${this.name} ${this.lastName}`;
    },
  },

  methods: {
    micToggle() {
      this.mute = !this.mute;
    },

    callEnd() {
      alert('End call...');
    },
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
