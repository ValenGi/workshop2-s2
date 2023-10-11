import React, { useState } from 'react'
import { Link, Outlet, useLocation } from 'react-router-dom'
import './NavBar.scss';
import iconTop from '../../public/icon-top.png';
import group from '../..//public/Group.png';

const NavBar = () => {
    const location = useLocation();
    const [mostrarOtherComponent, setMostrarOtherComponent] = useState(false);
    const openClick = () => {
        setMostrarOtherComponent(true);
    };
    const closeClick = () =>{
        setMostrarOtherComponent(false);
    }
    return (
        <>
            <nav className='NavBar__container'>
                <img src={iconTop} alt="" />
                <div/>
                <ul className='NavBar__ul'>
                    <li className='NavBar__li'>
                        <Link className={`NavBar__link ${location.pathname === '/workshop2-s2/' || location.pathname === '/workshop2-s2/home' ? 'active' : ''}`} to="/workshop2-s2/"><p>01</p> HOME</Link>
                    </li>
                    <li className='NavBar__li'>
                        <Link className={`NavBar__link ${location.pathname === '/workshop2-s2/destination' ? 'active' : ''}`} to="/workshop2-s2/destination"><p>02</p> DESTINATION</Link>
                    </li>
                    <li className='NavBar__li'>
                        <Link className={`NavBar__link ${location.pathname === '/workshop2-s2/crew' ? 'active' : ''}`} to="/workshop2-s2/crew"><p>03</p> CREW</Link>
                    </li>
                    <li className='NavBar__li'>
                        <Link className={`NavBar__link ${location.pathname === '/workshop2-s2/technology' ? 'active' : ''}`} to="/workshop2-s2/technology"><p>04</p> TECHNOLOGY</Link>
                    </li>
                </ul>
                <img className='NavBar__img' onClick={openClick} src={group} alt="" />
            </nav>
            {mostrarOtherComponent && <OtherComponent close={closeClick}/>}
            <Outlet />
        </>
    )
}

const OtherComponent = (props) => {
    return(
        <>
            <nav className='NavBar__mobile'>
                <img src="/public/close.png" alt="" onClick={props.close} />
                <ul className='NavBar__mobile--ul'>
                    <li className='NavBar__li'>
                        <Link className={`NavBar__link`} to="/workshop2-s2/"><p>01</p> HOME</Link>
                    </li>
                    <li className='NavBar__li'>
                        <Link className={`NavBar__link`} to="/workshop2-s2/destination"><p>02</p> DESTINATION</Link>
                    </li>
                    <li className='NavBar__li'>
                        <Link className={`NavBar__link`} to="/workshop2-s2/crew"><p>03</p> CREW</Link>
                    </li>
                    <li className='NavBar__li'>
                        <Link className={`NavBar__link`} to="/workshop2-s2/technology"><p>04</p> TECHNOLOGY</Link>
                    </li>
                </ul>
            </nav>
        </>
    );
};

export default NavBar;