# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20171107165808) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "appointments", force: :cascade do |t|
    t.string "reason"
    t.datetime "time"
    t.boolean "visited", default: false
    t.bigint "user_id"
    t.bigint "physician_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.bigint "physicianswithappointment_id"
    t.string "notes"
    t.index ["physician_id"], name: "index_appointments_on_physician_id"
    t.index ["physicianswithappointment_id"], name: "index_appointments_on_physicianswithappointment_id"
    t.index ["user_id"], name: "index_appointments_on_user_id"
  end

  create_table "delayed_jobs", force: :cascade do |t|
    t.integer "priority", default: 0, null: false
    t.integer "attempts", default: 0, null: false
    t.text "handler", null: false
    t.text "last_error"
    t.datetime "run_at"
    t.datetime "locked_at"
    t.datetime "failed_at"
    t.string "locked_by"
    t.string "queue"
    t.datetime "created_at"
    t.datetime "updated_at"
    t.index ["priority", "run_at"], name: "delayed_jobs_priority"
  end

  create_table "physician_lists", force: :cascade do |t|
    t.bigint "user_id"
    t.bigint "physician_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["physician_id"], name: "index_physician_lists_on_physician_id"
    t.index ["user_id"], name: "index_physician_lists_on_user_id"
  end

  create_table "physicians", force: :cascade do |t|
    t.string "first_name", null: false
    t.string "last_name", null: false
    t.string "office_name", null: false
    t.string "specialty", null: false
    t.string "address", null: false
    t.string "city", null: false
    t.string "state", null: false
    t.string "phone_number"
  end

  create_table "physicianswithappointments", force: :cascade do |t|
    t.bigint "user_id"
    t.bigint "physician_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["physician_id"], name: "index_physicianswithappointments_on_physician_id"
    t.index ["user_id"], name: "index_physicianswithappointments_on_user_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "provider"
    t.string "uid"
    t.string "first_name"
    t.string "last_name"
    t.string "email"
    t.string "token"
    t.string "refresh_token"
    t.datetime "oauth_expires_at"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

end
