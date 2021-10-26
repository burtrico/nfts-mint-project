class CreateNfts < ActiveRecord::Migration[6.1]
  def change
    create_table :nfts do |t|
      t.belongs_to :nft_contract, null: true, foreign_key: true
      t.belongs_to :user, null: true, foreign_key: true
      t.string :collection_name
      t.string :name
      t.string :image_url
      t.string :background_color
      t.datetime :created_date
      t.decimal :price_current
      t.decimal :last_sale
      t.integer :num_sales
      t.text :description
      t.string :token_metadata
      t.string :token_id

      t.timestamps
    end
  end
end
