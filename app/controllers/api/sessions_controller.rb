class Api::SessionsController < ApplicationController 
    skip_before_action :verify_authenticity_token

    def create 
        @user = User.find_by_credentials(params[:user][:email], params[:user][:password])
         
        if @user
            log_in!(@user)
            render 'api/users/show'; 
        else
            render json: ['Sorry, you entered an incorrect email or password.'], status: 401
        end
    end

    def destroy 


        if current_user.nil?
            render json: ['There is no current user to log out'], status: 401
        else
            log_out! 
            render json: {}
        end
    end
end