import { List, Button } from '@mantine/core';
import crucifixLogo from '../assets/crucifixLogo.png'; 

const Navbar = () => {
  return (
    <div>
      <img src={crucifixLogo} alt='crucifix logo with a heart inside' />
      <p>Care Quest</p>
      <NavItems btn={<ButtonItem />} />
    </div>
  );
};


function NavItems(props) {
  return (
    <List>
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

export default Navbar;
