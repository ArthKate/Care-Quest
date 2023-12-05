/* eslint-disable react/prop-types */
import { List, Button } from '@mantine/core';
import crucifixLogo from '../assets/crucifixLogo.png';

function Logo() {
  return (
    <div className='flex items-center py-2'>
      <img
        src={crucifixLogo}
        alt='crucifix logo with a heart inside'
        className='w-14 h-14'
      />
      <p className='text-3xl text-gray-700 font-bold mx-4'>Care Quest</p>
    </div>
  );
}

function NavItems(props) {
  return (
    <List className='flex items-center text-gray-700 justify-center font-bold space-x-8'>
      <List.Item>HOME</List.Item>
      <List.Item>ABOUT US</List.Item>
      <List.Item>SERVICES</List.Item>
      <List.Item>FAQ</List.Item>
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
      className={'flex self-center pr-1 hover:bg-emerald-200'}
    >
      {isSignedIn ? 'SIGN OUT' : 'SIGN IN'}
    </Button>
  );
}

const Footer = () => {
  return (
    <div className='flex justify-between bg-cyan-100 px-4 mt-20'>
      <Logo />
      <NavItems />
      {/* <ButtonItem /> */}
    </div>
  );
};

export default Footer;
