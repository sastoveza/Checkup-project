class DoctorsController < ApplicationController

  def index
    
    # doc_appointment = Doctor.near(params[:city]).includes(:specialities, :appointments).joins(:specialities, :appointments).where(appointments: {
    #       start_time: (Time.now)..(Time.now + 6.day),
    # #       user_id: nil
    #     })

    @doctors = Doctor.all
    #render :json => @as.to_json(:include => { :bs => {:include =>:c} })
    render :json => @doctors.to_json(:include => {:appointments => {only: [:start_time, :user_id]}})
    	# doc_specs = doctor.specialties.pluck(:name)
    	# doc_specs.include?(params[:specialty])
  end
end
