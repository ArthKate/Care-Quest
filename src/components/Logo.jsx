import noBackgroundCQLogo1 from '../assets/noBackgroundCQLogo1.png'
import { NavLink } from 'react-router-dom'


function Logo() {
  return (
    <div className='flex justify-start items-center w-2/12'>
      <NavLink to='/'>
        <img
          src={noBackgroundCQLogo1}
          alt='logo with crucifix in the middle'
          className='w-full h-14 px-4 py-2 m-4'
        />
      </NavLink>
    </div>
  );
}

// export default Logo
