import {createWebHistory, createRouter} from "vue-router";
import Main from './pages/Main.vue'
import Rsvp from './pages/Rsvp.vue'

const routes = [{
    path: '/',
    redirect: '/home'
  },{
    path: '/home',
    component: Main
  },{
    path: '/rsvp',
    component: Rsvp
}];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;