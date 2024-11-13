<script>
  export default {
    name: 'About',
    mounted() {
      document.title = 'Acerca'; // Cambia el título cuando el componente se monta
    }
  };
</script>

<template>
  <!-- Sección Acerca de -->
  <section id="about" class="py-5 bg-light">
    <div class="container">
      <h2 class="section-title">Acerca de Nosotros</h2>
      <p>Somos una empresa comprometida con la innovación y la eficiencia. Nos dedicamos a ofrecer soluciones que ayudan a nuestros clientes a optimizar sus procesos de negocio.</p>
    </div>
  </section>
</template>

<style scoped></style>