import pic from '../assets/WhatsApp Image 2025-01-11 at 12.34.04 PM.jpeg';
import { useState, useEffect } from 'react';
   
  export const Home = () => {
    const text = "Frontend Developer 💻";
    const [displayText, setDisplayText] = useState('');
    const [index, setIndex] = useState(0);
  
    useEffect(() => {
      let typingTimeout;
  
      if (index < text.length) {
        typingTimeout = setTimeout(() => {
          setDisplayText((prev) => prev + text.charAt(index));
          setIndex((prevIndex) => prevIndex + 1);
        }, 100);
      } else {
        typingTimeout = setTimeout(() => {
          setDisplayText('');
          setIndex(0);
        }, 1500);
      }
  
      return () => clearTimeout(typingTimeout);
    }, [index, text]);

    return (
        <>
          <div className='flex justify-around bg-black'>
            <div>
              <h1 class="text-4xl font-bold mt-64 text-cyan-300">Hi!, I Am<br/>Sonu Kathat</h1>
              <h2 className='text-orange-500 text-lg mt-4 font-bold'>{displayText}</h2>
            </div>
            <div>
              <img className='w-96 h-96 rounded-full mt-32 shadow-[0_0_20px_#22d3ee]' src={pic} alt="Picture" />
            </div>
          </div>
        </>
    )
}