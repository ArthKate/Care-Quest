// import { useNavigate } from 'react-router-dom';
// // import { Button } from '@mantine/core'
// import nobgSmilingDoc from '../assets/nobgSmilingDoc.png';
// import { IconArrowRight } from '@tabler/icons-react';
// import { PatientForm } from './PatientForm';

// function HeroCard() {
//   let navigate = useNavigate();
//   return (
//     <>
//       <div className='flex flex-col justify-center md:flex-row md:justify-between bg-emerald-100'>

//         {/* image section */}

//         <div className=' flex flex-col self-center w-1/2 h-full px-5 py-2 mb-2 md:mb-5 md:py-10 md:px-10'>
//           <img
//             src={nobgSmilingDoc}
//             alt='smiling doctor with holding a medical records'
//             className='object-contain max-w-full max-h-full pt-2 md:pt-10'
//           />
//         </div>

//         {/* Hero header and subheader section */}

//         <div className='flex flex-col self-center w-1/2 h-full px-5 py-2 md:py-10 md:px-10'>
//           <h1 className='flex justify-center items-center text-3xl md:text-5xl lg:6xl px-3  py-2 mb-5 md:mb-10 font-montserrat font-semibold'>
//             Find MediCare Anytime Wherever You Are 24/7.
//           </h1>

//           <p className='flex justify-center items-center text-lg md:text-xl lg:2xl px-3 py-2 text-gray-600 font-montserrat font-normal mb-5 md:mb-10'>
//             Locate to seek medical care and advice from specialized health
//             professionals near you with Care Quest.
//           </p>

//           {/* buttons section */}

//           <div className='flex flex-col md:flex-row justify-evenly items-center md:file:placeholder:w-48 overflow-hidden rounded'>
//             <button
//               className=' w-full md:w-48 h-10 m-5 md:text-baseline hover:font-bold rounded text-white text-lg bg-emerald-600 hover:bg-emerald-950'
//               onClick={() => navigate('/register')}
//             >
//               Register
//             </button>

//             <button
//               className='w-full md:w-48 h-10 m-5 md:text-baseline hover:font-bold rounded  text-white text-lg  bg-emerald-600 hover:bg-emerald-950'
//               onClick={() => navigate('/specialist')}
//             >
//               Find Specialist
//             </button>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }
// // export default HeroCard;
