import React, { useState, useEffect } from 'react'
import { Switch, Route } from 'react-router-dom'
import NftContractList from './NftContractList'
// import NftContractDetail from './NftContractDetail'

function NftContractContainer({currentUser}) {
  const [nftContracts, setNftContracts] = useState([])
  // const [votePlaced, setVotePlaced] = useState(false)
  // const [groups, setGroups] = useState([])
  
  useEffect(() => {
    fetch(`/api/nft_contracts`, {
      credentials: 'include'
    })
      .then(res => res.json())
      .then(nftContracts => {
        setNftContracts(nftContracts)
      console.log(nftContracts)
      })
  },[])

  // const removeRsvpToNftContract = (pnftContractId) => {
  //   const pnftContract = pnftContracts.find(pnftContract => pnftContract.id === pnftContractId)
  //   return fetch(`/api/user_pnftContracts/${pnftContract.user_pnftContract.id}`, {
  //     method: "DELETE",
  //     credentials: 'include'
  //   })
  //     .then(res => {
  //       if (res.ok) {
  //         // if the PnftContract is the one we just removed an rsvp 
  //         // for, set its user_PnftContract property in state to 
  //         // undefined; If not, leave the PnftContract as it is
  //         const updatedPnftContracts = pnftContracts.map((pnftContract) => {
  //           if (pnftContract.id === pnftContractId) {
  //             return {
  //               ...pnftContract,
  //               user_pnftContract: undefined
  //             }
  //           } else {
  //             return pnftContract
  //           }
  //         })
  //         setPnftContracts(updatedPnftContracts)
  //       }
  //     })
  // }

  const cancelNftContract = (nftContractId) => {
    return fetch(`/api/nftContracts/${nftContractId}`, {
      method: "DELETE",
      credentials: 'include'
    })
      .then(res => {
        if (res.ok) {
          const updatedNftContracts = nftContracts.filter(nftContract => nftContract.id !== nftContractId)
          setNftContracts(updatedNftContracts)
        }
      })
  }

  // const voteYesPnftContract = (pnftContractId) => {
  //   return fetch('/votes', {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json'
  //     },
  //     credentials: 'include',
  //     body: JSON.stringify({
  //       user_id: currentUser.id,
  //       pnftContract_id: pnftContractId,
  //       // Need to change this later:
  //       token: "LYRA",
  //       count: 17000,
  //       vote_to_approve: true
  //     })
  //   })
  //     .then(res => {
  //       if (res.ok) {
  //         return res.json()
  //       } else {
  //         return res.json().then(errors => Promise.reject(errors))
  //       }
  //     })
  //     .then(userVote => {
  //       // if the PnftContract is the one we just voted on,
  //       // add a user_pnftContract property in state and set
  //       // it to the userPnftContract; if not, leave it as is
  //       const updatedPnftContracts = pnftContracts.map((pnftContract) => {

  //         if (pnftContract.id === pnftContractId) {
  //           return {
  //             ...pnftContract,
  //             vote: userVote
  //           }
  //         } else {
  //           return pnftContract
  //         }
        
        
  //     })
  //       // setVotePlaced(true)
  //       console.log(userVote)
  //       setPnftContracts(updatedPnftContracts)
      
  // })
  // }



  

  const createNftContract = (formData) => {
    return fetch("/api/nft_contracts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      credentials: 'include',
      body: JSON.stringify(formData)
    })
      .then(res => {
        if (res.ok) {
          return res.json()
        } else {
          return res.json().then(errors => Promise.reject(errors))
        }
      })
      .then(nftContract => {
        setNftContracts(nftContracts.concat(nftContract))
      })
  }

  const updateNftContract = (nftContractId, formData) => {
    return fetch(`/api/nft_contracts/${nftContractId}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      credentials: 'include',
      body: JSON.stringify(formData)
    })
      .then(res => {
        if (res.ok) {
          return res.json()
        } else {
          return res.json().then(errors => Promise.reject(errors))
        }
      })
      .then(nftContract => {
        const otherNftContracts = nftContracts.filter(eachNftContract => eachNftContract.id !== nftContractId)
        setNftContracts(otherNftContracts.concat(nftContract))
      })
  }

  return (
    <div className="NftContractContainerDiv">
        {/* <Switch> */}

          <NftContractList
            nftContracts={nftContracts}
            currentUser={currentUser}
            cancelNftContract={cancelNftContract}
            createNftContract={createNftContract}
            updateNftContract={updateNftContract}
          />

        {/* <Route
          exact
          path="/nft_contracts/:id"
          render={({ match }) => {
            return <NftContractDetail
              currentUser={currentUser}
              nftContractId={match.params.id}
              cancelNftContract={cancelNftContract}
            />
          }}
        /> */}

        {/* </Switch> */}
    </div>
  )
}

export default NftContractContainer
