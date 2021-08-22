const script = {
  id: 1,
  name: '',
  text: 'Добрый день, Меня зовут Алексей, являюсь вашем персональным менеджером в УмеемБанке. Удобно говорить?',

  actions: [
    {
      name: 'Неудобно говорить',
      action: 'next-step',
      params: {
        id: 2,
      },
    },
    {
      name: 'Продолжаем',
      action: 'next-step',
      params: {
        id: 3,
      },
    },
  ],

  steps: [
    {
      id: 2,
      name: '',
      text: 'Хорошо. Подскажите, пожалуйста, когда Вам перезвонить?',

      actions: [
        {
          name: 'Конец разговора',
          action: '',
          params: {},
        },
      ],
    },
    {
      id: 3,
      name: '',
      text: 'Звоню в целях повышения качества обслуживания. Задам вам несколько вопросов.'
        + ' Расскажите про опыт использования мобильного приложения. Все было хорошо?',

      actions: [
        {
          name: 'Позитивный отзыв',
          action: 'next-step',
          params: { id: 4 },
        },
        {
          name: 'Негативный отзыв',
          action: 'next-step',
          params: { id: 4 },
        },
      ],

      steps: [
        {
          id: 4,
          name: '',
          text: 'Расскажите, какими кредитными продуктами в других банках вы пользуетесь?',

          actions: [
            {
              name: 'Кредитная карта',
              action: 'next-step',
              params: { id: 5 },
            },
            {
              name: 'Кредит',
              action: 'next-step',
              params: { id: 6 },
            },
            {
              name: 'Ипотека',
              action: 'next-step',
              params: { id: 7 },
            },
            {
              name: 'Никакими не пользуюсь',
              action: 'next-step',
              params: { id: 8 },
            },
          ],

          steps: [
            {
              id: 5,
              name: '',
              text: 'Укладываетесь по данной карте в льготный период?',
              actions: [],
              steps: [],
            },
            {
              id: 6,
              name: '',
              text: 'Какой у вас сейчас процент по кредиту в другом банке?',
              actions: [],
              steps: [],
            },
            {
              id: 7,
              name: '',
              text: 'Какая у вас сейчас процентная ставка по ипотеке в другом банке?',
              actions: [],
              steps: [],
            },
            {
              id: 8,
              name: '',
              text: 'Хорошо. Приятно, что вы пользуетесь услугами только нашего банка. Подскажите.'
                + ' пожалуйста, какие сервисы/услуги вы хотели бы видеть дополнительно?\n',
              actions: [],
              steps: [],
            },
          ],
        },
      ],
    },
  ],
};

export default script;
