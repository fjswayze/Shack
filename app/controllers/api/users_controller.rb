class Api::UsersController < ApplicationController 

    skip_before_action :verify_authenticity_token 
    
    def create  
         
        @user = User.new(user_params) 
        if @user.save 
            log_in!(@user)
            render :show 
        else
            render json: @user.errors.full_messages, status: 422
        end
    end

    def index 
        @users = User.all
        render :index 
    end

    def update 
        
        @user = User.find(params[:id])
        
        if @user.update(user_params)
            
            render :show 
        else
            render json: @user.errors.full_messages, status: 422
        end
    end



    def user_params 
        params.require(:user).permit(:password, :email, :channel_ids)
    end
    
end