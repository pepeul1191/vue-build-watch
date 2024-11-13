<script>
  import '../assets/stylesheets/styles.css';

  export default {
    name: 'Home',
    mounted() {
      document.title = 'Página Principal - Mi Sitio Web'; // Cambia el título cuando el componente se monta
    }
  };
</script>

<template>
    <!-- Carrusel (Slider) -->
    <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
    <div class="carousel-indicators">
      <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active"
        aria-current="true" aria-label="Slide 1"></button>
      <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"
        aria-label="Slide 2"></button>
      <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2"
        aria-label="Slide 3"></button>
    </div>
    <div class="carousel-inner">
      <div class="carousel-item active">
        <img src="https://via.placeholder.com/1200x500?text=Imagen+1" class="d-block w-100" alt="...">
        <div class="carousel-caption d-none d-md-block">
          <h5>Bienvenido a nuestro Sitio</h5>
          <p>Explora nuestros servicios y características.</p>
        </div>
      </div>
      <div class="carousel-item">
        <img src="https://via.placeholder.com/1200x500?text=Imagen+2" class="d-block w-100" alt="...">
        <div class="carousel-caption d-none d-md-block">
          <h5>Innovación al Alcance de Todos</h5>
          <p>Soluciones eficientes para tu negocio.</p>
        </div>
      </div>
      <div class="carousel-item">
        <img src="https://via.placeholder.com/1200x500?text=Imagen+3" class="d-block w-100" alt="...">
        <div class="carousel-caption d-none d-md-block">
          <h5>Calidad y Compromiso</h5>
          <p>Brindamos siempre lo mejor para nuestros clientes.</p>
        </div>
      </div>
    </div>
    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>

    <!-- Sección de Características -->
  <section id="features" class="py-5 bg-light">
    <div class="container">
      <h2 class="text-center mb-4">Características</h2>
      <div class="row row-cols-1 row-cols-md-3 g-4">
        <!-- Característica 1 -->
        <div class="col">
          <div class="card shadow-sm border-light">
            <div class="card-body text-center">
              <div class="feature-icon mb-3">
                <i class="bi bi-rocket"></i>
              </div>
              <h5 class="card-title">Innovación</h5>
              <p class="card-text">Ofrecemos soluciones innovadoras para facilitar tu trabajo diario.</p>
            </div>
          </div>
        </div>
        <!-- Característica 2 -->
        <div class="col">
          <div class="card shadow-sm border-light">
            <div class="card-body text-center">
              <div class="feature-icon mb-3">
                <i class="bi bi-gear"></i>
              </div>
              <h5 class="card-title">Eficiencia</h5>
              <p class="card-text">Nuestras herramientas están diseñadas para ser eficientes y fáciles de usar.</p>
            </div>
          </div>
        </div>
        <!-- Característica 3 -->
        <div class="col">
          <div class="card shadow-sm border-light">
            <div class="card-body text-center">
              <div class="feature-icon mb-3">
                <i class="bi bi-shield-lock"></i>
              </div>
              <h5 class="card-title">Seguridad</h5>
              <p class="card-text">Priorizamos la seguridad de tus datos y la confidencialidad de tu información.</p>
              <router-link to="/about">Ir a la página de Acerca de</router-link>
              <font-awesome-icon icon="trash-alt" class="custom-icon"/> Eliminar
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- Sección de Servicios -->
  <section id="services" class="py-5">
    <div class="container">
      <h2 class="section-title">Nuestros Servicios</h2>
      <div class="row">
        <div class="col-md-4">
          <div class="card">
            <img src="https://via.placeholder.com/350x200" class="card-img-top" alt="Servicio 1">
            <div class="card-body">
              <h5 class="card-title">Servicio 1</h5>
              <p class="card-text">Descripción breve del servicio 1 que ofrecemos.</p>
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="card">
            <img src="https://via.placeholder.com/350x200" class="card-img-top" alt="Servicio 2">
            <div class="card-body">
              <h5 class="card-title">Servicio 2</h5>
              <p class="card-text">Descripción breve del servicio 2 que ofrecemos.</p>
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="card">
            <img src="https://via.placeholder.com/350x200" class="card-img-top" alt="Servicio 3">
            <div class="card-body">
              <h5 class="card-title">Servicio 3</h5>
              <p class="card-text">Descripción breve del servicio 3 que ofrecemos.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
  .custom-icon {
    color: #343434;  /* Cambia el color */
  }
</style>