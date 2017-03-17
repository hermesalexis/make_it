require 'sinatra'

=begin
get '/' do
  "¡Hola Mundo!"	
end
=end

=begin
get '/about' do
  "A little about me."
end
=end

=begin
#uso de parametros en la url
get '/hello/:name/:city' do
  "Hey there #{params[:name]} form #{params[:city]}"
end
=end

#Error not found custom message
not_found do
  halt 404, 'page not found'
end
get '/form' do
 erb:form
end

post '/form' do
  "you said '#{params[:message]}'"
end

get '/secret' do
  erb:secret
end

post '/secret' do
  params[:secret].reverse
end

get '/decrypt/:secret' do
  "message decrypt #{params[:secret].reverse}"
end