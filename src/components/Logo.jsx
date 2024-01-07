import noBackgroundCQLogo1 from '../assets/noBackgroundCQLogo1.png'

function Logo() {
  return (
    <div className='w-40 h-10 max-w-full relative'>
      <img
        src={noBackgroundCQLogo1}
        className='w-full h-full object-contain text-white absolute'
        alt='Care Quest logo'
      />
    </div>
  );
}

export default Logo
