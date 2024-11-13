import './assets/main.css'

import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';  // Importa las funciones adecuadas
import WebLayout from './layouts/WebLayout.vue';

// Importa los componentes que deseas renderizar
import Home from '@/pages/HomePage.vue';
import About from '@/pages/AboutPage.vue';

// Define las rutas
const routes = [
  {
    path: '/',          // Ruta principal
    name: 'home',
    component: Home     // Componente que se muestra en esta ruta
  },
  {
    path: '/about',     // Ruta "/about"
    name: 'about',
    component: About    // Componente que se muestra en esta ruta
  }
];

// Crea la instancia del router con createRouter
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),  // Usamos createWebHistory para el enrutamiento sin recargar
  routes
});

// Crea la aplicación y usa el router
createApp(WebLayout)
  .use(router)  // Usa el router
  .mount('#app');  // Monta la aplicación en el elemento con id 'app'
