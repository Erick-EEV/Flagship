class AuthController < ApplicationController

    def issue_token(payload)
        
    end
    
    def create
        user = User.create(username: params[:username], password: params[:password])
        
    end
end