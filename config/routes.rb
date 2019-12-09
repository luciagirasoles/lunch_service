Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  root to: "home#index"
  resources :beverages, only: [:index, :update]
  resources :main_courses, only: [:index, :update]
  resources :starters, only: [:index, :update]

  get "*path", to: "home#index", constraints: { format: "html" }
end
