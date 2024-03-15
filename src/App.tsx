import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Play from './Play'
import Quiz from './Quiz'
import Guide from './Guide'
import './App.css'
import { useEffect, useState } from 'react'
import LearningGoal from './LearningGoal'
import Hint from './Hint'
import Remember from './Remember'
import Again from './Again'


function App() {
  const [loggedIn, setLoggedIn] = useState(false)
  const [name, setName] = useState('')
  const [score, setScore] = useState('')

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Play email={name} loggedIn={loggedIn} setLoggedIn={setLoggedIn} />} />
          <Route path="/guide" element={<Guide email={name} loggedIn={loggedIn} setLoggedIn={setLoggedIn} />} />
          <Route path="/learning-goal" element={<LearningGoal email={name} loggedIn={loggedIn} setLoggedIn={setLoggedIn} />} />
          <Route path="/hint" element={<Hint email={name} loggedIn={loggedIn} setLoggedIn={setLoggedIn} />} />
          <Route path="/remember" element={<Remember email={name} loggedIn={loggedIn} setLoggedIn={setLoggedIn} />} />
          <Route path="/again" element={<Again email={name} loggedIn={loggedIn} setLoggedIn={setLoggedIn} />} />
          <Route path="/quiz" element={<Quiz setScore={setScore} setName={setName} />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App