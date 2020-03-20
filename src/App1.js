import React, { useState, useEffect } from 'react'
import UserForm from './components/UserForm'
import UserDisplay from './components/UserDisplay'
import UserContext from './utils/UserContext'

const App = () => {

  const [ userState, setUserState ] = useState({
    username: '',
    email: '',
    password: '',
    user: {}
  })

  userState.handleInputChange = ({ target }) => {
    setUserState({ ...userState, [target.name]: target.value })
  }

  userState.handleRegisterUser = event => {
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

  return (
    <UserContext.Provider value={userState}>
      <UserForm />
      <UserDisplay />
    </UserContext.Provider>
  )
}

export default App
