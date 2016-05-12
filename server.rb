require 'sinatra'
require 'json'

get '/create_a_pie.html' do
  content_type :json
  # something goes here
end

get '/look_for_orders.html' do
  content_type :json
end
