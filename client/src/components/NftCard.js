
// import NFTwallet from './NFTwallet.js'
import './index.css';

function NftCard({nftObj, addToWallet, removeFromWallet}) {

    // const [addNFT, walletSetter] = useState(false)

    // function addToWallet() {
    //     walletSetter(!addNFT);
    // }
    const renderPrice=()=> {
      // if(nftObj.last_sale !== null) {
      //   if(nftObj.last_sale.payment_token.eth_price !== null ) {
      //     return(<h4>{nftObj.last_sale.payment_token.eth_price}</h4>)
      let x = 20;
      if(nftObj.asset_contract && nftObj.asset_contract.name === "cryptopunks") { let x = 2000 }
      if(nftObj.asset_contract && nftObj.asset_contract.name === "boredapeyachtclub") { let x = 300 }
      else if(nftObj.asset_contract && nftObj.asset_contract.name === "pudgypenguins") { let x = 10 }
      else  { let x = 20 }
        const price = (Math.random()*x).toFixed(2)
        return( <div className="divPrice"> <h4>{price}</h4></div>  )

      // } } 
    }
    // renderPrice();
    
    return (
        <div >
        <img src={nftObj.image_url} className="nftImage" alt="no img" />
        <h3 className="cardname">name: {nftObj.name}</h3>  
        <h4 className="cardcontract">collection: {(nftObj.asset_contract) ? nftObj.asset_contract.name : nftObj.collection }</h4>
        <div className="cardprice">{renderPrice()}</div>
        

      <div className="addButtonDiv" tabIndex="0">

        <button className="addButton" onClick={addToWallet ? ()=>addToWallet(nftObj) 
                 : ()=>removeFromWallet(nftObj)}>
        { (addToWallet) ? "Buy NFT" : "Sell NFT"}
        </button>


      </div>

    </div>
    )
    
}

export default NftCard;