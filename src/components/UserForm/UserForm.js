import React, { useContext } from 'react'
import UserContext from '../../utils/UserContext'

const UserForm = () => {
  const { 
    username, 
    email, 
    password, 
    handleInputChange, 
    handleRegisterUser 
  } = useContext(UserContext)

  return (
    <form>
      <p>
        <label htmlFor="username">username</label>
        <input
          type="text"
          name="username"
          value={username}
          onChange={handleInputChange} />
      </p>
      <p>
        <label htmlFor="email">email</label>
        <input
          type="email"
          name="email"
          value={email}
          onChange={handleInputChange} />
      </p>
      <p>
        <label htmlFor="password">password</label>
        <input
          type="password"
          name="password"
          value={password}
          onChange={handleInputChange} />
      </p>
      <button onClick={handleRegisterUser}>Register</button>
    </form>
  )
}

export default UserForm