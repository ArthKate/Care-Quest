import { Title } from '@mantine/core';
import { NavLink } from 'react-router-dom';

function PatientFormTitle() {
  return (
    <>
      <Title size='h1'>Patient Information Form</Title>
    </>
  );
}


export const PatientForm = () => {

  return (
    <div className='mt-10'>
      <PatientFormTitle />
    </div>
  )
}