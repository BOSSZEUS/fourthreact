import React, { useContext } from 'react'
import UserContext from '../../utils/UserContext'

const UserDisplay = () => {
  const { user: { username, email, password } } = useContext(UserContext)

  return (
    <div>
      <h3>{username}</h3>
      <h4>{email}</h4>
      <h5>{password}</h5>
    </div>
  )
}

export default UserDisplay