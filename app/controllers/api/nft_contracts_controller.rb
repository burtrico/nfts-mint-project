class Api::NftContractsController < ApplicationController
    before_action :edit_nft_contract, only: [:show, :update, :destroy]
    before_action :authorize_user, only: [:update, :destroy]
  
    def index
      nft_contracts = NftContract.all.includes(:user_nft_contracts)
      render json: nft_contracts, each_serializer: NftContractIndexSerializer
    end
  
    def show
      render json: @nft_contract
    end
  
    def create
      nft_contract = current_user.created_nft_contracts.new(nft_contract_params)
    #   ^^^^^^^^^^^^^^^^^^^^          ^^^^^^^^^^^^ !!!!
      if nft_contract.save
        render json: nft_contract, status: :created
      else
        render json: nft_contract.errors, status: :unprocessable_entity
      end
    end
  
    def update
      if @nft_contract.update(nft_contract_params)
        render json: @nft_contract, status: :ok
      else
        render json: @nft_contract.errors, status: :unprocessable_entity
      end
    end
  
    def destroy
      @nft_contract.destroy
      # we'll render the nft_contract as json in case we want to enable undo functionality from the frontend.
      render json: @nft_contract, status: :ok
    end
  
    private
  
    def nft_contract_params
      params.permit(:id, :user_id, :contract_type, :contract_address, :collection_name, :name, :image_url, :drop_date, :price_mint,
        :creator_royalty, :description, :token_metadata)
    end

    # t.string :contract_type
    # t.string :contract_address
    # t.string :collection_name
    # t.string :name
    # t.string :image_url
    # t.datetime :drop_date
    # t.decimal :price_mint
    # t.decimal :creator_royalty
    # t.text :description
    # t.string :token_metadata
    # t.belongs_to :user

    def edit_nft_contract
      @nft_contract = NftContract.find_by(id: params[:id])
    end
  
    def authorize_user
      user_can_modify = current_user.admin? || @nft_contract.user_id == current_user.id
      render json: {error: "You don't have permission to perform that action"}, status: :forbidden unless user_can_modify
    end

end
