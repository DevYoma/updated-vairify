import { useState } from 'react'
import './App.css'
import Button from '@mui/material/Button'
import {
  HomePage
} from './Pages/index.js'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <HomePage />
    </div>
  )
}

export default App
