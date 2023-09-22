import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
 
    return (
        <nav className='pt-8 linear-bg'>
            <div className="navbar bg-base-100 max-w-[1320px] mx-auto">
              <div className="navbar-start">
                <div className="dropdown">
                  <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                  </label>
                  <ul tabIndex={0} className="font-bold menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 text-[#757575]">
            <li><NavLink to='/'>Home</NavLink></li>
            <li><NavLink to='statistics'>Statistics</NavLink></li>
            <li><NavLink to='applied'>Applied Jobs</NavLink></li>
            <li><NavLink to='blog'>Blog</NavLink></li>
                  </ul>
                </div>
                <a className="btn btn-ghost normal-case text-3xl">CareerHub</a>
              </div>
              <div className="navbar-center hidden lg:flex font-bold">
                <ul className="gap-10 menu-horizontal px-1 text-[#757575]">
            <li><NavLink to='/'>Home</NavLink></li>
            <li><NavLink to='statistics'>Statistics</NavLink></li>
            <li><NavLink to='applied'>Applied Jobs</NavLink></li>
            <li><NavLink to='blog'>Blog</NavLink></li>
                </ul>
              </div>
              <div className="navbar-end">
                <a className="btn capitalize bg-gradient-to-r from-[#7E90FE] to-[#9873FF] text-white">Start Applying</a>
              </div>
            </div>
        </nav>
    );
};

export default Header;