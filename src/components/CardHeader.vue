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
        :class="[
          $style.action,
          iconCall ? $style.call : $style.end,
          iconOpacity ? $style.opacity : '',
        ]"
        @click="callToggle"
      >
        <img v-show="iconCall" src="@/assets/icons/call_white_24dp.svg" alt="null"/>
        <img v-show="!iconCall" src="@/assets/icons/call_end_white_24dp.svg" alt="null"/>
      </button>
    </div>
  </header>
</template>

<script>
import { mapState } from 'vuex';
import {
  CALL_FINISHED, CALL_TALKING, CALL_ENDING, CALL_IN_PROGRESS,
} from '@/store/modules/operatorCard/constants';

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
      'callStatus',
      'phoneNumber',
    ]),

    clientFullName() {
      return `${this.name} ${this.lastName}`;
    },

    iconCall() {
      return [CALL_FINISHED, CALL_IN_PROGRESS].includes(this.callStatus);
    },

    iconOpacity() {
      return [CALL_ENDING, CALL_IN_PROGRESS].includes(this.callStatus);
    },
  },

  methods: {
    micToggle() {
      this.mute = !this.mute;
    },

    callToggle() {
      if (this.callStatus === CALL_TALKING) {
        this.$store.state.operatorCard.callStatus = CALL_ENDING;

        setTimeout(() => {
          this.$store.state.operatorCard.callStatus = CALL_FINISHED;
        }, 2500);
      } else if (this.callStatus === CALL_FINISHED) {
        this.$store.state.operatorCard.callStatus = CALL_IN_PROGRESS;

        setTimeout(() => {
          this.$store.state.operatorCard.callStatus = CALL_TALKING;
        }, 2500);
      }
    },
  },
};
</script>

<style lang="scss" module>
.root {
  @apply flex justify-between items-center py-xl px-md;
}

.client {
  @apply flex flex-col;

  .phone {
    @apply text-sm text-gray-500;
  }

  .name {
    @apply text-xl font-medium;
  }
}

.actions {
  @apply flex justify-end gap-md;

  .action {
    @apply flex justify-center items-center p-sm rounded-full shadow-md;

    background-color: #eff4fb;

    img {
      height: 20px;
      width: auto;
    }

    &.opacity {
      @apply opacity-50;
    }

    &.call {
      @apply bg-green-500;
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
