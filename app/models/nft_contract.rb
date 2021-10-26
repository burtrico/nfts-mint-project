class NftContract < ApplicationRecord
  
  has_many :nfts, dependent: :destroy
  has_many :users, through: :nfts
  # has_one :user_id

  belongs_to :user
end
