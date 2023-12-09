/* eslint-disable react/prop-types */
// import { List, Button } from '@mantine/core';
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


const Navbar = () => {
  return (
    <div className='flex justify-between bg-emerald-100 px-4'>
      <Logo />
    </div>
  );
};

export default Navbar;