require 'sinatra'
require 'json'

get '/create_a_pie.json' do
  content_type :json
  '{ "Toppings": [
    {"Pepporoni": ["1/2 Pizza", "Whole Pizza"]},
    {"Sausage": ["1/2 Pizza", "Whole Pizza"]},
    {"Mushroom": ["1/2 Pizza", "Whole Pizza"]},
    {"Bacon": ["1/2 Pizza", "Whole Pizza"]}
    ]}'.to_json
end

get '/look_for_orders.json' do
  content_type :json
end
