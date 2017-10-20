class CreateAppointments < ActiveRecord::Migration[5.1]
  def change
    create_table :appointments do |t|
      t.integer :user_id, null: false
      t.integer :doctor_id, null: false
      t.text :reason, null: false
      t.string :city, null: false
      t.string :state, null: false
      t.string :zip, null: false

      t.timestamp :start_time, null: false
    end

    add_index :appointments, :user_id
    add_index :appointments, :doctor_id

  end
end
