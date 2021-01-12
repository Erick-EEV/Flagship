class BudsController < ApplicationController
  before_action :set_bud, only: [:show, :update, :destroy]

  # GET /buds
  def index
    @buds = Bud.all

    render json: @buds
  end

  # GET /buds/1
  def show
    render json: @bud
  end

  # POST /buds
  def create
    @bud = Bud.new(bud_params)

    if @bud.save
      render json: @bud, status: :created, location: @bud
    else
      render json: @bud.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /buds/1
  def update
    if @bud.update(bud_params)
      render json: @bud
    else
      render json: @bud.errors, status: :unprocessable_entity
    end
  end

  # DELETE /buds/1
  def destroy
    @bud.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_bud
      @bud = Bud.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def bud_params
      params.require(:bud).permit(:budder_id, :buddie_id)
    end
end
