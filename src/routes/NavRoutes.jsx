import React from 'react'
import { Routes, Route } from 'react-router-dom';
import NavBar from '../components/NavBar';
import Home from '../pages/home/Home';
import Destination from '../pages/Destination';
import Crew from '../pages/crew/Crew';
import Technology from '../pages/Technology';

export const NavRoutes = () => {
  return (
    <>
      <Routes>
          <Route element={<NavBar/>}>                    
              <Route index element={<Home/>} />
              <Route path='home' element={<Home/>} />
              <Route path='destination' element={<Destination/>} />
              <Route path='crew' element={<Crew/>} />
              <Route path='technology' element={<Technology/>} />
          </Route>
      </Routes>
    </>
  )
}

export default NavRoutes;