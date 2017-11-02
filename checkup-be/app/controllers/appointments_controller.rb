class AppointmentsController < ApplicationController
	# before_action :require_logged_in


	 def create
	 	# byebug
	 	@appointment = Appointment.new(params[:reason])
	 	if @appointment.save
	 		render json: @appointment
 		else
 			render json: @appointment.errors.full_messages, status: 422
 		end
	 end


	  def index
	  	@appointment = Appointment.all
	  	render json: @appointment
	  end



	  def update
	    @appointment = Appointment.find(params[:id])
 	        @user = User.find(params[:user_id])
	    		@appointment.user = @user
	    		@appointment.save
    		render json: @appointment
	  end


	  def show
	    @appointment = Appointment.find(params[:id])


	    unless @appointment.user == nil
	      render json: ["This appointment is already booked"], status: 403
	    end
	end


	def get_current_user_appointment
		appointment = Appointment.where(:user_id => params[:id])
		if appointment
			render json: appointment
		end
	end

	def destroy
		@appointment = Appointment.find(params[:appointment_id])
		@appointment.destroy
		render json: User.find(params[:user_id]).appointments
	end
# private

# 	def appointment_params
# 		params.require(:appointment).permit( :reason )
# 	end

end