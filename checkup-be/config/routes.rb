Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
post '/users', to: 'users#create'
post '/login', to: 'auth#create'
get '/users/me', to: 'users#me'
post '/users/me', to: 'users#myappointments'
patch '/users/add', to: 'users#update'
delete '/users/delete', to: 'users#destroy'
get '/welcome', to: 'application#welcome'
get '/doctors', to: 'doctors#index'
get '/appoints', to: 'users#get_appointments'
post '/appointment', to: 'appointments#create'
patch '/appointments/:id', to: 'appointments#update'
get '/appoint', to: 'appointments#index'
post '/get_current_user_appointment', to: 'appointments#get_current_user_appointment'
end
