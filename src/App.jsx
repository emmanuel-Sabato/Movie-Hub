import React from 'react'
import Header from './components/nav_bar/Header'
import Trendings from './components/sub_home/Trendings'
import Popular from './components/sub_home/Popular'
import Upcoming from './components/sub_home/Upcoming'
import ComingSoon from './components/sub_home/Comingsoon'
import Footer from './components/nav_bar/Footer'
import Home from './pages/Home'

function App() {
  return (
    <div>
      <Header />
      <Home />
      <Trendings />
      <Popular />
      <Upcoming />
      <ComingSoon />
      <Footer />
    </div>
  )
}

export default App