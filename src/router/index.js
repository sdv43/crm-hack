import Vue from 'vue';
import VueRouter from 'vue-router';
import OperatorCard from '@/views/OperatorCard.vue';
import ScriptEditor from '@/views/ScriptEditor.vue';
import Home from '@/views/Home.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/operator-card',
    name: 'OperatorCard',
    component: OperatorCard,
  },
  {
    path: '/script-editor',
    name: 'ScriptEditor',
    component: ScriptEditor,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
