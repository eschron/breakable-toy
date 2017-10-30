require 'rails_helper'
RSpec.describe 'appointment' do

  context 'when an appointment is created' do
    before(:each) do
      @user = FactoryGirl.create(:user)
      @physician = Physician.create!(first_name: "Em", last_name: "Schron", office_name: "Launch", specialty: "General", address: "100 Blah St.", city: "Boston", state: "MA")
    end

    it 'has a reason' do
      expect(Appointment.new(reason: "Yearly check up", time: "2018-07-01 10:05:00", visited: false, user: @user, physician: @physician).reason).to eq("Yearly check up")
    end
    it 'has a user id' do
      expect(Appointment.new(reason: "Yearly check up", time: "2018-07-01 10:05:00", visited: false, user: @user, physician: @physician).user).to eq(@user)
    end
    it 'has a truck id' do
      expect(Appointment.new(reason: "Yearly check up", time: "2018-07-01 10:05:00", visited: false, user: @user, physician: @physician).physician).to eq(@physician)
    end
  end

  context 'creating review with missing information' do
    it 'is missing a time' do
      user = FactoryGirl.create(:user)
      physician = Physician.create!(first_name: "Em", last_name: "Schron", office_name: "Launch", specialty: "General", address: "100 Blah St.", city: "Boston", state: "MA")
      Appointment.new(reason: "Yearly check up", visited: false, user: @user, physician: @physician)

      expect(Appointment.all.length).to eq(0)
    end
  end

end
