require 'httparty'
# require 'faker'

class DoctorSeeding
  def initialize(skip_count)
    @skip_count = skip_count
  end

  include HTTParty
  base_uri "https://api.betterdoctor.com/2016-03-01"

  def doctor
    self.class.get("/doctors?location=NY&skip=#{@skip_count}&limit=100&user_key=735f4d99d100c1b2011d3119ec9caa0c")
  end
end


i = 0
skips = [0, 100]
while i < skips.length
  doctor_list = DoctorSeeding.new(skips[i])
  doctors = doctor_list.doctor["data"]

  doctors.each_with_index do |doctor,i|
    begin
      docname = doctor["practices"][0]["name"]
      docspecialty = doctor["specialties"][0]["name"] + " " + doctors[0]["specialties"][0]["description"]
      docinsurance = doctor["practices"][0]["insurance_uids"]
      doclat = doctor["practices"][0]["visit_address"]["lat"]
      doclon = doctor["practices"][0]["visit_address"]["lon"]
      doccity = doctor["practices"][0]["visit_address"]["city"]
      docstate = doctor["practices"][0]["visit_address"]["state"]
      doczip = doctor["practices"][0]["visit_address"]["zip"]
      docimage = doctor["profile"]["image_url"]
      docbio = doctor["profile"]["bio"]

    rescue
      puts "we hit an error at  #{i}"
      next

    else
      Doctor.create(
        name: docname,
        specialties: docspecialty,
        insurance: docinsurance,
        lat: doclat,
        lon: doclon,
        city:doccity,
        state:docstate,
        zip:doczip,
        image_url:docimage,
        bio:docbio
      )
    end
  end
  i+=1
end

# Users
user_names = ["Martina", "Matt", "Isabelle", "Stacey", "Luke"]
passwords = ["long_password", "bouvier12345", "_hi", "passpasspass", "wine_is_great"]
users = []
5.times do |i|
  users << User.create(username: user_names[i], password: passwords[i])
end





Doctor.all.each_with_index do |doctor|
  current_time = Time.now
  current_yr = current_time.year
  current_m = current_time.month
  current_d = current_time.day
  start_day = Time.new(current_yr, current_m, current_d, 8) - 7.day
100.times do
  user = User.all
  # byebug
    Appointment.create!(doctor_id: doctor.id, start_time: start_day.to_datetime)
  

    start_day += 2.hour
    start_day += 14.hour if start_day.hour == 18
  end
end


# Doctor.all.each_with_index do |doctor|
#   current_time = Time.now
#   current_yr = current_time.year
#   current_m = current_time.month
#   current_d = current_time.day
#   start_day = Time.new(current_yr, current_m, current_d, 8) - 7.day

#   200.times do |i|
#     user = users[0]
#     # byebug
#     app = Appointment.create(doctor_id: doctor.id, start_time: start_day.to_datetime, city: doctor.city, state: doctor.state, zip: doctor.zip)
#     if i % 5 == 0 && Time.now > start_day
#       app.update(reason: "I'm sick", user_id: user.id) unless user.appointments.count > 10
#     end
#     start_day += 2.hour
#     start_day += 14.hour if start_day.hour == 18
#   end
# end






