/* eslint-disable react/prop-types */
import { NavLink } from 'react-router-dom';
import { List, Group, Button, Burger } from '@mantine/core';
import nobgcqlogo1 from '../assets/nobgcqlogo1.png';

function Logo () {
  return (
    <div className='flex flex-row py-2'>
      <NavLink to='/'>
        <img
          src={nobgcqlogo1}
          alt='crucifix logo with a heart inside'
          className='w-full h-14 '
        />
      </NavLink>
    </div>
  );
}

function NavLeftItems() {
  return (
    <List className='flex items-center text-white justify-center font-bold space-x-8'>
      <List.Item>
        <NavLink to='/'>HOME</NavLink>
      </List.Item>
      <List.Item>
        <NavLink to='/about us'>ABOUT US</NavLink>
      </List.Item>
      <List.Item>
        <NavLink to='/services'>SERVICES</NavLink>
      </List.Item>
      <List.Item>
        <NavLink to='/partners'>PARTNERS</NavLink>
      </List.Item>
      <List.Item>
        <NavLink to='/faq'>FAQ</NavLink>
      </List.Item>
      <List.Item></List.Item>
    </List>
  );
}

function NavRightButtons() {
  const isSignedIn = false;
  return (
    <div className='flex'>
      <Button
        variant='transparent'
        color='white'
        className={'flex self-center pr-1 hover:bg-emerald-200 hover:font-bold'}
      >
        {isSignedIn ? 'LOG OUT' : 'LOG IN'}
      </Button>
    </div>
  );
}


const Navbar = () => {
  return (
    <div className='flex items-center justify-between bg-emerald-950 text-white px-8 h-4/5'>
      <Logo />
      <NavLeftItems />
      <NavRightButtons />
    </div>
  );
};

export default Navbar;
