import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { List, Burger } from '@mantine/core';
import noBackgroundCQLogo1 from '../assets/noBackgroundCQLogo1.png';

//logo

function Logo() {
  return <img src={noBackgroundCQLogo1} className='w-24 h-auto sm:w-32 lg:w-48 xl-56 2xl:w-64 alt="logo" px-4 py-2 m-4' />;
}

//Burger menu

function Hamburger() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  // toggle menu function
  const toggleIsMenuOpen = () => setIsMenuOpen(!isMenuOpen);
  return (
    <Burger
      opened={isMenuOpen}
      onClick={toggleIsMenuOpen}
      color='#e5e7eb'
      aria-label='Toggle navigation'
    />
  );
}

//Navigation

function Navbar() {
  const isLoggedIn = false;
  return (
    <nav className='flex justify-center items-center bg-emerald-950 w-full h-auto'>
      {/*logo*/}
      <section className='flex justify-between items-center w-full md:w-auto bg-emerald-950 text-gray-200 font-montserrat font-semibold sm:text-base lg:text-lgx xl:text-xl 2xl:text-2xl box-border m-4'>
        <NavLink to='/'>
          <div className='flex justify-center items-center w-auto mr-24'>
            <Logo />
          </div>
        </NavLink>
        {/*Left Navbar*/}
        <ul className='hidden md:flex justify-between items-center'>
          <li className='px-4 py-2 m-4'>
            <NavLink to='/'>Home</NavLink>
          </li>
          <li className='px-4 py-2 m-4'>
            <NavLink to='/'>About</NavLink>
          </li>
          <li className='px-4 py-2 m-4 whitespace-nowrap'>
            <NavLink to='/'>Contact Us</NavLink>
          </li>
          <li className='px-4 py-2 m-4'>
            <NavLink to='/'>Services</NavLink>
          </li>
          <li className='px-4 py-2 m-4'>
            <NavLink to='/'>FAQ</NavLink>
          </li>
        </ul>

        {/* Right Navbar */}
        <ul className='hidden md:flex justify-between items-center ml-24'>
          <li className='px-4 py-2 m-4'>Register</li>
          <li className='px-4 py-2 m-4 whitespace-nowrap'>
            {isLoggedIn ? <span>Log Out</span> : <span>Log In</span>}
          </li>
        </ul>
        {/* Burger menu */}
        <div className='sm:flex md:hidden px-4 py-2'>
          <Hamburger />
        </div>
      </section>
    </nav>
  );
}

export default Navbar;
