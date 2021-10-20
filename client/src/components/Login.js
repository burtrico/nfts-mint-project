import React, { useState } from 'react'
import { Redirect, Link } from 'react-router-dom'

function Login({ setCurrentUser }) {
  // const history = useHistory()
  const [ens_domain, setEnsDomain] = useState('')
  const [password, setPassword] = useState('')
  
  const handleSubmit = (event) => {
    event.preventDefault()
    fetch('/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ens_domain, password})
    })
      .then(res => {
        if (res.ok) {
          res.json().then(user => {
            setCurrentUser(user)
            // history.push('/api/proposals')
          })
        } else {
          res.json().then(errors => {
            console.error(errors)
          })
        }
      })
  }
  return (
    <div className="authForm">
      <Redirect to="/" />
      <form onSubmit={handleSubmit}>
        <h1>Log In</h1>
        <p>
          <label 
            htmlFor="ens_domain"
          >
            ens_domain
          </label>
          <input
            type="text"
            name="ens_domain"
            value={ens_domain}
            onChange={(e) => setEnsDomain(e.target.value)}
          />
        </p>
        <p>
          <label 
            htmlFor="password"
          >
            Password
          </label>
          <input
            type="password"
            name=""
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </p>
        <p><button type="submit">Log In</button></p>
        <p>-- or --</p>
        <p><Link to="/signup">Sign Up</Link></p>
      </form>
    </div>
  )
}

export default Login
