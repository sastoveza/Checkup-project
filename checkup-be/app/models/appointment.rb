class Appointment < ApplicationRecord
  validates :doctor_id, :start_time, presence: true
  validates :doctor_id, uniqueness: { scope: :start_time }

  belongs_to :doctor

  belongs_to :user, optional: true

  # has_one :review, dependent: :destroy
end