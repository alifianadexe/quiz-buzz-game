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
import AgainFirst from './AgainFirst'
import AgainSecond from './AgainSecond'
import AgainThird from './AgainThird'
import Profile from './Profile'


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
          <Route path="/again1" element={<AgainFirst email={name} loggedIn={loggedIn} setLoggedIn={setLoggedIn} />} />
          <Route path="/again2" element={<AgainSecond email={name} loggedIn={loggedIn} setLoggedIn={setLoggedIn} />} />
          <Route path="/again3" element={<AgainThird email={name} loggedIn={loggedIn} setLoggedIn={setLoggedIn} />} />
          <Route path="/profile" element={<Profile email={name} loggedIn={loggedIn} setLoggedIn={setLoggedIn} />} />
          <Route path="/quiz" element={<Quiz setScore={setScore} setName={setName} />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App