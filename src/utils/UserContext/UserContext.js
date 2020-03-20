import React, { createContext } from 'react'

const UserContext = createContext({
  username: '',
  email: '',
  password: '',
  user: {},
  handleInputChange: () => { },
  handleRegisterUser: () => { }
})

export default UserContext
