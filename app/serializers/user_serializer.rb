class UserSerializer < ActiveModel::Serializer
  attributes :id, :ens_domain, :wallet_address
end
