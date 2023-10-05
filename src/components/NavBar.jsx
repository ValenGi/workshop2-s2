import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import './NavBar.scss';

const NavBar = () => {
    return (
        <>
            <nav className='NavBar__container'>
                <img src="/public/icon-top.png" alt="" />
                <div/>
                <ul className='NavBar__ul'>
                    <li className='NavBar__li'>
                        <Link className='NavBar__link' to="/"><p>01</p> HOME</Link>
                    </li>
                    <li className='NavBar__li'>
                        <Link className='NavBar__link' to="/destination"><p>02</p> DESTINATION</Link>
                    </li>
                    <li className='NavBar__li'>
                        <Link className='NavBar__link' to="/crew"><p>03</p> CREW</Link>
                    </li>
                    <li className='NavBar__li'>
                        <Link className='NavBar__link' to="/technology"><p>04</p> TECHNOLOGY</Link>
                    </li>
                </ul>
            </nav>
            <Outlet />
        </>
    )
}

export default NavBar;