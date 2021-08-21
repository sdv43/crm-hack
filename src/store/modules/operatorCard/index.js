import stateOperatorCard from '@/store/modules/operatorCard/state';
import actionsOperatorCard from '@/store/modules/operatorCard/actions';

const storeOperatorCard = {
  namespaced: true,
  state: stateOperatorCard,
  actions: actionsOperatorCard,
};

export default storeOperatorCard;
