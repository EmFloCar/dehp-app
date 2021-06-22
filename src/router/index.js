import Vue from 'vue'
import VueRouter from 'vue-router'
import inicio from '../views/inicio.vue'

Vue.use(VueRouter)

const routes = [
  { path: '/', name: 'inicio', component: inicio,
    children: [
      { path: 'palabras', name: 'palabras', component: () => import('../views/palabras.vue')},
      { path: 'tabla-palabras', name: 'tabla-palabras', component: () => import('../views/Tabla-palabras.vue')},
      { path: 'refranes', name: 'refranes', component: () => import('../views/refranes.vue')}
    ]},
  
]

const router = new VueRouter({
  routes
})

export default router
