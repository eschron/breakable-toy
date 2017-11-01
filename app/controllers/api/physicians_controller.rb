class Api::PhysiciansController < ApplicationController
  skip_before_action :verify_authenticity_token, only: [:create]

  def index
    @physicians = Physician.all
    render json: @physicians
  end
end
