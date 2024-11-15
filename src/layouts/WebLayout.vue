<script>
  export default {
    name: 'App'
  };
</script>

<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
      <router-link class="navbar-brand" to="/">Mi Sitio</router-link> <!-- Reemplazar <a> con <router-link> -->
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ms-auto">
          <li class="nav-item">
            <router-link class="nav-link" to="/" exact>Inicio</router-link> <!-- Ruta de inicio -->
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/features">Características</router-link> <!-- Ruta a características -->
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/about">Acerca de</router-link> <!-- Ruta a acerca de -->
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/contact">Contacto</router-link> <!-- Ruta a contacto -->
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/sign-in">Acceder</a> <!-- Ruta a contacto -->
          </li>
        </ul>
      </div>
    </div>
  </nav>
  <!-- router -->
  <router-view></router-view>
  <!-- end router -->
  <footer class="bg-dark text-white text-center py-3">
    <p>&copy; 2024 Mi Sitio Web. Todos los derechos reservados.</p>
  </footer>
</template>

<style scoped></style>