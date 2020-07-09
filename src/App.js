import React, { useState } from 'react'

const App = () => {
  const [count, setCount] = useState(0)

  return (
    <div>
      <h1>The count is {count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  )
}

export default App
