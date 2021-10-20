class NftContract < ApplicationRecord
  
  has_many :nfts, dependent: :destroy
  has_many :users, through: :nfts

  # belongs_to :user
end
