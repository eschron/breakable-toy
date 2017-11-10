class Api::PhysiciansController < ApplicationController
  skip_before_action :verify_authenticity_token, only: [:create, :index]

  def index
    @physicians = current_user.physicians
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
    @alreadyExists = Physician.where(first_name: @first_name).where(last_name: @last_name).where(office_name: @office_name)

    if @alreadyExists.length > 0
      PhysicianList.create!(user: current_user, physician: @alreadyExists)
      @physicians = current_user.physicians
      render json: @physicians
    else
      if @physician.save
        PhysicianList.create!(user: current_user, physician: @physician)
        @physicians = current_user.physicians
        render json: @physicians
      end
    end
  end
end
