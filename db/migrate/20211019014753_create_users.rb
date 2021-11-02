class CreateUsers < ActiveRecord::Migration[6.1]
  def change
    create_table :users do |t|
      t.string :ens_domain
      t.string :wallet_address
      t.decimal :ethereum

      t.timestamps
    end
  end
end
