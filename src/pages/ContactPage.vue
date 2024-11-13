<script>
  import { Modal } from 'bootstrap';

  export default {
    name: 'About',
    mounted() {
      document.title = 'Contacto'; // Cambia el título cuando el componente se monta
    },
    data() {
      return {
        modalInstance: null // Añadimos una propiedad para almacenar la instancia del modal
      };
    },
    methods: {
      // Método para abrir el modal
      openModal() {
        if (!this.modalInstance) {
          // Si no se ha creado la instancia aún, la creamos
          this.modalInstance = new Modal(document.getElementById('exampleModal'));
        }
        this.modalInstance.show(); // Abre el modal
      },
      // Método para cerrar el modal
      closeModal() {
        if (this.modalInstance) {
          this.modalInstance.hide(); // Cierra el modal
        }
      }
    }
  };
</script>

<template>
  <div>
    <!-- Modal de Bootstrap -->
    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <!-- Encabezado del modal -->
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Título del Modal</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" @click="closeModal"></button>
          </div>

          <!-- Cuerpo del modal -->
          <div class="modal-body">
            Este es un ejemplo de un modal usando Bootstrap 5 y Vue.
          </div>

          <!-- Pie del modal -->
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal" @click="closeModal">Cerrar</button>
            <button type="button" class="btn btn-primary" @click="closeModal">Guardar cambios</button>
          </div>
        </div>
      </div>
    </div>

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

        <!-- Botón para abrir el modal -->
        <button class="btn btn-primary mt-3" @click="openModal">Abrir Modal</button>
      </div>
    </section>
  </div>
</template>

<style scoped>
/* Estilos adicionales si los necesitas */
</style>
