import React from 'react'
import { BrowserRouter as Router , Routes , Route } from 'react-router-dom'
import Header from './components/Header'
import Home from './components/Home'
import Coins from './components/Coins'
import Excahnges from './components/Excahnges'
import CoinDetails from './components/CoinDetails'
const App = () => {

  return (
  <Router>
    <Header/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/coins' element={<Coins/>}/>
      <Route path='/exchanges' element={<Excahnges/>}/>
      <Route path='/coin/:id' element={<CoinDetails/>}/>
    </Routes>
  </Router>  )
}

export default App