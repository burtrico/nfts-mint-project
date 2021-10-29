class Api::NftsController < ApplicationController
    before_action :edit_nft
    # , only: [:show, :update, :destroy]
    # before_action :authorize_user, only: [:update, :destroy]
  
    def index
      nfts = Nft.all
      # .includes(:user_nfts)
      render json: nfts
      # , each_serializer: NftIndexSerializer
    end
  
    def show
      render json: @nft
    end
  
    def create
      nft = Nft.new(nft_params)
      if nft.save
        render json: nft, status: :created
      else
        render json: nft.errors, status: :unprocessable_entity
      end
    end
  
    def update
      if @nft.update(nft_params)
        render json: @nft, status: :ok
      else
        render json: @nft.errors, status: :unprocessable_entity
      end
    end
  
    def destroy
      @nft.destroy
      # we'll render the nft as json in case we want to enable undo functionality from the frontend.
      render json: @nft, status: :ok
    end
  
    private
  
    def nft_params
      params.permit(:id, :user_id, :nft_contract_id, :collection_name, :name, :image_url, :background_color, :created_date, 
        :price_current, :last_sale, :num_sales, :description, :token_metadata, :token_id)
    end

    def edit_nft
      @nft = Nft.find_by(id: params[:id])
    end
  
    # def authorize_user
    #   user_can_modify = current_user.admin? || @nft.user_id == current_user.id
    #   render json: {error: "You don't have permission to perform that action"}, status: :forbidden unless user_can_modify
    # end
    
end
