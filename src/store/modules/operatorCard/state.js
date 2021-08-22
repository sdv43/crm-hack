import { CALL_TALKING } from '@/store/modules/operatorCard/constants';

const stateOperatorCard = {
  callStatus: CALL_TALKING,
  phoneNumber: '8 (916) 305 66 93',
  history: [],
  step: {
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
              id: 2,
            },
          },
          {
            name: 'No',
            action: 'next-step',
            params: {
              id: 2,
            },
          },
        ],
      },
    ],
  },
};

export default stateOperatorCard;
