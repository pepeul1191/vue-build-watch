import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';  // Importa las funciones adecuadas
import AccessLayout from '../layouts/AccessLayout.vue';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/stylesheets/styles.css';
import '../assets/stylesheets/access.css';
// Importa los componentes que deseas renderizar
import SignInPage from '@/pages/access/SignInPage.vue';
import SignUpPage from '@/pages/access/SignUpPage.vue';
import ResetPasswordPage from '@/pages/access/ResetPasswordPage.vue';
// Importa FontAwesome y los íconos que necesitas
import { library } from '@fortawesome/fontawesome-svg-core';
import { faThumbsUp, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

// Agrega los íconos a la biblioteca de FontAwesome
library.add(faThumbsUp, faTrashAlt);
 
// Define las rutas
const routes = [ 
  { path: '/sign-in',name: 'sign-in', component: SignInPage },
  { path: '/sign-up',name: 'sign-up', component: SignUpPage },
  { path: '/reset-password',name: 'reset-password', component: ResetPasswordPage },
];

// Crea la instancia del router con createRouter
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),  // Usamos createWebHistory para el enrutamiento sin recargar
  routes
});

// Crea la aplicación y usa el router
createApp(AccessLayout)
  .component('font-awesome-icon', FontAwesomeIcon)
  .use(router)  // Usa el router
  .mount('#app');  // Monta la aplicación en el elemento con id 'app'
