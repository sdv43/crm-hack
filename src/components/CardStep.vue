<template>
  <section :class="$style.root">
    <CardHeader/>

    <div :class="$style.content">
      <CardStepHeader :class="$style.header"/>
      <CardStepText :class="$style.text"/>
      <CardStepActions/>
      <CardStepActionsCommon :class="$style['actions-common']"/>
    </div>
  </section>
</template>

<script>
import CardStepHeader from '@/components/CardStepHeader.vue';
import CardStepText from '@/components/CardStepText.vue';
import CardStepActions from '@/components/CardStepActions.vue';
import CardHeader from '@/components/CardHeader.vue';
import CardStepActionsCommon from '@/components/CardStepActionsCommon.vue';

export default {
  name: 'CardStep',
  components: {
    CardStepActionsCommon,
    CardHeader,
    CardStepActions,
    CardStepText,
    CardStepHeader,
  },
};
</script>

<style lang="scss" module>
.root {
  @apply relative min-h-full flex flex-col justify-start items-stretch;
}

.content {
  @apply flex flex-col flex-grow rounded gap-xl p-xl;

  background-color: #eff4fb;

  .actions-common {
    @apply mt-auto;
  }
}
</style>
