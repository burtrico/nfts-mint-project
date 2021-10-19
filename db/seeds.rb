# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
puts ">>> Starting Seeds ... <<<"

user1 = User.create(ens_domain: "burt.eth", wallet_address: "vjb23b32kbe23hbk323bwklh7l33lb1lzklc8d7rm6", password: "1234")
user2 = User.create(ens_domain: "dakota.eth", wallet_address: "nnin2323kn2jnbb2k3on3n3noo23de394dsc8a5sp5", password: "1234")
user3 = User.create(ens_domain: "sam.eth", wallet_address: "0f9exn71xnvmfv8ed839485mskof6i3fjso6sx8f74", password: "1234")
user4 = User.create(ens_domain: "joe.eth", wallet_address: "ksk73mci95k6k7n89nm8k4kbwvef5h5gv5j6k69hj1", password: "1234")
user5 = User.create(ens_domain: "ray.eth", wallet_address: "akd290p93jhjb3k83j3bjfm2k4m4n5kb505jgv2k7j", password: "1234")
user6 = User.create(ens_domain: "snufkin.eth", wallet_address: "d3nks9s7f8g6gf4d4sjsks52m2l3f74ndjd3w863y2", password: "1234")

puts ">> Users Seeded <<"

nft_contract1 = NftContract.create(user_id: user1.id, contract_type: "non-funglible", contract_address: "1r6c8ixn71xnfv8ed83fg85mskof6i3fjso6sx0s2l", 
      collection_name: "Snuggly Snufkins", name: "", image_url: "", drop_date: "10/21/2021 12:00", price_mint: 0.2, 
      creator_royalty: 0.025, description: "Located in their apartment in Houston you can find 10 snuggly snufkins sitting on their box or hunting for mice on the ETH blockchain.", 
      token_metadata: "")

puts ">>> Nft Contracts Seeded <<<"

nft1 = Nft.create(nft_contract_id: nft_contract1, user_id: user1, collection_name: nft_contract1.collection_name,
      name: "Snuggly Snufkin #1", image_url: "https://i.guim.co.uk/img/media/26392d05302e02f7bf4eb143bb84c8097d09144b/446_167_3683_2210/master/3683.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=49ed3252c0b2ffb49cf8b508892e452d", 
      background_color: "", created_date: "10/21/2021 12:00", price_current: 1, last_sale: 0.5, num_sales: 1,
      description: nft_contract1.description, token_metadata: nft_contract1.token_metadata)

nft2 = Nft.create(nft_contract_id: nft_contract1.id, user_id: user3.id, collection_name: nft_contract1.collection_name,
      name: "Snuggly Snufkin #2", image_url: "https://i.guim.co.uk/img/media/26392d05302e02f7bf4eb143bb84c8097d09144b/446_167_3683_2210/master/3683.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=49ed3252c0b2ffb49cf8b508892e452d", 
      background_color: "", created_date: "10/21/2021 12:00", price_current: 1.5, last_sale: 0.6, num_sales: 2,
      description: nft_contract1.description, token_metadata: nft_contract1.token_metadata)

nft3 = Nft.create(nft_contract_id: nft_contract1.id, user_id: user5.id, collection_name: nft_contract1.collection_name,
      name: "Snuggly Snufkin #3", image_url: "https://i.guim.co.uk/img/media/26392d05302e02f7bf4eb143bb84c8097d09144b/446_167_3683_2210/master/3683.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=49ed3252c0b2ffb49cf8b508892e452d", 
      background_color: "", created_date: "10/21/2021 12:00", price_current: 0.9, last_sale: 0.3, num_sales: 1,
      description: nft_contract1.description, token_metadata: nft_contract1.token_metadata)

nft4 = Nft.create(nft_contract_id: nft_contract1.id, user_id: user4.id, collection_name: nft_contract1.collection_name,
      name: "Snuggly Snufkin #4", image_url: "https://i.guim.co.uk/img/media/26392d05302e02f7bf4eb143bb84c8097d09144b/446_167_3683_2210/master/3683.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=49ed3252c0b2ffb49cf8b508892e452d", 
      background_color: "", created_date: "10/21/2021 12:00", price_current: 2, last_sale: 0.75, num_sales: 2,
      description: nft_contract1.description, token_metadata: nft_contract1.token_metadata)

nft5 = Nft.create(nft_contract_id: nft_contract1.id, user_id: user6.id, collection_name: nft_contract1.collection_name,
      name: "Snuggly Snufkin #5", image_url: "https://i.guim.co.uk/img/media/26392d05302e02f7bf4eb143bb84c8097d09144b/446_167_3683_2210/master/3683.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=49ed3252c0b2ffb49cf8b508892e452d", 
      background_color: "", created_date: "10/21/2021 12:00", price_current: 1, last_sale: 0.3, num_sales: 1,
      description: nft_contract1.description, token_metadata: nft_contract1.token_metadata)

nft6 = Nft.create(nft_contract_id: nft_contract1.id, user_id: user2.id, collection_name: nft_contract1.collection_name,
      name: "Snuggly Snufkin #6", image_url: "https://i.guim.co.uk/img/media/26392d05302e02f7bf4eb143bb84c8097d09144b/446_167_3683_2210/master/3683.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=49ed3252c0b2ffb49cf8b508892e452d", 
      background_color: "", created_date: "10/21/2021 12:00", price_current: 3, last_sale: 1, num_sales: 3,
      description: nft_contract1.description, token_metadata: nft_contract1.token_metadata)

puts ">> Seeding complete <<"

