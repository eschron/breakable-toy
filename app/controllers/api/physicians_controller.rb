class Api::PhysiciansController < ApplicationController
  skip_before_action :verify_authenticity_token, only: [:create]

  def index
    @physicians = Physician.all
    render json: @physicians
  end

  def create
    @first_name = params[:first_name]
    @last_name = params[:last_name]
    @office_name = params[:office_name]
    @specialty = params[:specialty]
    @address = params[:address]
    @city = params[:city]
    @state = params[:state]
    @phone_number = params[:phone_number]

    @physician = Physician.new(first_name: @first_name, last_name: @last_name, office_name: @office_name, specialty: @specialty, address: @address, city: @city, state: @state, phone_number: @phone_number)

    if @physician.save

    else

    end

  end
end
