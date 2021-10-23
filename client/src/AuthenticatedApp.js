import './App.css';
import ReactDOM from "react-dom";
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
  const [loading, setLoading] = useState(false);
  // const history = useHistory()
  
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
  


  const addToWallet = (nftToAdd) => {
      const addFilter = walletNFTs.filter(nftCard => nftCard === nftToAdd)
      if (addFilter.length < 1) {

          const postObj = {
              method: 'POST',
              headers: {
                "Content-Type": "application/json",
                Accept: "application/json" },
                  body: JSON.stringify(nftToAdd)
              }
              
              fetch('/api/nfts', postObj)
              .then(resp => resp.json())
              .then(nftObj =>
                  setWalletNFTs([...walletNFTs, nftObj])
              )
  }}

  const removeFromWallet =(nftToRemove)=> {
    const removeFilter = walletNFTs.filter(nftCard => nftCard !== nftToRemove)
    setWalletNFTs(removeFilter)
    fetch(`/api/nfts/${nftToRemove.id}`, {method: 'DELETE'})
  }

  useEffect( ()=>  {
    const collections = ['cryptopunks']
    // 'boredapeyachtclub', 'pudgypenguins', 'guttercatgang'
    const get = {method: 'GET'};

        let completeNftArray = [];

    collections.forEach(collection => { console.log(collection)
            
        fetch(`https://api.opensea.io/api/v1/assets?order_direction=asc&offset=0&limit=10&collection=${collection}`, get)     
        .then(response => response.json())
        .then(nftArray => {
            console.log(nftArray.assets)
                nftArray.assets.forEach(eachNFT =>{
                    
                        // Had to remove one NFT where an image would not load
                        if(eachNFT.name !== "CryptoPunk #10000") {

                        completeNftArray.push(eachNFT) }
                    })                    
                console.log("NOW:  ", completeNftArray)
            })
        .catch(err => console.error(err))
        
        setApiData(completeNftArray);  
        // setLoading(true);

    })
    // Set initial wallet cards:
    // fetch('/api/nfts')
    // .then(resp => resp.json())
    // .then(walletArray => {
    //     setWalletNFTs(walletArray)
    // })

  },[])

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
        { console.log(walletNFTs) }

        {!loading ? <h1>Loading...</h1> : <></>}
        
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

          <Redirect to="/"/>
        </Switch>
      </BrowserRouter>
      <div class="footer">
        <img  src={Powered} alt="powered by"/>
            
        <a target="_blank" href="https://docs.opensea.io/"><img class="openlogo" src={Opensea} alt="Opensea"/></a>
        </div>
    </div>
  );
}

export default AuthenticatedApp;
