import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import CreateBookView from '../views/books/Create.vue'
import ListEmprestimos from '../views/user/ListEmprestimos.vue'
import LoginForm from '@/views/auth/LoginForm.vue'
import Create from '../views/user/Create.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'auth',
      component: LoginForm
    },
    {
      path: '/user/create',
      name: 'create-user',
      component: Create
    },
    {
      path: '/home',
      name: 'home',
      component: HomeView
    },
    {
      path: '/books/create',
      name: 'create',
      component:CreateBookView
    },
    {
      path: '/emprestimos',
      name: 'list-emprestimos',
      component:ListEmprestimos
    },
  ]
})

export default router
