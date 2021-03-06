Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root                            to: 'home#index'
  get 'auth/:provider/callback',  to: 'sessions#create'
  get 'logout',                   to: 'sessions#destroy'
  get 'physicians',               to: 'physicians#index'
  resources :appointments, only: [:show]

  namespace :api do
    namespace :v1 do
      resources :appointments, only: [:create, :index, :update, :show, :destroy]
      resources :physicians, only: [:create, :index]
    end
  end

end
