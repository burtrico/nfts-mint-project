class Nft < ApplicationRecord
  belongs_to :user
  belongs_to :nft_contract

end
