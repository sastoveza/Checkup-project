class DoctorSerializer < ActiveModel::Serializer
  attributes :id, :name, :specialties, :insurance, :city, :state, :zip, :image_url, :bio
end