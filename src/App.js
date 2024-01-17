// import React from 'react'
// import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
// import Home from './components/Home'
// import Register from './components/Register'
// import NotFound from './components/NotFound'

// // These are the lists used in the application. You can move them to any component needed.
// const topicsList = [
//   {
//     id: 'ARTS_AND_CULTURE',
//     displayText: 'Arts and Culture',
//   },
//   {
//     id: 'CAREER_AND_BUSINESS',
//     displayText: 'Career and Business',
//   },
//   {
//     id: 'EDUCATION_AND_LEARNING',
//     displayText: 'Education and Learning',
//   },
//   {
//     id: 'FASHION_AND_BEAUTY',
//     displayText: 'Fashion and Learning',
//   },
//   {
//     id: 'GAMES',
//     displayText: 'Games',
//   },
// ]

// const App = () => (
//   <Router>
//     <Switch>
//       <Route path="/" exact component={Home} />
//       <Route
//         path="/register"
//         render={() => <Register topicsList={topicsList} />}
//       />
//       <Route component={NotFound} />
//     </Switch>
//   </Router>
// )

// export default App

import React, {useState} from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Home from './components/Home'
import Register from './components/Register'
import NotFound from './components/NotFound'

const topicsList = [
  {
    id: 'ARTS_AND_CULTURE',
    displayText: 'Arts and Culture',
  },
  {
    id: 'CAREER_AND_BUSINESS',
    displayText: 'Career and Business',
  },
  {
    id: 'EDUCATION_AND_LEARNING',
    displayText: 'Education and Learning',
  },
  {
    id: 'FASHION_AND_BEAUTY',
    displayText: 'Fashion and Learning',
  },
  {
    id: 'GAMES',
    displayText: 'Games',
  },
]

const App = () => {
  const [registeredName, setRegisteredName] = useState('')

  const handleRegister = name => {
    setRegisteredName(name)
  }

  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <Home registeredName={registeredName} />
        </Route>
        <Route
          path="/register"
          render={() => (
            <Register topicsList={topicsList} onRegister={handleRegister} />
          )}
        />
        <Route component={NotFound} />
      </Switch>
    </Router>
  )
}

export default App
