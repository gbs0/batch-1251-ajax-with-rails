Rails.application.routes.draw do
  root to: "restaurants#index"
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
  resources :restaurants, only: [:index, :show] do
  resources :reviews, only: [:new, :create]
  end
end
