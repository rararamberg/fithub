Rails.application.routes.draw do
  # direct to authentication method
  post '/auth/login', to: 'authentication#login'
  get '/auth/verify', to: 'authentication#verify'
  # will I need to nest these resources??
  resources :fit_classes
  resources :studios
  resources :users
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
