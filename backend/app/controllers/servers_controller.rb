class ServersController < ApplicationController
  before_action :set_server, only: [:show, :update, :destroy]

  # GET /servers
  def index
    @servers = Server.all
    render json: @servers, include: [:chatrooms => {:include => :messages}]
  end

  # GET /servers/1
  def show
    render json: @server, include: [:chatrooms => {:include => :messages}]
  end

  # POST /servers
  def create
    @server = Server.new(server_params)

    if @server.save
      render json: @server, include: [:chatrooms => {:include => :messages}]
    else
      render json: @server.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /servers/1
  def update
    if @server.update(server_params)
      render json: @server
    else
      render json: @server.errors, status: :unprocessable_entity
    end
  end

  # DELETE /servers/1
  def destroy
    @server.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_server
      @server = Server.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def server_params
      params.require(:server).permit(:name, :user_id, :joined)
    end
end
