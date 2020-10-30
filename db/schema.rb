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

ActiveRecord::Schema.define(version: 2020_10_30_022517) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "channel_memberships", force: :cascade do |t|
    t.integer "user_id"
    t.integer "channel_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["channel_id"], name: "index_channel_memberships_on_channel_id"
    t.index ["user_id", "channel_id"], name: "index_channel_memberships_on_user_id_and_channel_id", unique: true
    t.index ["user_id"], name: "index_channel_memberships_on_user_id"
  end

  create_table "channels", force: :cascade do |t|
    t.string "name"
    t.string "description"
    t.boolean "private"
    t.integer "admin_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.integer "user_ids", default: [], array: true
    t.integer "message_ids", default: [], array: true
    t.index ["admin_id"], name: "index_channels_on_admin_id"
  end

  create_table "direct_messages", force: :cascade do |t|
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.integer "user_ids", default: [], array: true
    t.integer "message_ids", default: [], array: true
    t.integer "admin_id"
  end

  create_table "dm_memberships", force: :cascade do |t|
    t.integer "user_id"
    t.integer "DM_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["user_id", "DM_id"], name: "index_dm_memberships_on_user_id_and_DM_id", unique: true
  end

  create_table "memberships", force: :cascade do |t|
    t.integer "user_id"
    t.integer "memberable_id"
    t.string "memberable_type"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["memberable_id", "memberable_type"], name: "index_memberships_on_memberable_id_and_memberable_type", unique: true
    t.index ["memberable_id"], name: "index_memberships_on_memberable_id"
    t.index ["user_id"], name: "index_memberships_on_user_id"
  end

  create_table "messages", force: :cascade do |t|
    t.integer "user_id"
    t.string "body"
    t.integer "messageable_id"
    t.string "messageable_type"
    t.integer "parent_message_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "username"
  end

  create_table "profile_pictures", force: :cascade do |t|
    t.string "url"
    t.integer "user_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "username"
    t.string "email"
    t.string "password_digest"
    t.string "session_token"
    t.integer "profile_picture_id"
    t.string "status"
    t.string "title"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.integer "channel_ids", default: [], array: true
    t.integer "direct_messages_ids", default: [], array: true
    t.index ["email"], name: "index_users_on_email"
    t.index ["session_token"], name: "index_users_on_session_token"
    t.index ["username"], name: "index_users_on_username"
  end

end
