import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './components/Custom/Header'

function App() {
  return (
    <>
      <Header />
      <Outlet /> {/* Renders child routes */}
    </>
  )
}

export default App
