import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import NftContractDetail from './NftContractDetail'


function NftContractList({ currentUser, nftContracts, cancelNftContract, createNftContract, updateNftContract }) {
  // const now = new Date();
  // now.setMinutes(now.getMinutes() - now.getTimezoneOffset());
  // const [startDate, setStartDate] = useState(now.toISOString().slice(0, 16))

  const [ collectionName, setCollectionName ] = useState('')
  const [ name, setName ] = useState('')
  const [ contractType, setContractType ] = useState('')
  const [ contractAddress, setContractAddress ] = useState('')
  const [ imageUrl, setImageUrl ] = useState('')
  const [ dropDate, setDropDate ] = useState('')
  const [ priceMint, setPriceMint ] = useState('')
  const [ creatorRoyalty, setCreatorRoyalty ] = useState('')
  const [ description, setDescription ] = useState('')
  const [ tokenMetadata, setTokenMetadata ] = useState('')
  const [ nftContractId, setNftContractId ] = useState('')



  // const cancelProposalButton = (proposal) => {
  //   if (proposal.user_is_creator) {
  //     return <button onClick={() => cancelProposal(proposal.id)}>Cancel Proposal</button>
  //   }
  // }

// console.log(">> 1 > currentUser = ",currentUser)
// console.log(">> 2 >> NftContracts = ",nftContracts)

const formData = { collection_name: collectionName,
  name: name,
  contract_type: contractType,
  contract_address: contractAddress,
  image_url: imageUrl,
  drop_date: dropDate,
  price_mint: priceMint,
  creator_royalty: creatorRoyalty,
  description: description,
  token_metadata: tokenMetadata,
  user_id: currentUser.id }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (updateON) { updateNftContract(nftContractId,formData) }
    else { createNftContract(formData) }
    setCollectionName('')
    setName('')
    setContractType('')
    setContractAddress('')
    setImageUrl('')
    setDropDate('')
    setPriceMint('')
    setCreatorRoyalty('')
    setDescription('')
    setTokenMetadata('')
  }
  
  const [updateON, setUpdateON] = useState(false)

  const handleToggle = () => {
    if (updateON) { setUpdateON(false) } 
    else{ setUpdateON(true) }
    // console.log("TOGGLED!!! updateON =",updateON)
}

const cancelNftContractButton = (nftContract3) => {
  if (nftContract3) {
    // .user_is_creator
    return ( <p> <button onClick={handleCancel}>Cancel NFT Contract</button> </p> ) } }

const handleCancel = (e) => {
  console.log("handleCancel e.target.value ===", e.target.value)
  cancelNftContract(nftContract.id);
  // history.push('/api/proposals')
}


// const handleRender = (e) => {
//   renderNftContract(nftContract.id);
//   // history.push('/api/proposals')
// }

// const fetchNftContractCallback = useCallback(
//   () => {
//     fetch(`/api/nft_contracts/${nftContract.id}`, {
//       credentials: 'include'
//     })
//       .then(res => res.json())
//       .then(nftContract => {
//         console.log(' >> Callback:',nftContract)
//         setNftContract(nftContract)
//         // renderNftContract(nftContract)

//       })
//   },
//   [nftContractId],
// )



// const [contractName, setContractName] = useState('')

// const chooseContract = (nameValue) => {
// const selectedContract = nftContracts.find(contract => contract.collection_name === nameValue)
// if (selectedContract) { setNftContract(selectedContract) }
// else { const fungibleContract = nftContracts.find(contract => contract.name === nameValue) 
//   setNftContract(fungibleContract) }
// }

const [nftContract, setNftContract] = useState('')
console.log("N F T CONTRACT = ",nftContract)
// const toggleContract = () => { setIsOpen(!isOpen); }

// const toggleContract = () => { setIsOpen(!isOpen); }


// const renderNftContract = () => {
//   console.log()
//   // if (nftContract) {
//   return (
//     <div>
   

  
//     </div>
//   // )}
//   // else {<><p>Select an NFT Contract to view attributes.</p></>}
//   )
// }



// const resetNftContractName = useCallback(
//   () => {
//     setNftContractName(e.target.value)

  return (
    <div className="contractDivContainer">
         
        <div className="contractDivList">
          <h1>NFT Contracts</h1>
          <ul>
            {nftContracts && nftContracts.map(nftContract => (<li  key={nftContract.id}><button className="nftContractButton" onClick={()=>setNftContract(nftContract)}>{nftContract.collection_name}{nftContract.name}
            </button> -- Drop Date: {nftContract.drop_date} -- Contract ID: {nftContract.id}</li> ) ) }
          </ul>
          {/* <input type="select" list="cNames" value={contractName} 
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

        

        {/* {renderNftContract()} */}

        {nftContract && <NftContractDetail
          content={<>
              {nftContract.collection_name ? <h1>Collection Name: {nftContract.collection_name}</h1> : <br/> }
              {nftContract.name ? <h1>Collection Name: {nftContract.name}</h1> : <br/> }
              <p>Contract Type: {nftContract.contract_type}</p>
              <p>Contract Address: {nftContract.contract_address}</p>
              {cancelNftContractButton(nftContract)}
              <small>Creator: {nftContract.user.ens_domain}</small>
          
              <p>Image Url: {nftContract.image_url}</p>
              <p>Drop Date: {nftContract.drop_date}</p>
              <p>Description: {nftContract.description}</p>
              <p>Price Mint: {nftContract.price_mint}</p>
              <p>Creator Royalty: {nftContract.creator_royalty}</p>
              <p>Token Metadata: {nftContract.token_metadata}</p>
          </>}
        // handleClose={togglePopup}
          nftContract={nftContract}
          // handleCancel={handleCancel}
          // cancelNftContractButton={cancelNftContractButton}
          />}
        {!nftContract && <><p>Select an NFT Contract to view attributes.</p></>}

        </div>
        <div className="contractDivForm">
      <h3>Create or Update an NFT Contract</h3>
      <button id="create-update-toggle" onClick={handleToggle}> Click here to Toggle to {updateON ? "CREATE" : "UPDATE"}</button>
      <form onSubmit={handleSubmit}>

        <p>
          <label htmlFor="collection_name"> Collection Name (if applicable)</label>
          <input
            type="text"
            value={collectionName}
            onChange={(e) => setCollectionName(e.target.value)}
            name="token"
          />
        </p>

        <p>
          <label htmlFor="name">Name (if applicable) </label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            name="name"
          />
        </p>

        <p>
          <label htmlFor="contract_type">Contract Type </label>
          <input
            type="text"
            value={contractType}
            list="cType"
            onChange={(e) => setContractType(e.target.value)}
            name="contract_type"
          />
          <datalist id="cType">
            {["fungible","non-fungible"].map(type => <option>{type}</option>)}
          </datalist>
        </p>

        <p>
          <label htmlFor="contract_address">Contract Address </label>
          <input
            type="text"
            value={contractAddress}
            onChange={(e) => setContractAddress(e.target.value)}
            name="contract_address"
          />
        </p>

        <p>
          <label htmlFor="image_url">Image URL </label>
          <input
            type="text"
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
            name="image_url"
          />
        </p>

        <p>
          <label htmlFor="drop_date"> Drop Date </label>
          <input
            type="datetime"
            value={dropDate}
            onChange={(e) => setDropDate(e.target.value)}
            name="drop_date"
          />
        </p>

        <p>
          <label htmlFor="price_mint"> Mint Price (Ethereum) </label>
          <input
          type="decimal"
            value={priceMint}
            onChange={(e) => setPriceMint(e.target.value)}
            name="price_mint"
          />
        </p>

        <p>
          <label htmlFor="creator_royalty"> Creator Royalty </label>
          <input
          type="decimal"
            value={creatorRoyalty}
            onChange={(e) => setCreatorRoyalty(e.target.value)}
            name="creator_royalty"
          />
        </p>

        <p>
          <label htmlFor="description"> Description </label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            name="description"
          />
        </p>

        <p>
          <label htmlFor="token_metadata">Token MetaData URL</label>
          <input
            type="text"
            value={tokenMetadata}
            onChange={(e) => setTokenMetadata(e.target.value)}
            name="token_metadata"
          />
        </p>

        <p>
          <label htmlFor="nft_contract.id">Contract ID (only for Updating)</label>
          <input
            type="integer"
            value={nftContractId}
            list="cIDs"
            onChange={(e) => setNftContractId(e.target.value)}
            name="nft_contract.id"
          />
            <datalist id="cIDs">
            {nftContracts.map(nftContract => <option>{nftContract.id}</option>)}
          </datalist>
        </p>

        {/* <p>
          <label htmlFor="start_date"> Start Date </label>
          <input
            type="datetime-local"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
            name="start_date"
          />
        </p> */}

        {" "}<button type="submit">{updateON ? "UPDATE NFT" : "CREATE NFT"}</button>
      </form>
      </div>

    </div>
  )
}




export default NftContractList
