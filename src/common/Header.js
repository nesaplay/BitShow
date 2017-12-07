import React from 'react';
import { Link } from 'react-router-dom';

import Search from './Search';
import '../css/Header.css';

const Header = props => {

  return (
    <header className=''>
      <nav className="navbar navbar-light justify-content-between">
        <div className='container'>
          <Link className="navbar-brand" to='/'>
            <span className='logo-alpha'>Bit</span>
            <span className='logo-omega'>Show</span>
          </Link>
          <Search />
        </div>
      </nav>
    </header>
  );
};


export default Header;