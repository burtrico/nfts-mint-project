import React, { useState, useEffect } from 'react'
// import { Switch, Route } from 'react-router-dom'
import NftContractList from './NftContractList'
// import NftContractDetail from './NftContractDetail'

function NftContractContainer({currentUser}) {
  const [nftContracts, setNftContracts] = useState([])

  
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
