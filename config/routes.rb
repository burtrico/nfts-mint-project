Rails.application.routes.draw do
  namespace :api do 
    resources :nfts, only: [:index, :show, :create, :update, :destroy]
    resources :nft_contracts, only: [:index, :show, :create, :update, :destroy]
    resources :users
    # Routing logic: fallback requests for React Router.
    # Leave this here to help deploy your app later!
    get "/me", to: "users#show"
    patch "/me", to: "users#update"
    post "/signup", to: "users#create"
    post "/login", to: "sessions#create"
    delete "/logout", to: "sessions#destroy"
    
    get "/nfts", to: "nfts#show"
    post "/nfts", to: "nfts#create"

    get "/nft_contracts", to: "nft_contracts#show"
    post "/nft_contracts", to: "nft_contracts#create"
    delete "/nft_contracts", to: "nft_contracts#delete"

    patch "/nft_contracts", to: "nft_contracts#update"


    post 'uploads/prepare'
  end

  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
