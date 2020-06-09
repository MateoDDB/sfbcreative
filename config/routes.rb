Rails.application.routes.draw do
  devise_for :users
  root to: 'pages#home'
  resources :newsletters
  resources :contacts
  get "pages/clients"
  get "pages/services"
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
