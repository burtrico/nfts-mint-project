# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
puts ">>> Starting Seeds ... <<<"

user1 = User.create(ens_domain: "burt.eth", wallet_address: "vjb23b32kbe23hbk323bwklh7l33lb1lzklc8d7rm6", password: "1234", admin: true, ethereum: 120.1)
user2 = User.create(ens_domain: "dakota.eth", wallet_address: "nnin2323kn2jnbb2k3on3n3noo23de394dsc8a5sp5", password: "1234", ethereum: 130.7)
user3 = User.create(ens_domain: "sam.eth", wallet_address: "0f9exn71xnvmfv8ed839485mskof6i3fjso6sx8f74", password: "1234", ethereum: 25)
user4 = User.create(ens_domain: "joe.eth", wallet_address: "ksk73mci95k6k7n89nm8k4kbwvef5h5gv5j6k69hj1", password: "1234", ethereum: 300)
user5 = User.create(ens_domain: "ray.eth", wallet_address: "akd290p93jhjb3k83j3bjfm2k4m4n5kb505jgv2k7j", password: "1234", ethereum: 80)
user6 = User.create(ens_domain: "muzzi.eth", wallet_address: "d3nks9s7f8g6gf4d4sjsks52m2l3f74ndjd3w863y2", password: "1234", ethereum: 800)

puts ">> Users Seeded <<"

nft_contract1 = NftContract.create(user_id: user1.id, contract_type: "non-funglible", contract_address: "1r6c8ixn71xnfv8ed83fg85mskof6i3fjso6sx0s2l", 
      collection_name: "Snuggly Snufkins", name: "", image_url: "https://i.imgur.com/u2BJVhc.png", image_var: 'snufkin7', drop_date: "10/21/2021 12:00", price_mint: 0.2, 
      creator_royalty: 0.025, description: "Located in their apartment in Houston you can find 10 snuggly snufkins sitting on their box or hunting for mice on the Ethereum blockchain.", 
      token_metadata: "...", count: 6)

nft_contract2 = NftContract.create(user_id: user1.id, contract_type: "non-funglible", contract_address: "w0qc8ixn71xnfv8ed83fg35mskof6i3fjso6sx0sd4", 
      collection_name: "Majestic Mymbles", name: "", image_url: "https://i.imgur.com/z9kTnWz.png", image_var: 'mymble7', 
      drop_date: "10/25/2021 11:00", price_mint: 0.3, 
      creator_royalty: 0.025, description: "Located in their apartment in Houston you can find Mymble eating food or being cute on the Ethereum blockchain.", 
      token_metadata: "...", count: 6)

nft_contract3 = NftContract.create(user_id: user2.id, contract_type: "non-funglible", contract_address: "9w3l8ixn71xnfv8ed83fg35mskof6i3fjso6sx4k2n", 
      collection_name: "Little Lizards", name: "", image_url: "https://exopetguides.com/wp-content/uploads/2019/09/gecko-eagerly-waiting.jpg", 
      drop_date: "10/28/2021 11:00", price_mint: 0.5, image_var: 'lizard1', 
      creator_royalty: 0.05, description: "Located on a tree branch near you, these repltiles look for bugs to eat on the Ethereum blockchain.", 
      token_metadata: "...", count: 10)

nft_contract4 = NftContract.create(user_id: user3.id, contract_type: "non-funglible", contract_address: "6hw8jlx171xnfv8ed83fg35mskof6i3fjso8m3d0k5", 
      collection_name: "Cuddly Corgis", name: "", image_url: "https://i.imgur.com/pkyZJqP.jpg", image_var: 'corgi1', 
      drop_date: "10/20/2021 12:00", price_mint: 0.6, 
      creator_royalty: 0.03, description: "As cuddly and cute as can be, the corgis frolic and play in a park or in your house on the Ethereum blockchain.", 
      token_metadata: "...", count: 6)

puts ">>> Nft Contracts Seeded <<<"

nft1 = Nft.create(nft_contract_id: nft_contract1.id, user_id: user1.id, collection_name: nft_contract1.collection_name,
      name: "Snuggly Snufkin #1", image_url: "https://i.imgur.com/L8XRStg.png", image_var: 'snufkin1', 
      background_color: "", created_date: "10/21/2021 12:02", price_current: 1, last_sale: 0.5, num_sales: 1,
      description: nft_contract1.description, token_metadata: nft_contract1.token_metadata, token_id: "1")

nft2 = Nft.create(nft_contract_id: nft_contract1.id, user_id: user6.id, collection_name: nft_contract1.collection_name,
      name: "Snuggly Snufkin #2", image_url: "https://i.imgur.com/swM3CGG.png", image_var: 'snufkin2', 
      background_color: "", created_date: "10/21/2021 12:02", price_current: 1.5, last_sale: 0.6, num_sales: 2,
      description: nft_contract1.description, token_metadata: nft_contract1.token_metadata, token_id: "2")

nft3 = Nft.create(nft_contract_id: nft_contract1.id, user_id: user5.id, collection_name: nft_contract1.collection_name,
      name: "Snuggly Snufkin #3", image_url: "https://i.imgur.com/9EnNm9P.png", image_var: 'snufkin3', 
      background_color: "", created_date: "10/21/2021 12:02", price_current: 0.9, last_sale: 0.3, num_sales: 1,
      description: nft_contract1.description, token_metadata: nft_contract1.token_metadata, token_id: "3")

nft4 = Nft.create(nft_contract_id: nft_contract1.id, user_id: user4.id, collection_name: nft_contract1.collection_name,
      name: "Snuggly Snufkin #4", image_url: "https://i.imgur.com/B4qG19e.png", image_var: 'snufkin4', 
      background_color: "", created_date: "10/21/2021 12:02", price_current: 2, last_sale: 0.75, num_sales: 2,
      description: nft_contract1.description, token_metadata: nft_contract1.token_metadata, token_id: "4")

nft5 = Nft.create(nft_contract_id: nft_contract1.id, user_id: user3.id, collection_name: nft_contract1.collection_name,
      name: "Snuggly Snufkin #5", image_url: "https://i.imgur.com/A71inwM.png", image_var: 'snufkin5', 
      background_color: "", created_date: "10/21/2021 12:02", price_current: 1, last_sale: 0.3, num_sales: 1,
      description: nft_contract1.description, token_metadata: nft_contract1.token_metadata, token_id: "5")

nft6 = Nft.create(nft_contract_id: nft_contract1.id, user_id: user1.id, collection_name: nft_contract1.collection_name,
      name: "Snuggly Snufkin #6", image_url: "https://i.imgur.com/VUxWQ3a.png", image_var: 'snufkin6', 
      background_color: "", created_date: "10/21/2021 12:03", price_current: 3, last_sale: 1, num_sales: 3,
      description: nft_contract1.description, token_metadata: nft_contract1.token_metadata, token_id: "6")

# --------------------

      nft7 = Nft.create(nft_contract_id: nft_contract2.id, user_id: user2.id, collection_name: nft_contract2.collection_name,
            name: "Majestic Mymble #1", image_url: "https://i.imgur.com/t87wKl2.png", image_var: 'mymble1', 
            background_color: "", created_date: "10/25/2021 11:01", price_current: 1.4, last_sale: 0.85, num_sales: 2,
            description: nft_contract2.description, token_metadata: nft_contract2.token_metadata, token_id: "1")
      
      nft8 = Nft.create(nft_contract_id: nft_contract2.id, user_id: user3.id, collection_name: nft_contract2.collection_name,
            name: "Majestic Mymble #2", image_url: "https://i.imgur.com/GieaC0J.png",  image_var: 'mymble2', 
            background_color: "", created_date: "10/25/2021 11:01", price_current: 1.2, last_sale: 0.8, num_sales: 3,
            description: nft_contract2.description, token_metadata: nft_contract2.token_metadata, token_id: "2")
      
      nft9 = Nft.create(nft_contract_id: nft_contract2.id, user_id: user4.id, collection_name: nft_contract2.collection_name,
            name: "Majestic Mymble #3", image_url: "https://i.imgur.com/XltfOXh.png",  image_var: 'mymble3', 
            background_color: "", created_date: "10/25/2021 11:01", price_current: 1, last_sale: 0.5, num_sales: 1,
            description: nft_contract2.description, token_metadata: nft_contract2.token_metadata, token_id: "3")
      
      nft10 = Nft.create(nft_contract_id: nft_contract2.id, user_id: user5.id, collection_name: nft_contract2.collection_name,
            name: "Majestic Mymble #4", image_url: "https://i.imgur.com/Rg368US.png",  image_var: 'mymble4', 
            background_color: "", created_date: "10/25/2021 11:01", price_current: 1.8, last_sale: 1, num_sales: 4,
            description: nft_contract2.description, token_metadata: nft_contract2.token_metadata, token_id: "4")
      
      nft11 = Nft.create(nft_contract_id: nft_contract2.id, user_id: user6.id, collection_name: nft_contract2.collection_name,
            name: "Majestic Mymble #5", image_url: "https://i.imgur.com/mrDdjeR.png",  image_var: 'mymble5', 
            background_color: "", created_date: "10/25/2021 11:01", price_current: 1.5, last_sale: 0.7, num_sales: 2,
            description: nft_contract2.description, token_metadata: nft_contract2.token_metadata, token_id: "5")
      
      nft12 = Nft.create(nft_contract_id: nft_contract2.id, user_id: user2.id, collection_name: nft_contract2.collection_name,
            name: "Majestic Mymble #6", image_url: "https://i.imgur.com/XHXUOBh.png",  image_var: 'mymble6', 
            background_color: "", created_date: "10/25/2021 11:01", price_current: 2, last_sale: 1.5, num_sales: 2,
            description: nft_contract2.description, token_metadata: nft_contract2.token_metadata, token_id: "6")
      
# --------------------

      nft13 = Nft.create(nft_contract_id: nft_contract4.id, user_id: user6.id, collection_name: nft_contract4.collection_name,
            name: "Cute Corgi #1", image_url: "https://i.imgur.com/pkyZJqP.jpg",  image_var: 'corgi1', 
            background_color: "", created_date: "10/25/2021 12:01", price_current: 6, last_sale: 3, num_sales: 7,
            description: nft_contract4.description, token_metadata: nft_contract4.token_metadata, token_id: "1")


      nft14 = Nft.create(nft_contract_id: nft_contract4.id, user_id: user6.id, collection_name: nft_contract4.collection_name,
            name: "Cute Corgi #2", image_url: "https://i.imgur.com/W5Syoua.jpg", image_var: 'corgi2',
            background_color: "", created_date: "10/25/2021 12:01", price_current: 4, last_sale: 2, num_sales: 11,
            description: nft_contract4.description, token_metadata: nft_contract4.token_metadata, token_id: "2")




puts ">> Seeding complete <<"

