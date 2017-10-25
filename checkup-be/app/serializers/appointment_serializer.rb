class AppointmentSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :doctor_id, :reason, :start_time
  belongs_to :doctor
  belongs_to :user
end