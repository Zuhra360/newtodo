import React, { useState } from 'react'
import image1 from '../../assets/images/image.png';
import { Box } from '@mantine/core';

export const HomePage = () => {
  const[age,setAge]= useState('');
  const[weight,setWeight]= useState('');
  const[feet,setFeet]= useState('');
  const[inch,setInch]= useState('');
  const [bmi, setBmi] = useState(null);

  const calculateBMI = () => {
    
    const heightInMeters = ((parseInt(feet) * 12) + parseInt(inch)) * 0.0254;
    const calculatedBMI = (parseFloat(weight) / (heightInMeters * heightInMeters)).toFixed(2);
    setBmi(calculatedBMI);
  };

   
  return (
    <div className='w-full h-screen bg-gray-100 flex justify-center items-center'>
      <div className='w-4/5 h-2/3 bg-white flex justify-center items-center  flex-col'>
       <div className='flex flex-row'>
        <img src={image1} className='p-2' />
        <div>
        <h1 className='text-4xl font-bold px-8 py-4 '>BMI Calculator</h1>
        <p className='text-xl font-semibold px-8 pb-4'>Body Mass Index</p>
        </div>
       
       </div>
       
       <Box className='w-11/12 h-2/3 bg-white flex flex-col gap-12'>

         <Box className='flex flex-row gap-56'>
         <div className=' w-44 h-12 flex flex-col '>
          <p className='text-xl pt-8 px-12'>Gender</p>
          <div className='flex flex-row gap-4 p-2 pl-12  w-96'>
          <button className='w-56 h-8 bg-white border-red-600 border-2 rounded-md'>Male</button>
          <button className='w-56 h-8 bg-white border-red-600 border-2 rounded-md'>Female</button>

          </div>
         </div>

         <div className=' w-44 h-12 flex flex-col '>
          <p className='text-xl pt-8 px-12'>Age</p>
          <div className='flex flex-row gap-4 p-2 pl-12 w-96'>
            <input
            id="length"
            name="length"
            type="number"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            placeholder='in years'
            className="border-2 border-black w-36 p-1 text-base rounded "
            />
          </div>
          </div>
         

            <Box className='flex w-96 h-24 '>
              
              <label className='text-xl font-semibold p-4'>Your BMI :</label>
                  <input
                  id='bmi'
                  name='bmi'
                  value={bmi || ''} 
                  readOnly
                  className='w-20  h-14 font-semibold text-xl text-red-600 text-center text-lg '/>
            </Box>

         </Box>

         <Box className='flex flex-row gap-56'>
         <div className=' w-44 h-12 flex flex-col '>
          <p className='text-xl pt-8 px-12'>Height</p>
          <div className='flex flex-row gap-4 p-2 pl-12  w-96'>
          <input
            id="length"
            name="length"
            type="number"
            value={feet}
            onChange={(e) => setFeet(e.target.value)}
            placeholder='FT'
            className="border-2 border-black w-36 p-1 text-base rounded "
            />
            <input
            id="length"
            name="length"
            type="number"
            value={inch}
            onChange={(e) => setInch(e.target.value)}
            placeholder='IN'
            className="border-2 border-black w-36 p-1 text-base rounded "
            />
          </div>
         </div>

         <div className=' w-44 h-12 flex flex-col '>
          <p className='text-xl pt-8 px-12'>Weight</p>
          <div className='flex flex-row gap-4 p-2 pl-12  w-96'>
            <input
            id="length"
            name="length"
            type="number"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            placeholder='in Kgs'
            className="border-2 border-black w-36 p-1 text-base rounded "
            />
          </div>
          </div>
         </Box>
         
         <Box className='w-11/12 h-1/3 flex justify-center items-center mt-8'>
         <button onClick={calculateBMI} className='w-56 h-8 bg-red-600 text-white px-1 border-red-600 border-2 rounded-md text-xl'>Calculate</button>

         </Box>

         

         


       </Box>

       




          
      </div>
      
    </div>
  )
}
