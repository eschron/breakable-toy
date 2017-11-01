class Api::AppointmentsController < ApplicationController
  skip_before_action :verify_authenticity_token, only: [:create]

  def index
    @appointments = Appointment.all.order(time: :asc)
    render json: @appointments
  end

  def create
    @reason = params[:reason]
    @date = params[:date]
    @physician = Physician.find_by first_name: params[:physicianName]
    @appointment = Appointment.new(reason: @reason, time: @date, physician: @physician, user: current_user)

    respond_to do |format|
      if @appointment.save
        redirect_to root_path
        format.html { redirect_to root_path, notice: 'Appointment was successfully created.' }
        format.json { render :show, status: :created, location: @appointment }
        render_appointments
      else
        format.html { render :new }
        format.json { render json: @appointment.errors, status: :unprocessable_entity }
      end
    end
  end

  private
  # Use callbacks to share common setup or constraints between actions.
  # See above ---> before_action :set_appointment, only: [:show, :edit, :update, :destroy]
  def find_appointment
    @appointment = Appointment.find(params[:id])
  end

  def render_appointments
    render json: { appointments: Appointment.all.order(time: :desc) }
  end

  # Never trust parameters from the scary internet, only allow the white list through.
  def appointment_params
    params.require(:appointment).permit(:reason, :date, :physicianName)
  end
end
