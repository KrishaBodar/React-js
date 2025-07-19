import { useState } from 'react'
import './App.css'
import Card from './card.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1></h1>
      <Card />
      <Card />
    </>
  )
}

export default App


//in this there you can do apply
