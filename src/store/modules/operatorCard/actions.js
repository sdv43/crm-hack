const actionsOperatorCard = {
  toStep({ state }, payload) {
    state.history.push(state.step);
    state.step = state.step.steps.find((s) => s.id === payload.id);
  },

  toFirstStep({ state }) {
    if (state.history.length > 0) {
      state.step = state.history.shift();
      state.history = [];
    }
  },

  toPrevStep({ state }) {
    if (state.history.length > 0) {
      state.step = state.history.pop();
    }
  },
};

export default actionsOperatorCard;
