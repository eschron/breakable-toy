class Physician < ApplicationRecord
  validates :first_name, presence: true
  validates :last_name, presence: true
  validates :office_name, presence: true
  validates :specialty, presence: true
  validates :address, presence: true
  validates :city, presence: true
  validates :state, presence: true

  has_many :appointments
  has_many :users, through: :appointments
end
