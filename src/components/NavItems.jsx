import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Burger } from '@mantine/core';


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

//Navbar
function NavItems() {
  const isLoggedIn = true;
  return (
    <nav className='md:flex justify-between items-center w-full h-full text-gray-300 font-bold md:gap-28 lg:gap-72 '>
      {/*Hamburger menu*/}
      {/* <div className='flex md:hidden'>
        <Hamburger />
      </div> */}
      {/*Left NavItems*/}
      <ul className='md:flex gap-8 px-2 py-6 bg-blue-600'>
        <li>Home</li>
        <li>About</li>
        <li className='whitespace-nowrap'>Contact Us</li>
        <li>Services</li>
        <li>FAQ</li>
      </ul>
      <ul className='md:flex gap-8 px-2 py-6 bg-blue-600'>
        <li>Register</li>
        <li className='whitespace-nowrap'>
          {isLoggedIn ? 'Sign In' : 'Sign Out'}
        </li>
      </ul>
    </nav>
  );
}

export default NavItems;
