class User < ApplicationRecord
  has_many :doctors, through: :appointments
  has_many :appointments
  has_secure_password
end
