import React, { useState, useEffect, useCallback } from 'react'
// import { useHistory } from 'react-router-dom'
import { Link } from 'react-router-dom'

function NftContractDetail({ votePlaced, proposalId, voteYesProposal, voteNoProposal, cancelProposal, currentUser }) {
  const [proposal, setProposal] = useState(null)
  // const history = useHistory();

console.log('Proposal ID:',proposalId)

  const fetchProposalCallback = useCallback(
    () => {
      fetch(`/api/proposals/${proposalId}`, {
        credentials: 'include'
      })
        .then(res => res.json())
        .then(proposal => setProposal(proposal))
    },
    [proposalId],
  )

  useEffect(() => {
    fetchProposalCallback()
  }, [fetchProposalCallback])


  const cancelProposalButton = (proposal) => {
    if (proposal.user_is_creator) {
      return (
        <p>
          <button
            onClick={handleCancel}>Cancel Proposal</button>
        </p>
      )
    }
  }

  const handleCancel = (e) => {
    cancelProposal(proposal.id);
    // history.push('/api/proposals')
  }

  // const find_vote = (proposal) => { 
  //   const user_vote = proposal.votes.map( vote => vote.user_id === currentUser.id)
  //   if (user_vote.length > 0) {true}
  //   else {false}
  // }

console.log("SEE VOTES HERE:",proposal.votes)

  const voteYesButton = () => {
    if (proposal.vote) {
      // return <button onClick={() => removeRsvpToProposal(proposal.id)}>Cancel RSVP</button>
      return <p>Vote Confirmed</p>
    } else {
      return <button onClick={() => voteYesProposal(proposalId)}>Vote YES for Proposal</button>
    }
  }

  const voteNoButton = () => {
    if (proposal.vote) {
      // return <button onClick={() => removeRsvpToProposal(proposal.id)}>Cancel RSVP</button>
      return <p>Vote Confirmed</p>
    } else {
      return <button onClick={() => voteNoProposal(proposalId)}>Vote NO for Proposal</button>
    }
  }

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
  
  console.log('LOADED:',proposal)

  if(!proposal) { return <div></div>}
  return (
    <div>
      <h1>{proposal.title}</h1>
      <p>Status: {proposal.status}</p>
      {cancelProposalButton(proposal)}
      <small>DAO: {proposal.token}</small>
      <small>Author: {proposal.author}</small>
      <p>{proposal.description}</p>
      <p>Start Date: {proposal.start_date}</p>
      <p>End Date: {proposal.end_date}</p>
      <br/>
      <p>Votes to Approve: {proposal.approve}</p>
      <p>Votes to Deny: {proposal.deny}</p>
      <br/>
      <p>{voteYesButton(proposal)}</p>
      <p>{voteNoButton(proposal)}</p>
      <br/>
      <ul>
        {proposal.votes.map(vote => (
          <li key={vote.id}>{vote.user_id} -- {vote.vote_to_approve ? "APPROVE" : "DENY"} -- {vote.count} token votes</li>
        ))}
      </ul>

    </div>
  )
}

export default NftContractDetail
