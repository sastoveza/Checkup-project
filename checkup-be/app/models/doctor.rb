class Doctor < ApplicationRecord
  has_many :users, through: :appointments
  has_many :favorites
  has_many :appointments
  geocoded_by :city, latitude: :lat, longiturde: :lon

  def get_address
  	Geocoder.address(self.to_coordinates)
  end
end
