import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import NotFound from '../views/404.vue'
import Services from '../views/Services.vue'
import Nosotros from '../views/Nosotros.vue'
import Contact from '../views/Contact.vue'
import Agencias from '../views/Agencias.vue'
import Rutas from '../views/Rutas.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/404',
    name: 'NotFound',
    component: NotFound
  },
  {
    path: '/servicios',
    name: 'Services',
    component: Services
  },
  {
    path: '/nosotros',
    name: 'Nosotros',
    component: Nosotros
  },
  {
    path: '/contacto',
    name: 'Contact',
    component: Contact
  },
  {
    path: '/agencias',
    name: 'Agencias',
    component: Agencias
  },
  {
    path: '/rutas',
    name: 'Rutas',
    component: Rutas
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  scrollBehavior (to) {
    if (to.hash) {
      return {
        selector: to.hash,
        behavior: 'smooth',
        offset: { x: 0, y: 100 }
      }
    } else {
      return { x: 0, y: 0 }
    }
  }
})

export default router
