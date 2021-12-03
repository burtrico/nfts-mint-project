import './App.css';
// import ReactDOM from "react-dom";
import React, { useState, useEffect } from 'react'
import { BrowserRouter, Switch, Route, NavLink, Redirect, useHistory } from 'react-router-dom'
import NavBar from "./components/NavBar";
import NftList from "./components/NftList";
import NftWallet from "./components/NftWallet";
import NftMint from "./components/NftMint";
import NftContractContainer from './components/NftContractContainer'



function AuthenticatedApp({ currentUser, setCurrentUser}) {

 
  const [apiData, setApiData] = useState([]);           // NFTs displayed on Homepage
  const [walletNFTs,setWalletNFTs] = useState( [] );    // CurrenUser NFTs
  const [nftContracts, setNftContracts] = useState([])  // NFT Contracts
  const [ethBalance, setEthBalance] = useState(0)       // Wallet Ethereum balance

  const history = useHistory()
  




  useEffect( ()=>  {
    
    setEthBalance(parseFloat(currentUser.ethereum)) // Load wallet's Ethereum balance
   
    fetch(`/api/nft_contracts`, {       // Fetch NFT Contracts
      credentials: 'include'
    })
      .then(res => res.json())
      .then(nftContracts => {
        setNftContracts(nftContracts)
      console.log(nftContracts)
      })

    // Fetch NFTs from Opensea API, one collection at a time 
    const collections = ['cryptopunks', 'boredapeyachtclub','pudgypenguins','guttercatgang']
    const qty = 10     // Number of NFTs to fetch from each collection
    
    const get = {method: 'GET'};
    let completeNftArray = [];

    collections.forEach(collection => { console.log(collection)
            
    fetch(`https://api.opensea.io/api/v1/assets?order_direction=asc&offset=0&limit=${qty}&collection=${collection}`, get)     
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
                 
            })
        .catch(err => console.error(err))

    })
 
    // setApiData(completeNftArray);

    fetch('/api/nfts'
    , { credentials: 'include' }
    )
    .then(resp1 => resp1.json())
    .then(nftArray1 => {
      let currentNftArray = completeNftArray;

      nftArray1.forEach(nftObj => { 
        const existsFilter = apiData.filter(nft => nft == nftObj)
        
        if (existsFilter.length > 0) {  }
        else {  currentNftArray.unshift(nftObj)  }
        
      })
      setApiData(currentNftArray)
    })

    

    // Set initial wallet cards:
    fetch('/api/nfts'
    , { credentials: 'include' }
    )
    .then(resp => resp.json())
    .then(nftArray2 => {
      const myWalletNfts = nftArray2.filter(eachNft => eachNft.user.id == currentUser.id)
        setWalletNFTs(myWalletNfts)
    })

    // setEthBalance(currentUser.ethereum)

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


    const addToWallet = (nftToAdd) => {       // Add/Buy NFT to Wallet
      const addFilter = walletNFTs.filter(nftCard => nftCard.id === nftToAdd.id)
      if (addFilter.length < 1) {
      // Add Current User's ID to the NFT
      nftToAdd.user_id = currentUser.id

      const ethDifference = 0 - parseFloat(nftToAdd.price_current)
      updateEthBalance(ethDifference)
      nftToAdd.last_sale = nftToAdd.price_current
      nftToAdd.price_current = nftToAdd.price_current * 1.1

      console.log(" !!!!!!!!! POST NFT !!!!!!!!!",nftToAdd)
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


  const removeFromWallet =(nftToRemove)=> {      // Remove/Sell NFT from Wallet

    const ethDifference = parseFloat(nftToRemove.price_current)
    updateEthBalance(ethDifference)
    nftToRemove.last_sale = nftToRemove.price_current

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

  const updateEthBalance =(ethDifference)=> {      // Update Wallet's eth balance
    const newBalance = parseFloat(ethBalance) + parseFloat(ethDifference)
    console.log("NEWWW BALANCE !!!! ======", newBalance)
    setEthBalance(newBalance)

    return fetch(`/me`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      credentials: 'include',
      body: JSON.stringify({ethereum: newBalance})
    })
      .then(res => {
        if (res.ok) {
          return res.json()
        } else {
          return res.json().then(errors => Promise.reject(errors))
        }
      })
      .then(userInfo => {
        console.log(" ====> ETH BALANCE UPDATE ===> ", userInfo)
      })

  }



  return (
    <div className="App">
      <BrowserRouter>
        <NavBar
          setCurrentUser={setCurrentUser}
          currentUser={currentUser}
          handleLogout={handleLogout}
          ethBalance={ethBalance}
          setEthBalance={setEthBalance}
        />

        
        <Switch>
          <Route path="/NftMint">
            <NftMint currentUser={currentUser} 
            walletNFTs={walletNFTs}
            addToWallet={addToWallet}
            nftContracts={nftContracts}
            ethBalance={ethBalance}
            setEthBalance={setEthBalance} />
          </Route>

          <Route path="/NftWallet">
            <NftWallet currentUser={currentUser} 
            walletNFTs={walletNFTs}
            removeFromWallet={removeFromWallet}
            ethBalance={ethBalance}
            setEthBalance={setEthBalance} />
          </Route>

          <Route path="/NftContractContainer">
            <NftContractContainer           
            currentUser={currentUser}
            nftContracts={nftContracts}
            setNftContracts={setNftContracts}
            />
          </Route>

          <Route path="/">
            <NftList
            currentUser={currentUser}     
            apiData={apiData} 
            addToWallet={addToWallet}     
            />
          </Route>

          <Redirect to="/" />
        </Switch>
      </BrowserRouter>

    </div>
  )
}

export default AuthenticatedApp;
