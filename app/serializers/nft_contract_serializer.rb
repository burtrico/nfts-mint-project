class NftContractSerializer < ActiveModel::Serializer
  attributes :id, :contract_type, :contract_address, :collection_name, :name, :image_url, :drop_date, :price_mint, :creator_royalty, :description, :token_metadata
  has_one :user
end
