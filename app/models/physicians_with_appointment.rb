class PhysiciansWithAppointment < ApplicationRecord
  belongs_to :user
  belongs_to :physician
  has_many :appointments
end
