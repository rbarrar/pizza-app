require 'sinatra'
require 'json'

get '/create_a_pie.json' do
  content_type :json
  { :key1 => 'value1', :key2 => 'value2' }.to_json
end

get '/look_for_orders.json' do
  content_type :json
end
