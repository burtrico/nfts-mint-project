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

ActiveRecord::Schema.define(version: 2021_11_07_184000) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "nft_contracts", force: :cascade do |t|
    t.string "contract_type"
    t.string "contract_address"
    t.string "collection_name"
    t.string "name"
    t.string "image_url"
    t.datetime "drop_date"
    t.decimal "price_mint"
    t.decimal "creator_royalty"
    t.text "description"
    t.string "token_metadata"
    t.integer "count"
    t.bigint "user_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["user_id"], name: "index_nft_contracts_on_user_id"
  end

  create_table "nfts", force: :cascade do |t|
    t.bigint "nft_contract_id"
    t.bigint "user_id"
    t.string "collection_name"
    t.string "name"
    t.string "image_url"
    t.string "background_color"
    t.datetime "created_date"
    t.decimal "price_current"
    t.decimal "last_sale"
    t.integer "num_sales"
    t.text "description"
    t.string "token_metadata"
    t.string "token_id"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["nft_contract_id"], name: "index_nfts_on_nft_contract_id"
    t.index ["user_id"], name: "index_nfts_on_user_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "ens_domain"
    t.string "wallet_address"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.boolean "admin"
    t.string "password_digest"
    t.string "profile_picture_url"
    t.string "profile_picture_thumbnail_url"
  end

  add_foreign_key "nft_contracts", "users"
  add_foreign_key "nfts", "nft_contracts"
  add_foreign_key "nfts", "users"
end
