import React, { useState, useEffect } from 'react'

const App = () => {

  const [ userState, setUserState ] = useState({
    username: '',
    email: '',
    password: '',
    user: {}
  })

  const handleInputChange = ({ target }) => {
    setUserState({ ...userState, [target.name]: target.value })
  }

  const handleRegisterUser = event => {
    event.preventDefault()
    const user = {
      username: userState.username,
      email: userState.email,
      password: userState.password
    }
    setUserState({ 
      ...userState, 
      user,
      username: '',
      email: '',
      password: ''  
    })
  }

  useEffect(() => {
    console.log('ping')
  }, [])

  return (
    <>
      <form>
        <p>
          <label htmlFor="username">username</label>
          <input 
            type="text" 
            name="username" 
            value={userState.username}
            onChange={handleInputChange} />
        </p>
        <p>
          <label htmlFor="email">email</label>
          <input 
            type="email" 
            name="email" 
            value={userState.email}
            onChange={handleInputChange} />
        </p>
        <p>
          <label htmlFor="password">password</label>
          <input 
            type="password" 
            name="password" 
            value={userState.password}
            onChange={handleInputChange} />
        </p>
        <button onClick={handleRegisterUser}>Register</button>
      </form>
      <div>
        <h3>{userState.user.username}</h3>
        <h4>{userState.user.email}</h4>
        <h5>{userState.user.password}</h5>
      </div>
    </>
  )
}

export default App
