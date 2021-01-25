class AuthController < ApplicationController

    def issue_token(payload)
        JWT.encode(payload, Rails.application.secrets.secret_key_base, "HS256")
    end
    
    def create
        user = User.create(username: params[:username], password: params[:password])
        render json: user
    end

    def login
        @current_user = User.find_by(username: params[:username])
        render json: @current_user, include: :members
    end

    def search
        @server = Server.find_by(name: params[:name])
        render json: @server, include: :members
                                # include: [:members => {:include => {:server => {:include => {:chatrooms => {:include => :messages}}}}}]
        # [:chatrooms => {:include => :messages}
    end

    def addserver
        @member = Member.create(server_id: params[:server_id], user_id: params[:user_id], admin: [:admin])
        render json: @member
    end


    def getserver
        @member = Member.find_by(user_id: params[:user_id], server_id: params[:server_id])
        render json: @member
    end

end