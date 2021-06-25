# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2021_06_22_221620) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "fit_classes", force: :cascade do |t|
    t.string "class_name"
    t.datetime "schedule_time"
    t.bigint "studio_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["studio_id"], name: "index_fit_classes_on_studio_id"
  end

  create_table "fit_classes_users", id: false, force: :cascade do |t|
    t.bigint "user_id", null: false
    t.bigint "fit_class_id", null: false
  end

  create_table "studios", force: :cascade do |t|
    t.string "business_name"
    t.string "location"
    t.text "blurb"
    t.string "format"
    t.string "image_url"
    t.bigint "user_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["user_id"], name: "index_studios_on_user_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "username"
    t.string "email"
    t.string "first_name"
    t.string "last_name"
    t.string "password_digest"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  add_foreign_key "fit_classes", "studios"
  add_foreign_key "studios", "users"
end
