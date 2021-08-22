<template>
  <section :class="$style.root">
    <EditorHeader/>

    <div :class="$style.editor">
      <EditorSteps :class="$style.steps"/>
      <EditorStepForm :class="$style['step-form']"/>
    </div>
  </section>
</template>

<script>
import EditorHeader from '@/components/EditorHeader.vue';
import EditorSteps from '@/components/EditorSteps.vue';
import EditorStepForm from '@/components/EditorStepForm.vue';

export default {
  name: 'ScriptEditor',
  components: { EditorStepForm, EditorSteps, EditorHeader },
};
</script>

<style lang="scss" module>
.root {
  @apply h-full flex flex-col items-stretch gap-md p-xl pt-0;
}

.editor {
  @apply flex items-stretch flex-grow;

  .steps {
    @apply w-2/3;
  }

  .step-form {
    @apply w-1/3;
  }
}
</style>
