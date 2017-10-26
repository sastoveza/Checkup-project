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



 # @comment = Comment.find_by(id: params[:id])
 #    @comment.body = params[:body]
 #    @comment.save
 #    render json: @comment, status: 201
 #  end

	  def update
	  	# byebug
	    @appointment = Appointment.find(params[:id])
	    app_info = params[:appointment]
	    reason = app_info[:reason]
	      @appointment.save
	      render json: @appointment
	    # else
	    #   render json: ["Please explain the reason for your visit"], status: 422
	    # end
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
# private

# 	def appointment_params
# 		params.require(:appointment).permit( :reason )
# 	end

end