const script = {
  id: 1,
  name: '',
  text: 'Да, можем предложить щебень по 500 руб., но объем отгрузки будет от 30 тонн. ##',

  actions: [
    {
      name: 'Да',
      action: 'next-step',
      params: {
        id: 2,
      },
    },
    {
      name: 'Нет',
      action: 'next-step',
      params: {
        id: 2,
      },
    },
  ],

  steps: [
    {
      id: 2,
      name: '',
      text: 'Step 2',

      actions: [
        {
          name: 'Yes',
          action: 'next-step',
          params: {
            id: 3,
          },
        },
        {
          name: 'No',
          action: 'next-step',
          params: {
            id: 3,
          },
        },
      ],

      steps: [
        {
          id: 3,
          name: '',
          text: 'Step 3',

          actions: [
            {
              name: 'finish',
              action: 'next-step',
              params: {
                id: 3,
              },
            },
          ],

          steps: [],
        },
      ],
    },
  ],
};

export default script;
