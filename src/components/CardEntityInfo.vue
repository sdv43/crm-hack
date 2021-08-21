<template>
  <section :class="$style.root">
    <CardEntityInfoHeader/>

    <section :class="$style.fields">
      <div
        v-for="field in fields"
        :key="field.key"
        :class="$style.field"
      >
      <span :class="$style.label">
        {{ field.label }}:
      </span>
        {{ ` ` }}
        <span :class="$style.value">
        {{ client[field.key] }}
      </span>
      </div>
    </section>
  </section>
</template>

<script>
import CardEntityInfoHeader from '@/components/CardEntityInfoHeader.vue';

export default {
  name: 'CardEntityInfo',
  components: { CardEntityInfoHeader },
  data() {
    return {
      fields: [
        { label: 'Имя', key: 'name' },
        { label: 'Фамилия', key: 'lastName' },
        { label: 'Отчество', key: 'secondName' },
        { label: 'Возраст', key: 'age' },
        { label: 'Мобильный телефон', key: 'phoneMobile' },
        { label: 'Рабочий телефон', key: 'phoneWork' },
        { label: 'Возраст', key: 'age' },
        { label: 'Есть кредит', key: 'hasCredit' },
        { label: 'Есть сретификат COVID-19', key: 'hasCovidCert' },
        { label: 'Зарплата', key: 'salary' },
        { label: 'Сумма кредита', key: 'creditSum' },
        { label: 'Срок кредита', key: 'creditDuration' },
      ],
    };
  },

  computed: {
    client() {
      return this.$store.state.client;
    },
  },
};
</script>

<style lang="scss" module>
.root {
  @apply h-full;
}

.header {
  @apply mb-md text-lg;
}

.fields {
  @apply flex-grow overflow-y-auto mx-xl;

  height: calc(100% - 112px);

  &::-webkit-scrollbar {
    @apply bg-white;
  }

  &::-webkit-scrollbar-thumb {
    @apply rounded-full;

    background-color: #eff4fb;
  }

  .field {
    @apply flex flex-col;

    padding-top: 4px;
    padding-bottom: 4px;

    .label {
      @apply text-sm text-gray-500;
    }

    .value {
      @apply text-lg;
    }
  }
}

</style>
