<script>
  export default {
    name: 'About',
    mounted() {
      document.title = 'Contacto'; // Cambia el título cuando el componente se monta
    }
  };
</script>

<template>
  <!-- Sección de Contacto -->
  <section id="contact" class="py-5 bg-dark text-white">
    <div class="container">
      <h2 class="section-title">Contacto</h2>
      <p>Si tienes alguna pregunta o inquietud, no dudes en ponerte en contacto con nosotros.</p>
      <form>
        <div class="mb-3">
          <label for="name" class="form-label">Nombre</label>
          <input type="text" class="form-control" id="name" required>
        </div>
        <div class="mb-3">
          <label for="email" class="form-label">Correo Electrónico</label>
          <input type="email" class="form-control" id="email" required>
        </div>
        <div class="mb-3">
          <label for="message" class="form-label">Mensaje</label>
          <textarea class="form-control" id="message" rows="3" required></textarea>
        </div>
        <button type="submit" class="btn btn-primary">Enviar</button>
      </form>
    </div>
  </section>
</template>

<style scoped></style>