<template>
  <section :class="$style.root">
    <div :class="[$style.card, $style.active]" style="top: 50px; left: 230px;">
      Звоню в целях повышения качества обслуживания. Задам вам несколько вопросов.
    </div>
    <div :class="$style.card" style="top: 180px; left: 310px;">
      Расскажите, какими кредитными продуктами в других банках вы пользуетесь?
    </div>
    <div :class="$style.card" style="top: 320px; left: 130px;">
      Какой у вас сейчас процент по кредиту в другом банке?
    </div>
    <div :class="$style.card" style="top: 320px; left: 430px;">
      Укладываетесь по данной карте в льготный период?
    </div>
  </section>
</template>

<script>
export default {
  name: 'EditorSteps',
};
</script>

<style lang="scss" module>
.root {
  @apply relative p-xl rounded;

  background-color: #eff4fb;
}

.card {
  @apply absolute rounded-lg bg-white shadow-md py-sm px-md text-sm;

  width: 200px;

  &.active {
    @apply border-2 border-solid border-blue-500;
  }
}
</style>
