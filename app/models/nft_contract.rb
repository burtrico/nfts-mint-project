class NftContract < ApplicationRecord
  belongs_to :user
  has_many :nfts, dependent: :destroy
  has_many :users, through: :nfts
end
