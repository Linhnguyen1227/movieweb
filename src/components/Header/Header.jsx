import React, { useEffect, useRef } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';

import './header.scss';
import logo from '../../assets/tmovie.png';

const headerNav = [
    {
        display: 'Home',
        path: '/',
    },
    {
        display: 'Movies',
        path: '/movie',
    },
    {
        display: 'TV Series',
        path: '/tv',
    },
];

function Header() {
    const { pathname } = useLocation();
    const headerRef = useRef(null);
    const active = headerNav.findIndex((e) => e.path === pathname);
    useEffect(() => {
        const headerShirnk = () => {
            if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
                headerRef.current.classList.add('shrink');
            } else {
                headerRef.current.classList.remove('shrink');
            }
        };
        window.addEventListener('scroll', headerShirnk);
        return () => {
            window.addEventListener('scroll', headerShirnk);
        };
    }, []);
    return (
        <div ref={headerRef} className="header">
            <div className="header_wrap container">
                <div className="logo">
                    <img src={logo} alt="#" />
                    <Link to="/"> tMovies</Link>
                </div>
                <div className="header_nav">
                    {headerNav.map((e, i) => {
                        return (
                            <NavLink key={i} to={e.path}>
                                {e.display}
                            </NavLink>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}

export default Header;
