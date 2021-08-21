import stateClient from '@/store/modules/client/state';

const storeClient = {
  namespaced: true,
  state: stateClient,
};

export default storeClient;
