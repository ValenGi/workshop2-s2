import React from 'react'
import { Routes, Route } from 'react-router-dom';
import NavBar from '../components/NavBar';
import Home from '../pages/home/Home';
import Destination from '../pages/Destination/Destination';
import Crew from '../pages/crew/Crew';
import Technology from '../pages/technology/Technology';

export const NavRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/workshop2-s2/" element={<NavBar />}>
          <Route index element={<Home />} />
          <Route path="/workshop2-s2/home" element={<Home />} />
          <Route path="/workshop2-s2/destination" element={<Destination />} />
          <Route path="/workshop2-s2/crew" element={<Crew />} />
          <Route path="/workshop2-s2/technology" element={<Technology />} />
        </Route>
      </Routes>
    </>
  );
};

export default NavRoutes;
