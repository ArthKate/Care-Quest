
import { Button } from '@mantine/core'
import { IconArrowRight } from '@tabler/icons-react'
import maleDoc from '../assets/maleDoc.png'

function SearchButton() {
  return <Button  variant='outline' color='teal' rightSection={<IconArrowRight size={14} />} className='mt-20 hover:bg-emerald-200'>FIND PROVIDERS</Button>;
}

function HeroCard() {
  return (
    <div className='flex justify-between'>
      <img src={maleDoc} alt="smiling doctor with holding a medical records" className='pt-6' />
      <div className='p-12'>
        <h1 className='text-6xl font-bold text-gray-700'>Find MediCare Anytime Wherever You Are 24/7</h1>
        <p className='mt-20 text-lg font-semibold text-gray-500'>Locate to seek medical care and advice from health specialists near you.</p>
        <SearchButton />
      </div>
    </div>
  )
}


export default HeroCard;