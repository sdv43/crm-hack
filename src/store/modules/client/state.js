const stateClient = {
  id: 0,
  name: 'Михаил',
  lastName: 'Савельев',
  secondName: 'Александрович',
  age: 29,
  phones: [
    { type: 'mobile', num: '8 (916) 305 66 93' },
    { type: 'mobile', num: '8 (927) 145 26 55' },
    { type: 'work', num: '8 (495) 888 39 21' },
  ],
  hasCredit: false,
  hasCovidCert: true,
  salary: 150000,
  credit: {
    sum: 1000000,
    duration: 36,
  },

};

export default stateClient;
