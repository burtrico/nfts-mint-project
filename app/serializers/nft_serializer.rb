class NftSerializer < ActiveModel::Serializer
  attributes :id, :collection_name, :name, :image_url, :background_color, :created_date, :price_current, :last_sale, :num_sales, :token_id
  # has_one :nft_contract
  # has_one :user
  attributes :user_id, :nft_contract_id
end
