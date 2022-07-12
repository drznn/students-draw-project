import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import Login from  '@/views/Login.vue';
import Publicacao from '@/views/Publicacao.vue';
import Usuario from '@/views/usuario/Usuario.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/entrar',
      name:'login',
      component: Login
    },
    {
      path:'/publicacao/id',
      name:'publicacao',
      component: Publicacao,
      props: true
    },
    {
      path:'/usuario/',
      name:'usuario',
      component: Usuario
    }
  ]
})

export default router
