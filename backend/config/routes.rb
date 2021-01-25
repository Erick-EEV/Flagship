Rails.application.routes.draw do
  resources :direct_messages
  resources :messages
  resources :chatrooms
  resources :members
  resources :servers
  resources :buds
  resources :users

  post '/signUp', to: 'auth#create'
  post '/login', to: 'auth#login'
  post '/search', to: 'auth#search'
  post '/addserver', to: 'auth#addserver'
  post '/getserver', to: 'auth#getserver'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
