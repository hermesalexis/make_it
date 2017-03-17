require 'sinatra'
require 'make_todo'

get '/' do
  Tarea.create("Asistir al gimnasio")
  
  "#{Tarea.all}"

end