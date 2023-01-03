import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/home.vue'
import Users from '../views/users.vue'
import AddUsers from '../views/add-users.vue'
import Settings from '../views/settings.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/users',
      name: 'users',
      component: Users
    },
    {
      path: '/add-users',
      name: 'add-users',
      component: AddUsers
    },
    {
      path: '/settings',
      name: 'settings',
      component: Settings
    },
  ]
})

export default router
