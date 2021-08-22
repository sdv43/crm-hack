const actionsOperatorCard = {
  toStep({ state }, payload) {
    state.step = state.step.steps.find((s) => s.id === payload.id);
  },

  toFirstStep() {
  },

  toPrevStep() {
  },
};

export default actionsOperatorCard;
