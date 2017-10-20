class DoctorsController < ApplicationController

  def index
    @doctors = Doctor.all
    render json: @doctors

    doc_appointment = Doctor.near(params[:city]).includes(:appointments).joins(:appointments).where(appointments: {
          start_time: (Time.now)..(Time.now + 6.day),
          user_id: nil
        })
    	# doc_specs = doctor.specialties.pluck(:name)
    	# doc_specs.include?(params[:specialty])

  end

  # def show	
  # 	@doctor = Doctor.find(paramss[:id])
  # end

  # private

  # def bounds
  # 	params[:bounds]
  # end


end
