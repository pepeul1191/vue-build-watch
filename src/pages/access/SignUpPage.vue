<script>
  export default {
    name: 'SignUpPage',
    mounted() {
      document.title = 'Crear Cuenta'; // Cambia el título cuando el componente se monta
    }
  };
</script>

<template>
  <div class="signup-container">
    <div class="card shadow-sm">
      <div class="card-body">
        <h3 class="card-title text-center">Crear Cuenta</h3>
        
        <form action="/sign-up" method="POST">
          <!-- Campo Correo electrónico -->
          <div class="mb-3">
            <label for="email" class="form-label">Correo electrónico</label>
            <input type="email" class="form-control" id="email" name="email" placeholder="Introduce tu correo electrónico" required>
          </div>
          
          <!-- Campo Nombre de usuario -->
          <div class="mb-3">
            <label for="username" class="form-label">Nombre de usuario</label>
            <input type="text" class="form-control" id="username" name="username" placeholder="Introduce tu nombre de usuario" required>
          </div>

          <!-- Campo Contraseña -->
          <div class="mb-3">
            <label for="password" class="form-label">Contraseña</label>
            <input type="password" class="form-control" id="password" name="password" placeholder="Introduce tu contraseña" required>
          </div>

          <!-- Campo Repetir Contraseña -->
          <div class="mb-3">
            <label for="confirm_password" class="form-label">Repetir contraseña</label>
            <input type="password" class="form-control" id="confirm_password" name="confirm_password" placeholder="Repite tu contraseña" required>
            <div id="passwordHelp" class="form-text">Asegúrate de que ambas contraseñas coincidan.</div>
          </div>
          
          <button type="submit" class="btn btn-primary w-100">Crear cuenta</button>
        </form>

        <div class="mt-3 text-center">
          <router-link class="nav-link" to="/sign-in">¿Ya tienes cuenta? Iniciar Sesión</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
  .signup-container {
    max-width: 400px;
    margin: 50px auto;
  }
</style>