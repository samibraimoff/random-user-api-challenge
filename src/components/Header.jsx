import React from 'react';
import { ImUsers } from 'react-icons/im';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <nav className='mt-2 d-flex flex-row justify-content-between align-items-center'>
      <span className='d-flex flex-row justify-content-between align-items-center'>
        <ImUsers className='logo' />
        <span>UsersAPI</span>
      </span>

      <ul className='d-flex flex-row justify-content-between align-items-center'>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/about'>About</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
