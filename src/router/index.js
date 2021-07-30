import Vue from 'vue'
import VueRouter from 'vue-router'
import inicio from '../views/inicio.vue'
import crud from '../views/CRUD/Crud.vue'

Vue.use(VueRouter)

const routes = [
  { path: '/inicio', name: 'inicio', component: inicio,
    children: [
      { path: 'buscar', name: 'buscar', component: () => import('../views/SearchAndView/Search.vue') },
      { path: 'palabra/:id', name: 'palabra', component: () => import ('../views/SearchAndView/Palabra.vue')},
      { path: 'refran/:id', name: 'refran', component: () => import ('../views/SearchAndView/Refran.vue')}
    ]},
  { path: '/crud', name: 'crud', component: crud,
    children: [
      { path: 'palabras', name: 'palabras', component: () => import('../views/CRUD/palabras.vue')},
      { path: 'tabla-palabras', name: 'tabla-palabras', component: () => import('../views/CRUD/Tabla-palabras.vue')},
      { path: 'editar-palabra/:id', name: 'editar-palabra', component: () => import('../views/CRUD/EditarPalabra.vue')},      
      { path: 'refranes', name: 'refranes', component: () => import('../views/CRUD/refranes.vue')},
      { path: 'tabla-refranes', name: 'tabla-refranes', component: () => import('../views/CRUD/Tabla-refranes.vue')},
      { path: 'editar-refran/:id', name: 'editar-refran', component: () => import('../views/CRUD/EditarRefran.vue')}
    ]},
  
]

const router = new VueRouter({
  routes
})

export default router
