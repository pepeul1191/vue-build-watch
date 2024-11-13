<script>
  export default {
    name: 'About',
    mounted() {
      document.title = 'Caraterísticas'; // Cambia el título cuando el componente se monta
    }
  };
</script>

<template>
    <!-- Sección de Características -->
    <section id="features" class="py-5">
    <div class="container">
      <h2 class="section-title">Características</h2>
      <div class="row row-cols-1 row-cols-md-4 g-4">
        <!-- Característica 1 -->
        <div class="col">
          <div class="card shadow-sm">
            <div class="card-body">
              <div class="feature-icon mb-3">
                <i class="bi bi-rocket"></i>
              </div>
              <h5 class="card-title">Innovación</h5>
              <p class="card-text">Soluciones innovadoras para facilitar tu trabajo diario.</p>
            </div>
          </div>
        </div>
        <!-- Característica 2 -->
        <div class="col">
          <div class="card shadow-sm">
            <div class="card-body">
              <div class="feature-icon mb-3">
                <i class="bi bi-gear"></i>
              </div>
              <h5 class="card-title">Eficiencia</h5>
              <p class="card-text">Herramientas diseñadas para mejorar tu productividad.</p>
            </div>
          </div>
        </div>
        <!-- Característica 3 -->
        <div class="col">
          <div class="card shadow-sm">
            <div class="card-body">
              <div class="feature-icon mb-3">
                <i class="bi bi-shield-lock"></i>
              </div>
              <h5 class="card-title">Seguridad</h5>
              <p class="card-text">Priorizamos la seguridad y privacidad de tus datos.</p>
            </div>
          </div>
        </div>
        <!-- Característica 4 -->
        <div class="col">
          <div class="card shadow-sm">
            <div class="card-body">
              <div class="feature-icon mb-3">
                <i class="bi bi-heart"></i>
              </div>
              <h5 class="card-title">Atención Personalizada</h5>
              <p class="card-text">Te ofrecemos un servicio de atención 24/7 para ti.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped></style>