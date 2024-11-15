<script>
  export default {
    name: 'SignInPage',
    mounted() {
      document.title = 'Ingresar al Sistema'; // Cambia el título cuando el componente se monta
    }
  };
</script>

<template>
    <div class="login-container">
    <div class="card shadow-sm">
      <div class="card-body">
        <h3 class="card-title text-center">Iniciar sesión</h3>
        
        <form action="/login" method="POST">
          <div class="mb-3">
            <label for="username" class="form-label">Usuario</label>
            <input type="text" class="form-control" id="username" name="username" placeholder="Introduce tu usuario" required>
          </div>
          
          <div class="mb-3">
            <label for="password" class="form-label">Contraseña</label>
            <input type="password" class="form-control" id="password" name="password" placeholder="Introduce tu contraseña" required>
          </div>
          
          <button type="submit" class="btn btn-primary w-100">Iniciar sesión</button>
        </form>
        
        <div class="mt-3 text-center">
          <router-link class="nav-link" to="/sign-up">¿No tienes cuenta? Regístrate</router-link>
          <router-link class="nav-link" to="/reset-password">¿Olvidaste tu contraseña?</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
  .login-container {
    max-width: 400px;
    margin: 50px auto;
  }
</style>