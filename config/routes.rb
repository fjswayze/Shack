Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
    root to: "static_pages#root"
    namespace :api, default: {format: :json} do 
      resources :users, only: [:create, :index, :update] do 
        resources :channels, only:[:index]
      end
      resources :channel_memberships, only:[:create, :destroy]
      resources :channels, only: [:create, :index, :show, :destroy, :update] do 
        resources :messages, only:[:index]
      end

      get 'channel_memberships/:channel_id/:user_id/', to: 'channel_memberships#hack_destroy'



      resource :session, only: [:create, :destroy]
      resources :user_channel_joins, only: [:create]
      resources :messages, only: [:create, :destroy]
     mount ActionCable.server, at: '/cable'
    end
end
