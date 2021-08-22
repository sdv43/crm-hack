import Vue from 'vue';
import Vuex from 'vuex';
import storeClient from '@/store/modules/client';
import storeOperatorCard from '@/store/modules/operatorCard';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    client: storeClient,
    operatorCard: storeOperatorCard,
  },
});
