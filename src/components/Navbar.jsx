/* eslint-disable react/prop-types */
import { NavLink } from 'react-router-dom';
import { List, Button } from '@mantine/core';
import crucifixLogo from '../assets/crucifixLogo.png';

function Logo() {
  return (
    <div className='flex items-center py-2'>
      <img
        src={crucifixLogo}
        alt='crucifix logo with a heart inside'
        className='w-14 h-14 '
      />
      <p className='text-3xl text-gray-700 font-bold mx-4'>Care Quest</p>
    </div>
  );
}

function NavItems(props) {
  return (
    <List className='flex items-center text-gray-700 justify-center font-bold space-x-8'>
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
        <NavLink to='/faq'>FAQ</NavLink>
      </List.Item>
      <List.Item>{props.btn}</List.Item>
    </List>
  );
}

function ButtonItem() {
  const isSignedIn = false;

  return (
    <Button
      variant='outline'
      color='teal'
      className={'flex self-center pr-1 hover:bg-emerald-200 hover:font-bold'}
    >
      {isSignedIn ? 'SIGN OUT' : 'SIGN IN'}
    </Button>
  );
}

const Navbar = () => {
  return (
    <div className='flex justify-between bg-emerald-100 px-4'>
      <Logo />
      <NavItems />
      <ButtonItem />
    </div>
  );
};

export default Navbar;
