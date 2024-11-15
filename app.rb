# app.rb
require 'sinatra'

# Configura Sinatra para servir archivos estáticos
set :public_folder, 'public'

# Ruta principal
['/', '/about', '/features', '/contact'].each do |route|
  get route do
    erb :index
  end
end

['/sign-in', '/sign-up', '/reset-password'].each do |route|
  get route do
    erb :access
  end
end

not_found do
  erb :not_found
end