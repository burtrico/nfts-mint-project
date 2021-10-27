
// import NFTwallet from './NFTwallet.js'
import '../index.css';
import Popup from './Popup';
import React, { useState } from 'react'
import mymble1 from '../images/mymble1.png'
import mymble2 from '../images/mymble2.png'
import mymble3 from '../images/mymble3.png'
import mymble4 from '../images/mymble4.png'
import mymble5 from '../images/mymble5.png'
import mymble6 from '../images/mymble6.png'
import mymble7 from '../images/mymble7.png'
import snufkin1 from '../images/snufkin1.png'
import snufkin2 from '../images/snufkin2.png'
import snufkin3 from '../images/snufkin3.png'
import snufkin4 from '../images/snufkin4.png'
import snufkin5 from '../images/snufkin5.png'
import snufkin6 from '../images/snufkin6.png'
import snufkin7 from '../images/snufkin7.png'
import corgi1 from '../images/corgi1.png'
import corgi2 from '../images/corgi2.png'

function NftCard({nftObj, addToWallet, removeFromWallet}) {

    const [addNFT, walletSetter] = useState(false)
    const [isOpen, setIsOpen] = useState(false);

    

    function addToWallet() { walletSetter(!addNFT) }

    const renderPrice=()=> {
      // if(nftObj.last_sale !== null) {
      //   if(nftObj.last_sale.payment_token.eth_price !== null ) {
      //     return(<h4>{nftObj.last_sale.payment_token.eth_price}</h4>)
      let x = 200;
      // if(nftObj.asset_contract && nftObj.asset_contract.name === "cryptopunks") { let x = 2000 }
      // if(nftObj.asset_contract && nftObj.asset_contract.name === "boredapeyachtclub") { let x = 300 }
      // else if(nftObj.asset_contract && nftObj.asset_contract.name === "pudgypenguins") { let x = 10 }
      // else  { let x = 20 }
        const price = (Math.random()*x).toFixed(2)
        return( <div className="divPrice"> <h4>{price}</h4></div>  )

      // } } 
    }
    // renderPrice();

    const togglePopup = () => { setIsOpen(!isOpen); }

    // const image = require(nftObj.image_url)
    // let image = nftObj.image_url;

    // if (nftObj.image_url == '../images/mymble1.png') { image = mymble1 }
    // else if (nftObj.image_url == '../images/mymble2.png') { image = mymble2 }
    // else if (nftObj.image_url == '../images/mymble3.png') { image = mymble3 }
    // else if (nftObj.image_url == '../images/mymble4.png') { image = mymble4 }
    // else if (nftObj.image_url == '../images/mymble5.png') { image = mymble5 }
    // else if (nftObj.image_url == '../images/mymble6.png') { image = mymble6 }
    // else if (nftObj.image_url == '../images/mymble7.png') { image = mymble7 }
    // else if (nftObj.image_url == '../images/snufkin1.png') { image = snufkin1 }
    // else if (nftObj.image_url == '../images/snufkin2.png') { image = snufkin2 }
    // else if (nftObj.image_url == '../images/snufkin3.png') { image = snufkin3 }
    // else if (nftObj.image_url == '../images/snufkin4.png') { image = snufkin4 }
    // else if (nftObj.image_url == '../images/snufkin5.png') { image = snufkin5 }
    // else if (nftObj.image_url == '../images/snufkin6.png') { image = snufkin6 }
    // else if (nftObj.image_url == '../images/snufkin7.png') { image = snufkin7 }
    // else if (nftObj.image_url == '../images/corgi1.png') { image = corgi1 }
    // else if (nftObj.image_url == '../images/corgi2.png') { image = corgi2 }
    // else { image = nftObj.image_url }

  

    return (
        <div >
        <img src={nftObj.image_url} className="nftImage" alt="no img" />
        <h3 className="cardname">{nftObj.name}</h3>  
        <h4 className="cardcontract">{(nftObj.asset_contract) ? nftObj.asset_contract.name : nftObj.collection }</h4>
        <div className="cardprice">{nftObj.current_price ? nftObj.current_price : renderPrice()}</div>
        <div className="lastsale">{nftObj.last_sale ? nftObj.last_sale : ""}</div>
          <input
          type="button"
          value="More Info"
          onClick={togglePopup}
          /> 
        

      <div className="addButtonDiv" tabIndex="0">

        <button className="addButton" onClick={addToWallet ? ()=>addToWallet(nftObj) 
                 : ()=>removeFromWallet(nftObj)}>
        { (addToWallet) ? "Buy NFT" : "Sell NFT"}
        </button>

      
      </div>
      
          {isOpen && <Popup
          content={<>
            <b> {nftObj.name} Additonal Info</b>
            <p> Token ID: {nftObj.token_id}</p>
            <p> Number of Sales: {nftObj.num_sales}</p>
            <p> Background Color: {nftObj.background_color}</p>
            <p> Image URL: {nftObj.image_url}</p>
            <p> Description: {nftObj.description}</p>
            <p> Token Metadata: {nftObj.token_metadata}</p>
            <p> Created Date: {nftObj.created_date}</p>
            {/* <p> {nftObj.user_id}</p> */}
            {/* <p> {nftObj.nft_contract_id}</p> */}
            {/* <button>Test Button</button> */}

          </>}
          handleClose={togglePopup}
          nftObj={nftObj}
          />}
      
    </div>
    )
    
}

export default NftCard;