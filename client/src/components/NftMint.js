import '../index.css';
import Mint from '../images/mint.png';

// Material-UI Imports
import { Grid } from '@material-ui/core';
import { Box } from '@material-ui/core';
import { Container } from '@material-ui/core';
import {useState} from 'react'


function NftMint({walletNFTs, addToWallet, nftContracts}) {

    const [formData, formDataSetter] = useState({
        quantity: "",
        price_total: ""
    })

    const [contractToMint, setContractToMint] = useState({})
    const [ mintPrice, setMintPrice] = useState('')
    
    function renderMintPrice(e) {
        console.log("SELECTED CONTRACT VALUE = ",e.target.value)
        setContractToMint(e.target.value)
        setMintPrice(e.target.value.price_mint)
    }
    
    function manageFormData(e) {
        let targetName = e.target.name;
        let targetValue = e.target.value;
        
    const newData = {
        ...formData,
        [targetName]: targetValue
    }
        // Capture name and value from target of event
        formDataSetter(newData); 
    }




        // Create a callback function to handle onSubmit behavior for our controlled form
    function handleSubmit(e) {
            // console.log("handleSubmit fired");
        let newId = parseInt(walletNFTs[walletNFTs.length - 1].id) + 1;

            // Prevent default form submission behavior
        e.preventDefault()
        
            // Create newCard JS object with formData and generate
            // a unique ID for each new object
        let newCard = {
            id: newId,
                // title: formData.title,
                // content: formData.content,
            ...formData,

        }

            // Use handleAddCard from props to add the newCard JS object
            // to the existing array of Card objects (cards)
        addToWallet(newCard);

            // Clear out input values upon form submission using formDataSetter
        formDataSetter({
            //    ...formData,
            image_url: "",
            name: ""
        })
        setContractToMint({})
        alert("See wallet for your newly minted NFT!")
    }


    return(

        <div class="mintDiv" id="itemList">
       
          

         
         
            
                  <Container
                  align="center">
                  <Grid
                    align="center"
                    className="nftCard"

                    item xs={3}
                    
                  >
                  <div>
                  <div class="headingwhat"><img src={Mint} alt="What is an NFT?"/></div>

            {/* <select type="text" list="cNames" value={contractName} 
                onChange={e => {
                // setNftContractName(e.target.value)
                chooseContract(e.target.value)
                console.log("HERE!!!!!!!!!",nftContract)
                // renderNftContract()
                }}
                name="nftContractList" 
            />
            <datalist id="cNames">
                {nftContracts.map(nftContract => <option key={nftContract.id} value={nftContract.collection_name ? nftContract.collection_name : nftContract.name}>
                {nftContract.collection_name ? nftContract.collection_name : nftContract.name}</option>)}
            </datalist> */}



            <form onSubmit={handleSubmit}>

                <select 
                    type="text" 
                    name="nft_contract_mint"
                    // list="cNames"
                    className="mintinput"
                    // onChange={manageNftContract}
                    onChange={renderMintPrice}
                    value={contractToMint}
                >
            {/* <datalist id="cNames"> */}
                <option value="">Choose a Collection</option>
                {nftContracts.map(nftContract => {
                return( <option key={nftContract.id} value={nftContract}> {nftContract.collection_name ? nftContract.collection_name : nftContract.name} </option> )} 
                )}
            {/* </datalist> */}
            </select>

            <p>Mint Price per NFT = {mintPrice}</p>

            <input 
                    type="integer" 
                    placeholder="Quantity" 
                    name="quantity"
                    className="mintinput"
                    onChange={manageFormData}
                    value={formData.quantity}
                />

            <input 
                type="decimal" 
                placeholder="Total Price (ETH)" 
                name="price_total"
                className="mintinput"
                onChange={manageFormData}
                value={formData.price_total}
            />

                <input 
                    type="submit" 
                    value="Submit"
                    className="addButton"
                />
            </form>
            <p>{formData.image_url}</p>
            <h3>{formData.name}</h3>
            {/* <h3>{formData.collection}</h3> */}
            
        </div>

                  </Grid>
                  </Container>
                 

      </div>        
    )
}

export default NftMint;