import React from 'react'
import { Routes, Route } from 'react-router-dom';
import NavBar from '../components/NavBar';
import Home from '../pages/Homes';
import Destination from '../pages/Destination';
import Crew from '../pages/Crew';
import Technology from '../pages/Technology';

export const NavRoutes = () => {
  return (
    <>
      <Routes>
          <Route element={<NavBar/>}>                    
              <Route index element={<Home/>} />
              <Route path='home' element={<Home/>} />
              <Route path='destination' element={<></>} />
              <Route path='crew' element={<></>} />
              <Route path='technology' element={<></>} />
          </Route>
      </Routes>
    </>
  )
}

export default NavRoutes;