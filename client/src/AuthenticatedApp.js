import './App.css';
// import ReactDOM from "react-dom";
import React, { useState, useEffect } from 'react'
import { BrowserRouter, Switch, Route, NavLink, Redirect } from 'react-router-dom'
import NavBar from "./components/NavBar";
import NftList from "./components/NftList";
import NftWallet from "./components/NftWallet";
import NftMint from "./components/NftMint";
import NftContractContainer from './components/NftContractContainer'
import Opensea from './images/opensea.png';
import Powered from './images/powered.png';



function AuthenticatedApp({ currentUser, setCurrentUser }) {
  const [apiData, setApiData] = useState([]);
  const [walletNFTs,setWalletNFTs] = useState( [] );

  
  // const [loading, setLoading] = useState(false);

  console.log("Auth App after USE STATES:",currentUser)
  // const history = useHistory()
  
  useEffect( ()=>  {
    const collections = ['cryptopunks', 'boredapeyachtclub','pudgypenguins','guttercatgang']
    
    const get = {method: 'GET'};

        let completeNftArray = [];

    collections.forEach(collection => { console.log(collection)
            
    fetch(`https://api.opensea.io/api/v1/assets?order_direction=asc&offset=0&limit=10&collection=${collection}`, get)     
        .then(response => response.json())
        .then(nftArray => {
            console.log(nftArray.assets)
                nftArray.assets.forEach(eachNFT => {
                  const localNft = {}
                  if(eachNFT.name !== "CryptoPunk #10000") {
                  localNft.name = eachNFT.name;
                  // localNft.collection_name = (eachNFT.asset_contract ? eachNFT.asset_contract.name : eachNFT.collection);
                  localNft.collection_name = eachNFT.collection.name
                  localNft.token_id = eachNFT.token_id;
                  localNft.num_sales = eachNFT.num_sales;
                  localNft.background_color = eachNFT.background_color;
                  localNft.image_url = eachNFT.image_url;
                  localNft.name = eachNFT.name;
                  localNft.description = eachNFT.asset_contract.description;
                  localNft.token_metadata = eachNFT.token_metadata;
                  localNft.created_date = eachNFT.asset_contract.created_date;
                  localNft.price_current = null;   
                  localNft.last_sale = null;
                  // eachNFT.owner.user.username    
                  localNft.user_id = null; // user <- foreign key
                  localNft.nft_contract_id = null; // nft_contract <- foreign key
                  
                  completeNftArray.push(localNft)
                  }
                  // nft_contract.contractType = asset_contract.asset_contract_type
                  // nft_contract.contract_address = asset_contract.address
                  // nft_contract.created_date = asset_contract.created_date
                  // nft_contract.name = asset_contract.name
                  // asset_contract.description
                  // asset_contract.image_url
                  // drop_date
                  // price_mint
                  // creator_royalty                
                  // collection.name
                  // collection.created_date
                  })                    
                console.log(">> API NFT Array:  ", completeNftArray)
                setApiData(completeNftArray); 
            })
        .catch(err => console.error(err))
        // setLoading(true);
    })
    // Set initial wallet cards:
    fetch('/api/nfts'
    // , { credentials: 'include' }
    )
    .then(resp => resp.json())
    .then(nftArray => {
      console.log('FETCH /api/nfts ===',nftArray)
      const myWalletNfts = nftArray.map(eachNft => eachNft.user_id === currentUser.id)
      console.log('!!! map is not a function ===',myWalletNfts)
        setWalletNFTs(myWalletNfts)
    })

  },[])


  const handleLogout = () => {
    fetch(`/api/logout`, {
      method: 'DELETE',
      credentials: 'include'
    })
      .then(res => {
        if (res.ok) {
          setCurrentUser(null)
          // history.push('/')
        }
      })
  }

  // const addToWallet = (nftToAdd) => {console.log(nftToAdd)}
    const addToWallet = (nftToAdd) => {
      const addFilter = walletNFTs.filter(nftCard => nftCard === nftToAdd)
      if (addFilter.length < 1) {
      // Add Current User's ID to the NFT
      nftToAdd.user_id = currentUser.id
      
          const postObj = {
              method: 'POST',
              headers: {
                "Content-Type": "application/json",
                Accept: "application/json" },
                  body: JSON.stringify(nftToAdd)
              }
              
              fetch('/api/nfts', postObj)
              .then(res => {
        if (res.ok) {
          return res.json()
        } else {
          return res.json().then(errors => Promise.reject(errors))
        }
      })
      .then(nftObj => {
          setWalletNFTs(walletNFTs.concat(nftObj))
      })
  }}

  // const removeFromWallet = () => {console.log(currentUser)}
  const removeFromWallet =(nftToRemove)=> {
    return  fetch(`/api/nfts/${nftToRemove.id}`, {
      method: 'DELETE',
      credentials: 'include'
    })
    .then(res => {
      if (res.ok) {
        const removeFilter = walletNFTs.filter(nftCard => nftCard.id !== nftToRemove.id)
        setWalletNFTs(removeFilter)
      }
    })
  }

  // pageframe
  // NftContractContainerDiv

  return (
    <div className="App">
      <BrowserRouter>
        <NavBar
          setCurrentUser={setCurrentUser}
          currentUser={currentUser}
          handleLogout={handleLogout}
        />
        {/* { console.log(walletNFTs) } */}

        {/* {!loading ? <h1>Loading...</h1> : <></>} */}
        
        <Switch>
          <Route path="/NftMint">
            <NftMint currentUser={currentUser} 
            walletNFTs={walletNFTs}
            addToWallet={addToWallet}/>
          </Route>

          <Route path="/NftWallet">
            <NftWallet currentUser={currentUser} 
            walletNFTs={walletNFTs}
            removeFromWallet={removeFromWallet}/>
          </Route>

          <Route path="/NftContractContainer">
            <NftContractContainer           
            currentUser={currentUser}
            />
          </Route>

          <Route path="/">
            <NftList     
            apiData={apiData} 
            addToWallet={addToWallet}        
            />
          </Route>

          <Redirect to="/" />
        </Switch>
      </BrowserRouter>
      <div class="footer">
        <img  src={Powered} alt="powered by"/>
            
        <a target="_blank" href="https://docs.opensea.io/"><img class="openlogo" src={Opensea} alt="Opensea"/></a>
        </div>
    </div>
  )
}

export default AuthenticatedApp;
