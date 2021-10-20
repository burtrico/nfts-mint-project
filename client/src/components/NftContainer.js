import React from "react";
import ReactDOM from "react-dom";
import {useState , useEffect} from "react";
import { BrowserRouter , Route , NavLink , Switch } from "react-router-dom";
import NftList from "./NftList";
import NftWallet from "./NftWallet";
import NftMint from "./NftMint";
import NavBar from "./NavBar";
import Opensea from '../images/opensea.png';
import Powered from '../images/powered.png';


function NftContainer(){

    const [data, setData] = useState([]);
    const [walletNFTs,setWalletNFTs] = useState( [] );
    const [loading, setLoading] = useState(false);

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
                
                fetch('http://localhost:3000/NFTs', postObj)
                .then(resp => resp.json())
                .then(nftObj =>
                    setWalletNFTs([...walletNFTs, nftObj])
                )
    }}

    const removeFromWallet =(nftToRemove)=> {
        const removeFilter = walletNFTs.filter(nftCard => nftCard !== nftToRemove)
        setWalletNFTs(removeFilter)
        fetch(`http://localhost:3000/NFTs/${nftToRemove.id}`, {method: 'DELETE'})
    }
      
    //   function destroyHandler(botObj) {
    //     const destroyFilter1 = myBotArmy.filter(botCard => botCard !== botObj)
    //     setMyBotArmy(destroyFilter1)
        

    useEffect( ()=>  {
        const collections = ['cryptopunks', 'boredapeyachtclub', 'pudgypenguins', 'guttercatgang']
        const get = {method: 'GET'};

            let completeNftArray = [];

        collections.forEach(collection => { console.log(collection)
                
            fetch(`https://api.opensea.io/api/v1/assets?order_direction=asc&offset=0&limit=25&collection=${collection}`, get)     
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
            
            setData(completeNftArray);  
            setLoading(true);

        })
        // Set initial wallet cards:
        fetch('http://localhost:3000/NFTs')
        .then(resp => resp.json())
        .then(walletArray => {
            setWalletNFTs(walletArray)
        })


    },[])

    if (loading === false) { return <h1>Loading...</h1>; }
    
   
  
    // Passed as a prop (handleAddCard) to <NFTmint />
    // function handleAddCard(newNFT) {
      
    //   const newNFTsArray = [...walletNFTs, newNFT]
      
    //   setWalletNFTs(newNFTsArray)
    // }
    

    return(
        <div class="pageframe">
        
        <BrowserRouter>
        <NavBar/>


        { console.log(walletNFTs) }

            <Switch>

                <Route path="/NFTmint">
                    <NftMint
                    walletNFTs={walletNFTs}
                    handleAddCard={addToWallet}
                    />

                </Route>

                <Route path="/NftWallet">
                    <NftWallet
                    walletNFTs={walletNFTs}
                    removeFromWallet={removeFromWallet}
                    />
                </Route>

                
                {/* <Route exact path="/">
                    <NFTlist
                    data={data} 
                    addToWallet={addToWallet}
                    />
                </Route> */}

                {/* <Route exact path="/NFTwhat">
                    <NftWhat
                    data={data} 
                    addToWallet={addToWallet}
                    />
                </Route> */}

                <Route path="/">
                    <NftList
                    data={data} 
                    addToWallet={addToWallet}
                    />
                </Route>

            </Switch>
        </BrowserRouter>
        <div class="footer">
        <img  src={Powered} alt="powered by"/>
            
            <a target="_blank" href="https://docs.opensea.io/"><img class="openlogo" src={Opensea} alt="Opensea"/></a></div>
        </div>
        
        )
  
}

export default NftContainer;