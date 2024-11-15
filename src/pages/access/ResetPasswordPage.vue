<script>
  export default {
    name: 'ResetPasswordPage',
    mounted() {
      document.title = 'Cambiar Contraseña'; // Cambia el título cuando el componente se monta
    }
  };
</script>

<template>
  <div class="reset-container">
    <div class="card shadow-sm">
      <div class="card-body">
        <h3 class="card-title text-center">Recuperar Contraseña</h3>
        <p class="text-center">Introduce tu correo electrónico y te enviaremos un enlace para restablecer tu contraseña.</p>
        
        <form action="/reset-password" method="POST">
          <div class="mb-3">
            <label for="email" class="form-label">Correo electrónico</label>
            <input type="email" class="form-control" id="email" name="email" placeholder="Introduce tu correo electrónico" required>
          </div>
          
          <button type="submit" class="btn btn-primary w-100">Enviar enlace</button>
        </form>

        <div class="mt-3 text-center">
          <router-link class="nav-link" to="/sign-in">Volver al Iniciar Sesión</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
  .reset-container {
    max-width: 400px;
    margin: 50px auto;
  }
</style>