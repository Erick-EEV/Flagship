Rails.application.routes.draw do
  resources :direct_messages
  resources :messages
  resources :chatrooms
  resources :members
  resources :servers
  resources :buds
  resources :users
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
