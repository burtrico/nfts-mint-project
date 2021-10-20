import React, { useState } from 'react'
import { Link } from 'react-router-dom'

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

console.log(">>>>> currentUser = ",currentUser)

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
  

  // console.log(">>>>PROPOSALS:",proposals)


  // const token_metadata = "eyJuYW1lIjogIkJhZyAjMSIsICJkZXNjcmlwdGlvbiI6ICJMb290IGlzIHJhbmRvbWl6ZWQgYWR2ZW50dXJlciBnZWFyIGdlbmVyYXRlZCBhbmQgc3RvcmVkIG9uIGNoYWluLiBTdGF0cywgaW1hZ2VzLCBhbmQgb3RoZXIgZnVuY3Rpb25hbGl0eSBhcmUgaW50ZW50aW9uYWxseSBvbWl0dGVkIGZvciBvdGhlcnMgdG8gaW50ZXJwcmV0LiBGZWVsIGZyZWUgdG8gdXNlIExvb3QgaW4gYW55IHdheSB5b3Ugd2FudC4iLCAiaW1hZ2UiOiAiZGF0YTppbWFnZS9zdmcreG1sO2Jhc2U2NCxQSE4yWnlCNGJXeHVjejBpYUhSMGNEb3ZMM2QzZHk1M015NXZjbWN2TWpBd01DOXpkbWNpSUhCeVpYTmxjblpsUVhOd1pXTjBVbUYwYVc4OUluaE5hVzVaVFdsdUlHMWxaWFFpSUhacFpYZENiM2c5SWpBZ01DQXpOVEFnTXpVd0lqNDhjM1I1YkdVK0xtSmhjMlVnZXlCbWFXeHNPaUIzYUdsMFpUc2dabTl1ZEMxbVlXMXBiSGs2SUhObGNtbG1PeUJtYjI1MExYTnBlbVU2SURFMGNIZzdJSDA4TDNOMGVXeGxQanh5WldOMElIZHBaSFJvUFNJeE1EQWxJaUJvWldsbmFIUTlJakV3TUNVaUlHWnBiR3c5SW1Kc1lXTnJJaUF2UGp4MFpYaDBJSGc5SWpFd0lpQjVQU0l5TUNJZ1kyeGhjM005SW1KaGMyVWlQaUpIY21sdElGTm9iM1YwSWlCSGNtRjJaU0JYWVc1a0lHOW1JRk5yYVd4c0lDc3hQQzkwWlhoMFBqeDBaWGgwSUhnOUlqRXdJaUI1UFNJME1DSWdZMnhoYzNNOUltSmhjMlVpUGtoaGNtUWdUR1ZoZEdobGNpQkJjbTF2Y2p3dmRHVjRkRDQ4ZEdWNGRDQjRQU0l4TUNJZ2VUMGlOakFpSUdOc1lYTnpQU0ppWVhObElqNUVhWFpwYm1VZ1NHOXZaRHd2ZEdWNGRENDhkR1Y0ZENCNFBTSXhNQ0lnZVQwaU9EQWlJR05zWVhOelBTSmlZWE5sSWo1SVlYSmtJRXhsWVhSb1pYSWdRbVZzZER3dmRHVjRkRDQ4ZEdWNGRDQjRQU0l4TUNJZ2VUMGlNVEF3SWlCamJHRnpjejBpWW1GelpTSStJa1JsWVhSb0lGSnZiM1FpSUU5eWJtRjBaU0JIY21WaGRtVnpJRzltSUZOcmFXeHNQQzkwWlhoMFBqeDBaWGgwSUhnOUlqRXdJaUI1UFNJeE1qQWlJR05zWVhOelBTSmlZWE5sSWo1VGRIVmtaR1ZrSUV4bFlYUm9aWElnUjJ4dmRtVnpQQzkwWlhoMFBqeDBaWGgwSUhnOUlqRXdJaUI1UFNJeE5EQWlJR05zWVhOelBTSmlZWE5sSWo1T1pXTnJiR0ZqWlNCdlppQkZibXhwWjJoMFpXNXRaVzUwUEM5MFpYaDBQangwWlhoMElIZzlJakV3SWlCNVBTSXhOakFpSUdOc1lYTnpQU0ppWVhObElqNUhiMnhrSUZKcGJtYzhMM1JsZUhRK1BDOXpkbWMrIn0="
  // console.log(token_metadata.json())
  const [updateON, setUpdateON] = useState(false)

  const handleToggle = () => {
    setUpdateON(!updateON)
}

  return (
    <div>
      <h1>NFT Contracts</h1>
      <ul>
      {nftContracts.map(nftContract => (<li key={nftContract.id}><Link to={`/nft_contracts/${nftContract.id}`}>{nftContract.collection_name ? nftContract.collection_name : nftContract.name}</Link> -- Drop Date: {nftContract.drop_date} -- Contract ID: {nftContract.id}</li> 
      ))}
      </ul>
      <h3>Create or Update an NFT Contract</h3>
      <button id="create-update-toggle" onSubmit={handleToggle}> Click here to Toggle to {updateON ? "UPDATE" : "CREATE"}</button>
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
            type="datetime-local"
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
  )
}

export default NftContractList
