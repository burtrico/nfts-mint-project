class Nft < ApplicationRecord
  belongs_to :user, optional: true
  belongs_to :nft_contract, optional: true

end
