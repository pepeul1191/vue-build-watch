import chokidar from 'chokidar';
import { exec } from 'child_process';
import { fileURLToPath } from 'url';
import path from 'path';

// Usar import.meta.url para obtener el directorio de ejecución
const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Ruta de la carpeta que deseas observar (por ejemplo, 'src/')
const directoryToWatch = path.join(__dirname, 'src');

// Iniciar el observador
const watcher = chokidar.watch(directoryToWatch, {
  ignored: /node_modules/, // Opcional: Ignorar cambios en node_modules
  persistent: true,         // Mantener el observador en ejecución
  ignoreInitial: true,      // Ignorar el primer evento cuando se inicia el observador
});

// Escuchar eventos de cambios
watcher
  .on('change', (filePath) => {
    console.log(`Archivo modificado: ${filePath}`);
    // Ejecutar el comando npm run build cuando un archivo cambie
    exec('npm run build', (err, stdout, stderr) => {
      if (err) {
        console.error(`Error al ejecutar el build: ${err}`);
        return;
      }
      // Imprimir la salida estándar y los errores (si hay)
      console.log(stdout);
      console.error(stderr);
    });
  })
  .on('add', (filePath) => {
    console.log(`Archivo añadido: ${filePath}`);
  })
  .on('unlink', (filePath) => {
    console.log(`Archivo eliminado: ${filePath}`);
  })
  .on('error', (error) => {
    console.error(`Error en la observación: ${error}`);
  });

console.log(`Observando cambios en la carpeta: ${directoryToWatch}`);
