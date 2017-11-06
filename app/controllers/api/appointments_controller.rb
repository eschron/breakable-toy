class Api::AppointmentsController < ApplicationController
  skip_before_action :verify_authenticity_token, only: [:create, :update]

  def index
    @appointmentsFalse = Appointment.all.where(visited: false).order(time: :asc)
    @appointmentsTrue = Appointment.all.where(visited: true).order(time: :asc)
    @appointmentsTrueCount = @appointmentsTrue.count
    render json: {appointmentsFalse: @appointmentsFalse, appointmentsTrue: @appointmentsTrue, appointmentsTrueCount: @appointmentsTrueCount}
  end

  def create
    @reason = params[:reason]
    @date = params[:date]
    @physician = Physician.find_by first_name: params[:physicianName]
    @appointment = Appointment.new(reason: @reason, time: @date, physician: @physician, user: current_user)

    if @appointment.save
      @appointments = Appointment.all.where(visited: false).order(time: :asc)
      render json: @appointments
    else
      format.html { render :new }
      format.json { render json: @appointment.errors, status: :unprocessable_entity }
    end
  end

  def update
    @appointment = Appointment.find(params[:id])
    if @appointment.user == current_user
      @appointment.update(appointment_params)
    end
    @appointments = Appointment.all.where(visited: false).order(time: :asc)
    render json: @appointments
  end

  private
  # Use callbacks to share common setup or constraints between actions.
  # See above ---> before_action :set_appointment, only: [:show, :edit, :update, :destroy]
  def find_appointment
    @appointment = Appointment.find(params[:id])
  end

  def render_appointments
    render json: { appointments: Appointment.all.order(time: :asc) }
  end

  # Never trust parameters from the scary internet, only allow the white list through.
  def appointment_params
    params.require(:appointment).permit(:reason, :date, :physicianName, :visited)
  end
end
