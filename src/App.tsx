import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Play from './Play'
import Quiz from './Quiz'
import './App.css'
import { useEffect, useState } from 'react'

function App() {
  const [loggedIn, setLoggedIn] = useState(false)
  const [name, setName] = useState('')
  const [score, setScore] = useState('')

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Play email={name} loggedIn={loggedIn} setLoggedIn={setLoggedIn} />} />
          <Route path="/quiz" element={<Quiz setScore={setScore} setName={setName} />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App