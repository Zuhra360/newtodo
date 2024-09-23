import React, { useState } from 'react'

export const Home = () => {
  
  const [length, setLength] = useState(8); 
  const [includeNumbers, setIncludeNumbers] = useState(false);
  const [includeSpecialChars, setIncludeSpecialChars] = useState(false);
  const [generatedPassword, setGeneratedPassword] = useState("");

  const generatePassword = () => {
    let chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"; 

    
    if (includeNumbers) {
      chars += "0123456789";
    }
    if (includeSpecialChars) {
      chars += "!@#$%^&*";
    }

    let password = "";
    for (let i = 0; i < length; i++) {
      password += chars.charAt(Math.floor(Math.random() * chars.length));
    }

    setGeneratedPassword(password);
  };
  return (
    <div className='w-full h-screen bg-gray-100 flex justify-center items-center'>
      <div className='w-3/6 h-2/4 bg-white flex justify-center items-center flex-col'>
      
        
        <div className='flex flex-row items-center p-8  gap-4 '>
            <label className='text-xl font-semibold'>Length</label>
            <input
            id="length"
            name="length"
            type="number"
            onChange={(e) => setLength(e.target.value)}
            value={length}
            className="border-2 border-black w-36 p-1 text-base rounded bg-gray-200"
        />
        </div>
        
        <div className='flex flex-row items-center gap-8'>
          <div >
          <input
                  type="checkbox"
                  checked={includeNumbers}
                  onChange={() => setIncludeNumbers(!includeNumbers)}
                  className="form-checkbox rounded-full text-blue-600 w-4 h-4 p-2" 
          />
          <label  className='text-xl font-semibold p-4'>Number</label>
          </div>
          <div>
          <input
                  type="checkbox"
                  checked={includeSpecialChars}
                  onChange={() => setIncludeSpecialChars(!includeSpecialChars)}
                  className="form-checkbox rounded-full text-blue-600 w-4 h-4 p-2"
          />
          <label className='text-xl font-semibold p-4'>Special Character</label>
          </div>

          </div>
          
          <button onClick={generatePassword} className="font-medium text-lg items-center bg-black text-white px-8 mt-8 py-1 rounded-lg" type="submit">Generate</button>
          <label className='text-xl font-semibold p-4'>Your Password is:</label>
          <input
          id='pwd'
          name='pwd'
          value={generatedPassword} 
          className='w-44 bg-gray-200 h-12 text-center text-lg font-mono'/>

        


      </div>
    </div>
  )
}
