<template>
  <section :class="$style.root">
    <header :class="$style.title">
      Редактирование шага
    </header>

    <div>
      <div>
        <textarea :class="$style['step-text']" v-model="text"></textarea>
      </div>

      <div :class="$style.actions">
        <div :class="$style.title">
          <span>Действия</span>
          <span>
            <img :class="$style['add-icon']" src="@/assets/icons/add_circle_black_24dp.svg">
          </span>
        </div>

        <div :class="$style['actions-container']">
          <div :class="$style.action">
            <span class="mr-auto">Согласен</span>
            <img src="@/assets/icons/edit_black_24dp.svg" height="20" width="20"/>
            <img src="@/assets/icons/delete_black_24dp.svg" height="20" width="20"/>
          </div>
          <div :class="$style.action">
            <span class="mr-auto">Дорого</span>
            <img src="@/assets/icons/edit_black_24dp.svg" height="20" width="20"/>
            <img src="@/assets/icons/delete_black_24dp.svg" height="20" width="20"/>
          </div>
          <div :class="$style.action">
            <span class="mr-auto">Отказался</span>
            <img src="@/assets/icons/edit_black_24dp.svg" height="20" width="20"/>
            <img src="@/assets/icons/delete_black_24dp.svg" height="20" width="20"/>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'EditorStepForm',

  data() {
    return {
      text: 'Звоню в целях повышения качества обслуживания. Задам вам несколько вопросов.',
    };
  },
};
</script>

<style lang="scss" module>
.root {
  @apply pl-xl;
}

.title {
  @apply flex justify-between items-center pt-sm pb-md text-sm font-medium;

  .add-icon {
    @apply pr-sm cursor-pointer;
  }
}

.step-text {
  @apply rounded-lg py-sm px-md w-full;

  height: 120px;
  background-color: #eff4fb;
}

.actions {
  .title {
    @apply pt-lg text-sm font-medium text-gray-500;
  }

  .actions-container {
    @apply flex flex-col items-stretch gap-md;

    .action {
      @apply flex justify-end items-center gap-sm py-sm pr-sm px-lg rounded-lg bg-blue-500;
      @apply text-white text-sm font-medium;

      img {
        @apply opacity-90 cursor-pointer;
      }
    }
  }
}
</style>
