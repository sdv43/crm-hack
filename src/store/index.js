import Vue from 'vue';
import Vuex from 'vuex';
import storeClient from '@/store/modules/client';
import storeScript from '@/store/modules/script';
import storeOperatorCard from '@/store/modules/operatorCard';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    client: storeClient,
    script: storeScript,
    operatorCard: storeOperatorCard,
  },
});
