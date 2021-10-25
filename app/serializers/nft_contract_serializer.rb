class NftContractSerializer < ActiveModel::Serializer
  attributes :id, :contract_type, :contract_address, :collection_name, :name, :image_url, :drop_date, :price_mint, :creator_royalty, :description, :token_metadata
  # attributes :user_id
  # has_one :user

  def drop_date
    if (object.drop_date == nil) 
      object.drop_date = "tomorrow"
    else
      object.drop_date.strftime('%A, %m/%d/%y at %I:%m %p')
    end
  end

  # def time
  #   "From #{object.start_time.strftime('%A, %m/%d/%y at %I:%m %p')} to #{object.end_time.strftime('%A, %m/%d/%y at %I:%m %p')}"
  # end
end
