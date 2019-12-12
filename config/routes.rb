Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  root to: "home#index"
  get "/selected", to: "beverages#selected", constraints: { format: "json" }
  resources :beverages, only: [:index, :update]
  resources :main_courses, only: [:index, :update]
  resources :starters, only: [:index, :update]
  resources :orders, only: [:index, :show, :create, :update]
  
  get "*path", to: "home#index", constraints: { format: "html" }
end
