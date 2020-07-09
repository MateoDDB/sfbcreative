Rails.application.routes.draw do
  mount RailsAdmin::Engine => '/admin', as: 'rails_admin'
  devise_for :users
  root to: 'pages#home'
  resources :newsletters
  resources :contacts
  resources :jobs
  get "pages/clients"
  get "pages/services"
  get "pages/about"
  get "pages/offering"
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
