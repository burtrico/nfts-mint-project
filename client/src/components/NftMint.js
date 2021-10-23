import '../index.css';
import Mint from '../images/mint.png';

// Material-UI Imports
import { Grid } from '@material-ui/core';
import { Box } from '@material-ui/core';
import { Container } from '@material-ui/core';
import {useState} from 'react'

function NftMint({walletNFTs, addToWallet}) {

    const [formData, formDataSetter] = useState({
        image_url: "",
        name: "",
        collection: ""
    })
    
    function manageFormData(e) {
        let targetName = e.target.name;
        let targetValue = e.target.value;
    
    const newData = {
        ...formData,
        [targetName]: targetValue
    }
    

        // Capture name and value from target of event
        formDataSetter(newData);
        // Update formData state with new form submission data
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
            name: "",
            collection: ""
        })
        alert("See wallet for your newly minted NFT!")
    }


    return(

        <div class="formmint" id="itemList">
       
          

         
         
            
                  <Container
                  align="center">
                  <Grid
                    align="center"
                    className="nftCard"

                    item xs={3}
                    
                  >
                  <div>
                  <div class="headingwhat"><img src={Mint} alt="What is an NFT?"/></div>
            <form onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    placeholder="Image URL" 
                    name="image_url"
                    className="mintinput"
                    onChange={manageFormData}
                    value={formData.image_url}
                />
                <input 
                    type="text" 
                    placeholder="Name" 
                    name="name"
                    className="mintinput"
                    onChange={manageFormData}
                    value={formData.name}
                />
                <input 
                    type="text" 
                    placeholder="Collection Name" 
                    name="collection"
                    className="mintinput"
                    onChange={manageFormData}
                    value={formData.collection}
                />


                <input 
                    type="submit" 
                    value="Submit"
                    className="addButton"
                />
            </form>
            <p>{formData.image_url}</p>
            <h3>{formData.name}</h3>
            <h3>{formData.collection}</h3>
            
        </div>

                  </Grid>
                  </Container>
                 





        
         
          
      </div>











        
    )
}

export default NftMint;