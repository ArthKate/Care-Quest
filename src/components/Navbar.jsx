/* eslint-disable react/prop-types */
import { List, Button } from '@mantine/core';
import crucifixLogo from '../assets/crucifixLogo.png'; 


function NavItems(props) {
  return (
    <List className='flex'>
      <List.Item>HOME</List.Item>
      <List.Item>ABOUT US</List.Item>
      <List.Item>SERVICES</List.Item>
      <List.Item>
        FAQ
      </List.Item>
      <List.Item>{props.btn}</List.Item>
    </List>
  );
}

function ButtonItem() {
  return <Button variant='filled'>Button</Button>;
}

const Navbar = () => {
  return (
    <div className='flex'>
      <img
        src={crucifixLogo}
        alt='crucifix logo with a heart inside'
        className='w-24 h-24'
      />
      <p className='text-blue-600'>Care Quest</p>
      <NavItems btn={<ButtonItem />} />
    </div>
  );
};



export default Navbar;
