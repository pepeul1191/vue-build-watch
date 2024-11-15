import { createApp } from 'vue';
import ErrorLayout from '../layouts/ErrorLayout.vue';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/stylesheets/error.css';
import 'font-awesome/css/font-awesome.css';
// Crea la aplicación y usa el router
createApp(ErrorLayout)
  .use(router)  // Usa el router
  .mount('#app');  // Monta la aplicación en el elemento con id 'app'
