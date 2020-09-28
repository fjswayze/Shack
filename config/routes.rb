Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
    root to: "static_pages#root"
    namespace :api, default: {format: :json} do 
      resources :users, only: [:create, :index, :update] do 
        resources :channels, only:[:index]
      end
      resources :channel_memberships, only:[:create, :destroy]
      resources :channels, only: [:create, :index, :show, :destroy, :update]
      resource :session, only: [:create, :destroy]
      resources :user_channel_joins, only: [:create]
    end
end
