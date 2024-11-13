# app.rb
require 'sinatra'

# Configura Sinatra para servir archivos estáticos
set :public_folder, 'public'

# Ruta principal
get '/' do
  # Renderiza un archivo HTML desde la carpeta 'public'
  send_file File.join(settings.public_folder, 'index.html')
end