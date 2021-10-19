import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function NftContractList({ currentUser, proposals, cancelProposal, createProposal, updateProposal }) {
  const now = new Date();
  now.setMinutes(now.getMinutes() - now.getTimezoneOffset());
  const [token, setToken] = useState('')
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  // const [location, setLocation] = useState('')
  const [startDate, setStartDate] = useState(now.toISOString().slice(0, 16))
  const [endDate, setEndDate] = useState('')

  // const cancelProposalButton = (proposal) => {
  //   if (proposal.user_is_creator) {
  //     return <button onClick={() => cancelProposal(proposal.id)}>Cancel Proposal</button>
  //   }
  // }

console.log(">>>>> currentUser = ",currentUser)

  const handleSubmit = (e) => {
    e.preventDefault()
    createProposal({
      token: token,
      title: title,
      description: description,
      active: true,
      start_date: startDate,
      end_date: endDate,
      user: currentUser
    })
    setToken('')
    setTitle('')
    setDescription('')
    setStartDate('')
    setEndDate('')
  }
  
  console.log(">>>>PROPOSALS:",proposals)


  // const token_metadata = "eyJuYW1lIjogIkJhZyAjMSIsICJkZXNjcmlwdGlvbiI6ICJMb290IGlzIHJhbmRvbWl6ZWQgYWR2ZW50dXJlciBnZWFyIGdlbmVyYXRlZCBhbmQgc3RvcmVkIG9uIGNoYWluLiBTdGF0cywgaW1hZ2VzLCBhbmQgb3RoZXIgZnVuY3Rpb25hbGl0eSBhcmUgaW50ZW50aW9uYWxseSBvbWl0dGVkIGZvciBvdGhlcnMgdG8gaW50ZXJwcmV0LiBGZWVsIGZyZWUgdG8gdXNlIExvb3QgaW4gYW55IHdheSB5b3Ugd2FudC4iLCAiaW1hZ2UiOiAiZGF0YTppbWFnZS9zdmcreG1sO2Jhc2U2NCxQSE4yWnlCNGJXeHVjejBpYUhSMGNEb3ZMM2QzZHk1M015NXZjbWN2TWpBd01DOXpkbWNpSUhCeVpYTmxjblpsUVhOd1pXTjBVbUYwYVc4OUluaE5hVzVaVFdsdUlHMWxaWFFpSUhacFpYZENiM2c5SWpBZ01DQXpOVEFnTXpVd0lqNDhjM1I1YkdVK0xtSmhjMlVnZXlCbWFXeHNPaUIzYUdsMFpUc2dabTl1ZEMxbVlXMXBiSGs2SUhObGNtbG1PeUJtYjI1MExYTnBlbVU2SURFMGNIZzdJSDA4TDNOMGVXeGxQanh5WldOMElIZHBaSFJvUFNJeE1EQWxJaUJvWldsbmFIUTlJakV3TUNVaUlHWnBiR3c5SW1Kc1lXTnJJaUF2UGp4MFpYaDBJSGc5SWpFd0lpQjVQU0l5TUNJZ1kyeGhjM005SW1KaGMyVWlQaUpIY21sdElGTm9iM1YwSWlCSGNtRjJaU0JYWVc1a0lHOW1JRk5yYVd4c0lDc3hQQzkwWlhoMFBqeDBaWGgwSUhnOUlqRXdJaUI1UFNJME1DSWdZMnhoYzNNOUltSmhjMlVpUGtoaGNtUWdUR1ZoZEdobGNpQkJjbTF2Y2p3dmRHVjRkRDQ4ZEdWNGRDQjRQU0l4TUNJZ2VUMGlOakFpSUdOc1lYTnpQU0ppWVhObElqNUVhWFpwYm1VZ1NHOXZaRHd2ZEdWNGRENDhkR1Y0ZENCNFBTSXhNQ0lnZVQwaU9EQWlJR05zWVhOelBTSmlZWE5sSWo1SVlYSmtJRXhsWVhSb1pYSWdRbVZzZER3dmRHVjRkRDQ4ZEdWNGRDQjRQU0l4TUNJZ2VUMGlNVEF3SWlCamJHRnpjejBpWW1GelpTSStJa1JsWVhSb0lGSnZiM1FpSUU5eWJtRjBaU0JIY21WaGRtVnpJRzltSUZOcmFXeHNQQzkwWlhoMFBqeDBaWGgwSUhnOUlqRXdJaUI1UFNJeE1qQWlJR05zWVhOelBTSmlZWE5sSWo1VGRIVmtaR1ZrSUV4bFlYUm9aWElnUjJ4dmRtVnpQQzkwWlhoMFBqeDBaWGgwSUhnOUlqRXdJaUI1UFNJeE5EQWlJR05zWVhOelBTSmlZWE5sSWo1T1pXTnJiR0ZqWlNCdlppQkZibXhwWjJoMFpXNXRaVzUwUEM5MFpYaDBQangwWlhoMElIZzlJakV3SWlCNVBTSXhOakFpSUdOc1lYTnpQU0ppWVhObElqNUhiMnhrSUZKcGJtYzhMM1JsZUhRK1BDOXpkbWMrIn0="
  // console.log(token_metadata.json())

  return (
    <div>
      <h1>Proposals</h1>
      <ul>
      {proposals.map(mproposal => (<li key={mproposal.id}><Link to={`/api/proposals/${mproposal.id}`}>{mproposal.title}</Link> --- DAO: {mproposal.token} -- Author: {mproposal.author} </li> 
      ))}
      </ul>
      <h3>Add Proposal</h3>
      <form onSubmit={handleSubmit}>
        <p>
          <label htmlFor="token">DAO Token </label>
          <input
            type="text"
            value={token}
            onChange={(e) => setToken(e.target.value)}
            name="token"
          />
        </p>
        <p>
          <label htmlFor="title">Title </label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            name="title"
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
        {/* <p>
          <label htmlFor="name"> Location </label>
          <input
            type="text"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            name="location"
          />
        </p> */}
        <p>
          <label htmlFor="start_date"> Start Date </label>
          <input
            type="datetime-local"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
            name="start_date"
          />
        </p>
        <p>
          <label htmlFor="end_date"> End Date </label>
          <input
            type="datetime-local"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
            name="end_date"
          />
        </p>
        {/* <p>
          <label htmlfor="group_name">Group Name </label>
          <input
            type="text"
            name="group_name"
            value={groupName}
            list="groups"
            onChange={(e) => setGroupName(e.target.value)}
          /> */}
          {/* <datalist id="groups">
            {groups.map(group => <option>{group.name}</option>)}
          </datalist> */}
        {/* </p> */}
        {" "}<button type="submit">Add Proposal</button>
      </form>
    </div>
  )
}

export default NftContractList
