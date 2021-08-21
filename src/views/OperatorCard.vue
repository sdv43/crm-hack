<template>
  <section :class="$style.root">
    <CardHeader/>

    <div :class="$style.content">
      <CardEntityInfo :class="$style.entity"/>
      <CardStep :class="$style.step"/>
    </div>
  </section>
</template>

<script>
import CardHeader from '@/components/CardHeader.vue';
import CardEntityInfo from '@/components/CardEntityInfo.vue';
import CardStep from '@/components/CardStep.vue';

export default {
  name: 'OperatorCard',
  components: { CardStep, CardEntityInfo, CardHeader },
};
</script>

<style lang="scss" module>
.root {
  @apply min-h-full flex flex-col items-stretch;
}

.content {
  @apply flex items-stretch flex-grow p-md pt-0;

  .entity {
    @apply w-1/3;
  }

  .step {
    @apply w-2/3;
  }
}
</style>
