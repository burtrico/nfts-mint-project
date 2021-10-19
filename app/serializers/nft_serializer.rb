class NftSerializer < ActiveModel::Serializer
  attributes :id, :collection_name, :name, :image_url, :background_color, :created_date, :price_current, :last_sale, :num_sales
  has_one :nft_contract
  has_one :user
end
