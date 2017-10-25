class UsersController < ApplicationController
  skip_before_action :authorized, only: [:create,:mydoctors,:update,:destroy]

  def create

    user = User.new(username:params[:username], password:params[:password])
    if user.save
      token = encode_token({user_id: user.id})
      render json: {user:user, jwt: token}
    else
    end
  end

  def get_appointments
    @user_appointments = User.find(params[:user_id])
    render json: @user_appointments, status: 200
  end

  def me

    if @user
      render json: {user: @user, appointments: @user.appointments}
    else
      render json: {message:"Error"}
    end

  end

  def myappointments
    @user = User.find_by(id: params[:id])
    @appointment = @user.appointments
    byebug
    render json: @appointment
  end

  def update
    @user = User.find(params[:user_id])
    @appointment = Appointment.find(params[:appointment_id])
    if !@user.appointments.include?(@appointment)
    @user.appointments << @appointment
    end
  end

  def destroy
    @user = User.find(params[:user_id])
    @appointment = Appointment.find(params[:appointment_id])
    @user.appointments.delete(@appointment)
    render json: @appointment

  end


end
