import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';  // Importa las funciones adecuadas
import WebLayout from '../layouts/WebLayout.vue';
import 'bootstrap/dist/css/bootstrap.min.css';
// Importa los componentes que deseas renderizar
import HomePage from '@/pages/HomePage.vue';
import AboutPage from '@/pages/AboutPage.vue';
import ContactPage from '@/pages/ContactPage.vue';
import FeaturesPage from '@/pages/FeaturesPage.vue';
// Importa FontAwesome y los íconos que necesitas
import { library } from '@fortawesome/fontawesome-svg-core';
import { faThumbsUp, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

// Agrega los íconos a la biblioteca de FontAwesome
library.add(faThumbsUp, faTrashAlt);
 
// Define las rutas
const routes = [
  { path: '/',name: 'home', component: HomePage },
  { path: '/about',name: 'about', component: AboutPage },
  { path: '/features',name: 'features', component: FeaturesPage },
  { path: '/contact',name: 'contact', component: ContactPage },
];

// Crea la instancia del router con createRouter
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),  // Usamos createWebHistory para el enrutamiento sin recargar
  routes
});

// Crea la aplicación y usa el router
createApp(WebLayout)
  .component('font-awesome-icon', FontAwesomeIcon)
  .use(router)  // Usa el router
  .mount('#app');  // Monta la aplicación en el elemento con id 'app'
