class Doctor < ApplicationRecord
  has_many :users, through: :appointments
  has_many :favorites
  has_many :appointments
end
