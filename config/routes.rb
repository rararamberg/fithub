Rails.application.routes.draw do
  # === custom routes === #
  # direct to authentication controller methods
  post '/auth/login', to: 'authentication#login'
  get '/auth/verify', to: 'authentication#verify'
  # route to show only studio that belong to user
  get '/users/studios', to: 'studios#user_studio'
  

  resources :studios
  resources :fit_classes, only: [:create, :update, :destroy]
  
  resources :users, only: :create
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
