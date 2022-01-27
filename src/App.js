import React, { useState } from 'react'
import { BrowserRouter } from 'react-router-dom'
import Routes from './Routes'
import Header from './components/Header'
import Footer from './components/Footer'
import Login from './pages/Login'

import './App.css'

function App() {
  const [user, setUser] = useState(null)

  if (user === null) {
    return <Login />
  }

  return (
    <BrowserRouter>
      <Header />
      <Routes />4
      <Footer />
    </BrowserRouter>
  )
}

export default App
