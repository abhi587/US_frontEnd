import React from 'react'
import Login from './components/Login/Login'
import Register from './components/Register/Registration'
import {BrowserRouter, Routes, Route} from 'react-router-dom'

const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/login' element={<Login/>} />
        <Route path='/register' element={<Register/>} />
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App