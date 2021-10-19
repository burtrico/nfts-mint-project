import React, { useState, useEffect } from 'react'
import { Switch, Route } from 'react-router-dom'
import NftContractList from './NftContractList'
import NftContractDetail from './NftContractDetail'

function NftContractContainer({currentUser}) {
  const [nftContracts, setNftContracts] = useState([])
  // const [votePlaced, setVotePlaced] = useState(false)
  // const [groups, setGroups] = useState([])
  
  useEffect(() => {
    fetch(`/nft_contracts`, {
      credentials: 'include'
    })
      .then(res => res.json())
      .then(nftContracts => {
        setnftContracts(nftContracts)
      console.log(nftContracts)
      })
    // fetch(`/api/groups`, {
    //   credentials: 'include'
    // })
    //   .then(res => res.json())
    //   .then(groups => setGroups(groups))
  },[])

  // const removeRsvpToProposal = (proposalId) => {
  //   const proposal = proposals.find(proposal => proposal.id === proposalId)
  //   return fetch(`/api/user_proposals/${proposal.user_proposal.id}`, {
  //     method: "DELETE",
  //     credentials: 'include'
  //   })
  //     .then(res => {
  //       if (res.ok) {
  //         // if the Proposal is the one we just removed an rsvp 
  //         // for, set its user_Proposal property in state to 
  //         // undefined; If not, leave the Proposal as it is
  //         const updatedProposals = proposals.map((proposal) => {
  //           if (proposal.id === proposalId) {
  //             return {
  //               ...proposal,
  //               user_proposal: undefined
  //             }
  //           } else {
  //             return proposal
  //           }
  //         })
  //         setProposals(updatedProposals)
  //       }
  //     })
  // }

  const cancelProposal = (proposalId) => {
    return fetch(`/proposals/${proposalId}`, {
      method: "DELETE",
      credentials: 'include'
    })
      .then(res => {
        if (res.ok) {
          const updatedProposals = proposals.filter(proposal => proposal.id !== proposalId)
          setProposals(updatedProposals)
        }
      })
  }

  const voteYesProposal = (proposalId) => {
    return fetch('/votes', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      credentials: 'include',
      body: JSON.stringify({
        user_id: currentUser.id,
        proposal_id: proposalId,
        // Need to change this later:
        token: "LYRA",
        count: 17000,
        vote_to_approve: true
      })
    })
      .then(res => {
        if (res.ok) {
          return res.json()
        } else {
          return res.json().then(errors => Promise.reject(errors))
        }
      })
      .then(userVote => {
        // if the Proposal is the one we just voted on,
        // add a user_proposal property in state and set
        // it to the userProposal; if not, leave it as is
        const updatedProposals = proposals.map((proposal) => {

          if (proposal.id === proposalId) {
            return {
              ...proposal,
              vote: userVote
            }
          } else {
            return proposal
          }
        
        
      })
        // setVotePlaced(true)
        console.log(userVote)
        setProposals(updatedProposals)
      
  })
  }



  const voteNoProposal = (proposalId) => {
    return fetch('/votes', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      credentials: 'include',
      body: JSON.stringify({
        user_id: currentUser.id,
        proposal_id: proposalId,
        // Need to change this later:
        token: "LYRA",
        count: 17000,
        vote_to_approve: false
      })
    })
      .then(res => {
        if (res.ok) {
          return res.json()
        } else {
          return res.json().then(errors => Promise.reject(errors))
        }
      })
      .then(userVote => {
        // if the Proposal is the one we just voted on,
        // add a user_proposal property in state and set
        // it to the userProposal; if not, leave it as is
        const updatedProposals = proposals.map((proposal) => {
          if (proposal.id === proposalId) {
            return {
              ...proposal,
              vote: userVote
            }
          } else {
            return proposal
          }
        })
        console.log(userVote)
        setProposals(updatedProposals)
      })
  }

  const createProposal = (formData) => {
    return fetch("/proposals", {
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
      .then(proposal => {
        setProposals(proposals.concat(proposal))
      })
  }

  return (
    <div>
      {/* <Switch> */}
        <Route
          exact
          path="/api/proposals"
        >
          <NftContractList
            nftContracts={nftContracts}
            currentUser={currentUser}
            cancelProposal={cancelNftContract}
            // removeRsvpToProposal={removeRsvpToProposal}
            createNftContract={createNftContract}
            updateNftContract={createNftContract}
          />
        </Route>
        <Route
          exact
          path="/api/nft_contracts/:id"
          render={({ match }) => {
             // !!!!  ^^^ !!!!!
            return <NftContractDetail
              currentUser={currentUser}
              NftContractId={match.params.id}
              cancelNftContract={cancelNftContract}
            />
          }}
        />
      {/* </Switch> */}
    </div>
  )
}

export default NftContractContainer
