Rails.application.routes.draw do
  # direct to authentication controller methods
  post '/auth/login', to: 'authentication#login'
  get '/auth/verify', to: 'authentication#verify'

  # nested routes??
  # https://git.generalassemb.ly/sei-nyc-loon/rails-controllers-lesson/blob/master/nestedAssociations.md
  get '/users/:user_id/studios', to: 'studios#index'
  get '/studios', to: 'studios#index'

  # will I need to nest these resources??
  resources :studios, only: [:create, :update] do 
    resources :fit_classes
  end
  resources :users, only: :create
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
