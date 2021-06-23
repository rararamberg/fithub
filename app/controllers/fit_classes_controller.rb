class FitClassesController < ApplicationController
  before_action :set_fit_class, only: [ :update, :destroy]
  before_action :authorize_request, only: [:create, :update, :destroy]

  # POST /fit_classes
  def create
    @fit_class = FitClass.new(fit_class_params)
    @fit_class.studio = @current_user.studio

    if @fit_class.save
      render json: @fit_class, status: :created, location: @fit_class
    else
      render json: @fit_class.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /fit_classes/1
  def update
    if @fit_class.update(fit_class_params)
      render json: @fit_class
    else
      render json: @fit_class.errors, status: :unprocessable_entity
    end
  end

  # DELETE /fit_classes/1
  def destroy
    @fit_class.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_fit_class
      @fit_class = FitClass.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def fit_class_params
      params.require(:fit_class).permit(:class_name, :schedule_time, :studio_id)
    end
end
