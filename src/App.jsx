import React from 'react'
import Nav from './Components/Nav/Nav'
import Upcoming from './Components/Upcoming/Upcoming'
import Results from './Components/Results/Results'
import About from './Components/About/About'
import Team from './Components/Team/Team'
import Footer from './Components/Footer/Footer'

const App = () => {
  return (
    <div>
      <Nav />
      <Upcoming />
      <Results />
      <About />
      <Team />
      <Footer />
    </div>
  )
}

export default App
