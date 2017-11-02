Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root                            to: 'home#index'
  get 'auth/:provider/callback',  to: 'sessions#create'
  get 'logout',                   to: 'sessions#destroy'
  get 'physicians',               to: 'physicians#index'

  namespace :api do
    resources :appointments, only: [:create, :index]
    resources :physicians, only: [:create, :index]
  end

end
