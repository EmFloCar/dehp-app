import Vue from 'vue'
import VueRouter from 'vue-router'
import inicio from '../views/inicio.vue'

Vue.use(VueRouter)

const routes = [
  { path: '/', name: 'inicio', component: inicio,
    children: [
      { path: 'palabras', name: 'palabras', component: () => import('../views/palabras.vue')},
      { path: 'tabla-palabras', name: 'tabla-palabras', component: () => import('../views/Tabla-palabras.vue')},
      { path: 'editar-palabra/:id', name: 'editar-palabra', component: () => import('../views/EditarPalabra.vue')},      
      { path: 'refranes', name: 'refranes', component: () => import('../views/refranes.vue')},
      { path: 'tabla-refranes', name: 'tabla-refranes', component: () => import('../views/Tabla-refranes.vue')},
      { path: 'editar-refran/:id', name: 'editar-refran', component: () => import('../views/EditarRefran.vue')}
    ]},
  
]

const router = new VueRouter({
  routes
})

export default router
