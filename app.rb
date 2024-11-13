# app.rb
require 'sinatra'

# Configura Sinatra para servir archivos estáticos
set :public_folder, 'public'

# Ruta principal
['/', '/about', '/features', '/contact'].each do |route|
  get route do
    erb :home
  end
end