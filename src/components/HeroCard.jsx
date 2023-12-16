import { useNavigate } from 'react-router-dom';
// import { Button } from '@mantine/core'
import nobgSmilingDoc from '../assets/nobgSmilingDoc.png';
import { IconArrowRight } from '@tabler/icons-react';
import { PatientForm } from './PatientForm';

function HeroCard() {
  let navigate = useNavigate();
  return (
    <>
      
      <div className='flex flex-col justify-center md:flex-row md:justify-between bg-emerald-100'>
        <div className='w-1/2 h-full'>
          <img
            src={nobgSmilingDoc}
            alt='smiling doctor with holding a medical records'
            className='object-contain max-w-full max-h-full pt-10'
          />
        </div>

        <div className=' flex grow flex-col self-center w-1/2 h-full'>
          <h1 className='text-3xl md:text-6xl font-bold mb-8'>
            Find MediCare Anytime Wherever You Are 24/7.
          </h1>

          <p className='text-lg md:text-2xl font-semibold pb-1 text-gray-600 mb-8'>
            Locate to seek medical care and advice from health specialists near
            you with Care Quest.
          </p>

          <div className='flex bg-emerald-300 w-40 md:file:placeholder:w-48 h-12 overflow-hidden rounded-lg'>
            <button
              className=' w-full md:text-baseline font-semibold rounded-lg '
              onClick={() => navigate('/specialist')}
            >
              Find Specialist
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
export default HeroCard;
