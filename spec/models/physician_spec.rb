require 'rails_helper'
RSpec.describe 'physician' do

  context 'when the physician is created' do
    before(:each) do
      @user = FactoryGirl.create(:user)
      @physician = Physician.create!(first_name: "Em", last_name: "Schron", office_name: "Launch", specialty: "General", address: "100 Blah St.", city: "Boston", state: "MA")
    end

    it 'has a first name' do
      expect(@physician.first_name).to eq 'Em'
    end
    it 'has a last name' do
      expect(@physician.last_name).to eq 'Schron'
    end
    it 'has an office name' do
      expect(@physician.office_name).to eq 'Launch'
    end
    it 'has a specialty' do
      expect(@physician.specialty).to eq 'General'
    end
    it 'has an address' do
      expect(@physician.address).to eq '100 Blah St.'
    end
    it 'has a city' do
      expect(@physician.city).to eq 'Boston'
    end
  end

  context 'creating physician with missing information' do
    it 'is missing name' do
      physician = Physician.new(last_name: "Schron", office_name: "Launch", specialty: "General", address: "100 Blah St.", city: "Boston", state: "MA")
      physician.save

      expect(Physician.all.length).to eq(0)
    end

    it 'is missing an office_name' do
      physician = Physician.new(first_name: "Em", last_name: "Schron", specialty: "General", address: "100 Blah St.", city: "Boston", state: "MA")
      physician.save

      expect(Physician.all.length).to eq(0)
    end

    it 'is missing a specialty' do
      physician = Physician.new(first_name: "Em", last_name: "Schron", office_name: "Launch", address: "100 Blah St.", city: "Boston", state: "MA")
      physician.save

      expect(Physician.all.length).to eq(0)
    end
  end
end
