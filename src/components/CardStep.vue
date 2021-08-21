<template>
  <section :class="$style.root">
    <CardStepHeader :class="$style.header"/>
    <CardStepText :class="$style.text"/>
    <CardStepActions :class="$style.actions"/>
  </section>
</template>

<script>
import CardStepHeader from '@/components/CardStepHeader.vue';
import CardStepText from '@/components/CardStepText.vue';
import CardStepActions from '@/components/CardStepActions.vue';

export default {
  name: 'CardStep',
  components: { CardStepActions, CardStepText, CardStepHeader },
};
</script>

<style lang="scss" module>
.root {
  @apply min-h-full flex flex-col justify-start items-stretch rounded bg-gray-100 m-md p-md;
}

.header {
}

.text {
  @apply my-xl;
}

.actions {
}
</style>
