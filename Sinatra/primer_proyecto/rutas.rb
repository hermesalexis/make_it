require 'sinatra'

get '/' do
  unless params[:nombre]	
   "Hola mundo #{5*5}"	
  else
 	"Hola #{params[:nombre]}"
  end
  #@nombre ="Hermes" #Variable de instancia accesible en index
  #erb :index #Hace ref a un archivo .erb alojado en la carpeta views
end

get	'/:nombre' do #Argumento obligatorio en la URL
  "Hola #{params[:nombre]}"
end

post '/nuevo/objeto' do
  "Hemos creado un nuevo objeto con el verbo #{params[:verbo]}"
end


=begin
Ejemplo de como funciona get con Query String
"/labrador/3"
"/:perro/:id"
"/?gato=persa"
params = {perro: "labrador", id: 3, gato: "persa"}
=end