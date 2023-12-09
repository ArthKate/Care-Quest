import { Button } from '@mantine/core';
import { IconArrowRight } from '@tabler/icons-react';
import maleDoc from '../assets/maleDoc.png';

function SearchButton() {
  return (
    <Button
      variant='outline'
      color='teal'
      rightSection={<IconArrowRight size={14} />}
      className='m-5 hover:bg-emerald-200'
    >
      FIND PROVIDERS
    </Button>
  );
}

function HeroCard() {
  return (
    <div className='grid gap-4 md:grid-cols-2 mt-5 my-2'>
      <div>
        <img
          src={maleDoc}
          alt='smiling doctor with holding a medical records'
          className='w-full h-full object-cover'
        />
      </div>

      <div className='grid justify-evenly'>
        <h1 className='text-3xl md:text-5xl font-bold whitespace-normal px-4 mb-4'>
          Find MediCare Anytime Wherever You Are 24/7
        </h1>

        <p className='font-semibold text-gray-500 text-xl px-4 md:text-2xl mb-4'>
          Locate to seek medical care and advice from health specialists near
          you.
        </p>

        <SearchButton className='justify-center' />
      </div>
    </div>
  );
}
export default HeroCard;
