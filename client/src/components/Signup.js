import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function Signup({ setCurrentUser }) {
  // const history = useHistory()
  const [ens_domain, setEns_domain] = useState('')
  const [password, setPassword] = useState('')
  const [passwordConfirmation, setPasswordConfirmation] = useState('')
  
  const handleSubmit = (event) => {
    event.preventDefault()
    fetch('/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        ens_domain,
        password,
        password_confirmation: passwordConfirmation
      })
    })
      .then(res => {
        if (res.ok) {
          res.json().then(user => {
            setCurrentUser(user)
            // history.push('/api/users')
          })
        } else {
          setCurrentUser({ ens_domain: "Burt" })
          // history.push('/api/users')
          res.json().then(errors => {
            console.error(errors)
          })
        }
      })
  }
  return (
    <div className="authForm">
      <form onSubmit={handleSubmit}>
        <h1>Sign Up</h1>
        <p>
          <label 
            htmlFor="ens_domain"
          >
            Ens_domain
          </label>
          <input
            type="text"
            name="ens_domain"
            value={ens_domain}
            onChange={(e) => setEns_domain(e.target.value)}
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
        <p>
          <label 
            htmlFor="password_confirmation"
          >
            Password Confirmation
          </label>
          <input
            type="password"
            name="password_confirmation"
            value={passwordConfirmation}
            onChange={(e) => setPasswordConfirmation(e.target.value)}
          />
        </p>
        <p><button type="submit">Sign Up</button></p>
        <p>-- or --</p>
        <p><Link to="/api/">Log In</Link></p>
      </form>
    </div>
  )
}

export default Signup
