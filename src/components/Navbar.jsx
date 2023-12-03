/* eslint-disable react/prop-types */
import { List, Button } from '@mantine/core';
import crucifixLogo from '../assets/crucifixLogo.png';
import { useState } from 'react';

function Logo() {
  return (
    <div className='flex items-center py-2'>
      <img
        src={crucifixLogo}
        alt='crucifix logo with a heart inside'
        className='w-24 h-24 pl-1'
      />
      <p className='text-3xl text-gray-700 font-semibold mx-4'>Care Quest</p>
    </div>
  );
}

function NavItems(props) {
  return (
    <List className='flex items-center text-gray-900 justify-center font-semibold space-x-8'>
      <List.Item>HOME</List.Item>
      <List.Item>ABOUT US</List.Item>
      <List.Item>SERVICES</List.Item>
      <List.Item>FAQ</List.Item>
      <List.Item>{props.btn}</List.Item>
    </List>
  );
}

function ButtonItem() {
  const [isHovered, setIsHovered] = useState(false);
  const isSignedIn = false;

  const handleMouseEnter = () => {
    setIsHovered(true);
  };
  const handleMouseLeave = () => {
    setIsHovered(false);
  };


  return (
    <Button
      variant='outline'
      color='pink'
      className={`flex self-center pr-1 ${isHovered ? "bg-pink-700" : ""}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {isSignedIn ? 'Sign Out' : 'Sign In'}
    </Button>
  );
}

const Navbar = () => {
  return (
    <div className='flex justify-between bg-teal-100'>
      <Logo />
      <NavItems />
      <ButtonItem />
    </div>
  );
};

export default Navbar;
