import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Header from './components/Custom/Header'
import Viewtrip from './view-trip/[tripId]/index'
import CreateTrip from './create-trip-form/Index'
import MyTrips from './my-trips/index'

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<CreateTrip />} />
        <Route path="/view-trip/:tripId" element={<Viewtrip />} />
        <Route path="/my-trips" element={<MyTrips />} />
      </Routes>
    </>
  )
}

export default App
