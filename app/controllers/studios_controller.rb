class StudiosController < ApplicationController
  before_action :set_studio, only: :show
  before_action :authorize_request, only: [:create, :update, :user_studio]


  # GET /studios
  def index
    @studios = Studio.all
    render json: @studios
  end

  # GET /studios/1
  def show
    render json: @studio, include: :fit_classes
  end


  # POST /studios
  def create
    @studio = Studio.new(studio_params)

    # assign association to the current_user
    @studio.user = @current_user

    if @studio.save
      render json: @studio, status: :created
    else
      render json: @studio.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /studios/1
  def update
    if @current_user.studio.update(studio_params)
      render json: @studio
    else
      render json: @studio.errors, status: :unprocessable_entity
    end
  end

  # custom  method to  retrieve user's studio and the studio's classes
  # GET /users/studios
  def user_studio 
    render json: @current_user.studio, include: :fit_classes
  end


  private
    # Use callbacks to share common setup or constraints between actions.
    def set_studio
      @studio = Studio.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def studio_params
      params.require(:studio).permit(:business_name, :location, :blurb, :format, :image_url)
    end
end
