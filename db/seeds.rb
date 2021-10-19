# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

user1 = User.create(ens_domain: "burt.eth", wallet_address: "vjb23b32kbe23hbk323bwklh7l33lb1lzklc8d7rm6", password: "1234")
user2 = User.create(ens_domain: "dakota.eth", wallet_address: "nnin2323kn2jnbb2k3on3n3noo23de394dsc8a5sp5", password: "1234")
user3 = User.create(ens_domain: "sam.eth", wallet_address: "0f9exn71xnvmfv8ed839485mskof6i3fjso6sx8f74", password: "1234")
user4 = User.create(ens_domain: "joe.eth", wallet_address: "ksk73mci95k6k7n89nm8k4kbwvef5h5gv5j6k69hj1", password: "1234")
user5 = User.create(ens_domain: "ray.eth", wallet_address: "akd290p93jhjb3k83j3bjfm2k4m4n5kb505jgv2k7j", password: "1234")
user6 = User.create(ens_domain: "snufkin.eth", wallet_address: "d3nks9s7f8g6gf4d4sjsks52m2l3f74ndjd3w863y2", password: "1234")

nft_contract1 = NftContract.create(contract_type: )

t.belongs_to :user, null: false, foreign_key: true
      t.string :contract_type
      t.string :contract_address
      t.string :collection_name
      t.string :name
      t.string :image_url
      t.datetime :drop_date
      t.decimal :price_mint
      t.decimal :creator_royalty
      t.text :description
      t.string :token_metadata

# Proposal.create(token: "LYRA", title: "Establish the Lyra DAO", 
# description: "Establish the first Lyra DAO with a multi-sig of 5 council members.", 
#  active: true,
# #  Time.now.strftime("%m/%d/%Y %H:%M")
#   start_date: "10/06/2021 14:30",
# end_date: "11/06/2021 12:00",
# user: user1 )

nft1 = Nft.create(user_id: user1.id, nft_contract_id: nft_contract1.id, name: "Snufkin #1", 
  )