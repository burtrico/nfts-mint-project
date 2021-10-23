import React, { useState, useEffect, useCallback } from 'react'
// import { useHistory } from 'react-router-dom'
import { Link } from 'react-router-dom'

function NftContractDetail({ nftContractId, cancelNftContract, currentUser, nftContracts }) {
  const [nftContract, setNftContract] = useState(null)
  


  // const history = useHistory();

console.log('NFT Contract ID:',nftContractId)

  const fetchNftContractCallback = useCallback(
    () => {
      fetch(`/api/nft_contracts/${nftContractId}`, {
        credentials: 'include'
      })
        .then(res => res.json())
        .then(nftContract2 => {
          console.log(' >> Callback:',nftContract2)
          setNftContract(nftContract2)
          // renderNftContract(nftContract)

        })
    },
    [nftContractId],
  )

  useEffect(() => {
    fetchNftContractCallback()
    
    // const filtered = nftContracts.map(eachNftContract => eachNftContract.id == nftContractId)

    // setNftContract(filtered[0])
    // console.log("FILTERED nft contract:",filtered)
  }, [fetchNftContractCallback])


  const cancelNftContractButton = (nftContract3) => {
    if (nftContract3) {
      // .user_is_creator
      return (
        <p>
          <button
            onClick={handleCancel}>Cancel NFT Contract</button>
        </p>
      )
    }
  }

  const handleCancel = (e) => {
    cancelNftContract(nftContract.id);
    // history.push('/api/proposals')
  }

  // const find_vote = (proposal) => { 
  //   const user_vote = proposal.votes.map( vote => vote.user_id === currentUser.id)
  //   if (user_vote.length > 0) {true}
  //   else {false}
  // }




  // const rsvpButton = (proposal) => {
  //   if (proposal.user_proposal) {
  //     return (
  //       <button
  //         onClick={() => {
  //           removeRsvpToProposal(proposal.id).then(() => fetchProposalCallback())
  //         }
  //       }>
  //         Cancel RSVP
  //       </button >
  //     )
  //   } else {
  //     return (
  //       <button
  //         onClick={() => {
  //           rsvpToProposal(proposal.id).then(() => fetchProposalCallback())
  //         }
  //       }>
  //         RSVP for Proposal
  //       </button>
  //     )
  //   }
  // }
  
  console.log('LOADED NFT Contract:',nftContract)

  // if(!nftContract) { return <div>
  //           {/* <<NavLink
  //               to="/nft_contracts"
  //               exact
  //               style={linkStyles}
  //               activeStyle={{
  //               background: "white",
  //               color: "black",
  //               }}
  //           >
  //               Back
  //           </NavLink> */}
  // </div>}


  // const renderNftContract = (nftContract) => { 
  //     const manualNftContract = {}
  //     manualNftContract.collection_name = nftContract.collection_name 
  //     manualNftContract.name = nftContract.name
  //     manualNftContract.contract_type = nftContract.contract_type
  //     manualNftContract.contract_address = nftContract.contract_address

  //     manualNftContract.image_url = nftContract.image_url
  //     manualNftContract.drop_date = nftContract.drop_date
  //     manualNftContract.description = nftContract.description
  //     manualNftContract.price_mint = nftContract.price_mint
  //     manualNftContract.creator_royalty = nftContract.creator_royalty
  //     manualNftContract.token_metadata = nftContract.token_metadata
  //     setNftContract(manualNftContract)
  // }

      
  return (
    <div>
      <h1> Loaded </h1>

      {nftContract.collection_name ? <h1>Collection Name: {nftContract.collection_name}</h1> : <br/> }
      {nftContract.name ? <h1>Collection Name: {nftContract.name}</h1> : <br/> }
      <p>Contract Type: {nftContract.contract_type}</p>
      <p>Contract Address: {nftContract.contract_address}</p>
      {cancelNftContractButton(nftContract)}
      <small>Creator: {currentUser}</small>

      <p>Image Url: {nftContract.image_url}</p>
      <p>Drop Date: {nftContract.drop_date}</p>
      <p>Description: {nftContract.description}</p>
      <p>Price Mint: {nftContract.price_mint}</p>
      <p>Creator Royalty: {nftContract.creator_royalty}</p>
      <p>Token Metadata: {nftContract.token_metadata}</p>



      
      <br/>



    </div>
  )
}

// export default NftContract
Detail
