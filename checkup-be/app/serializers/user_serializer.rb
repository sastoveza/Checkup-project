class UserSerializer < ActiveModel::Serializer
  attributes :id, :username

  has_many :appointments
  has_many :doctors
end
