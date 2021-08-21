<template>
  <section :class="$style.root">
    <CardStep :class="$style.step"/>
    <CardEntityInfo :class="$style.entity"/>
  </section>
</template>

<script>
import CardEntityInfo from '@/components/CardEntityInfo.vue';
import CardStep from '@/components/CardStep.vue';

export default {
  name: 'OperatorCard',
  components: { CardStep, CardEntityInfo },
};
</script>

<style lang="scss" module>
.root {
  @apply h-full flex items-stretch gap-md p-xl pt-0;
}

.entity {
  @apply w-1/3;
}

.step {
  @apply w-2/3;
}
</style>
