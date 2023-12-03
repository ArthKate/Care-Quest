
import maleDoc from '../assets/maleDoc.png'

function HeroCard() {
  return (
    <div className='flex justify-between'>
      <img src={maleDoc} alt="" />
      <div className='pl-4'>
        <h1 className='text-5xl font-bold'>Find MediCare Anytime Wherever You Are 24/7</h1>
        <p className='mt-20 text-lg font-semibold'>Locate to seek medical care and advice from health specialists near you.</p>
        <button className='mt-10 bg-teal-200'>BOOK AN APPOINTMENT</button>
      </div>
    </div>
  )
}


export default HeroCard;