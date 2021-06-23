class StudiosController < ApplicationController
  before_action :set_studio, only: [:show, :update]
  before_action :authorize_request, only: [:create, :update]

  
  # GET /studios
  def index
    @studios = Studio.all
    render json: @studios
  end

  # GET /studios/1
  def show
    render json: @studio
  end

  # does studios need to be nested in user
  # POST /users/:user_id/studios
  def create
    @studio = Studio.new(studio_params)

    if @studio.save
      render json: @studio, status: :created, location: @studio
    else
      render json: @studio.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /users/:user_id/studios/1
  def update
    if @studio.update(studio_params)
      render json: @studio
    else
      render json: @studio.errors, status: :unprocessable_entity
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_studio
      @studio = Studio.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def studio_params
      params.require(:studio).permit(:business_name, :location, :blurb, :format, :image_url, :user_id)
    end
end
