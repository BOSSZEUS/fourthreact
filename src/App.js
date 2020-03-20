import React, { useState } from 'react'

const App = () => {

  const [ countState, setCountState ] = useState({
    text: 'hotdog',
    count: 0
  })

  const handleBtnClick = () => {
    setCountState({ ...countState, count: countState.count + 1 })
  }

  return (
    <div>
      <h1>{countState.text}</h1>
      <h1>Count: {countState.count}</h1>
      <button onClick={handleBtnClick}>Click Me</button>
    </div>
  )
}

export default App
