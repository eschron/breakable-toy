class Physician < ApplicationRecord
  validates :first_name, presence: true
  validates :last_name, presence: true
  validates :office_name, presence: true
  validates :specialty, presence: true
  validates :address, presence: true
  validates :city, presence: true
  validates :state, presence: true
  #
  # has_many :appointments
  # has_many :users, through: :appointments
  #
  # has_many :physician_lists
  #

  has_many :appointments
  has_many :physicians_with_appointments, through: :appointments, source: :user

  has_many :physician_lists
  has_many :users, through: :physician_lists
end
