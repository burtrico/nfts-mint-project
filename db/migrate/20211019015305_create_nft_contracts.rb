class CreateNftContracts < ActiveRecord::Migration[6.1]
  def change
    create_table :nft_contracts do |t|
      t.string :contract_type
      t.string :contract_address
      t.string :collection_name
      t.string :name
      t.string :image_url
      t.datetime :drop_date
      t.decimal :price_mint
      t.decimal :creator_royalty
      t.text :description
      t.string :token_metadata
      t.integer :count
      t.belongs_to :user, null: false, foreign_key: true
      # t.integer :user_id

      t.timestamps
    end
  end
end
