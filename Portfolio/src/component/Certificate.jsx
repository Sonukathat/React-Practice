import pic4 from '../assets/Screenshot 2024-12-11 102316.png'
import pic5 from '../assets/Screenshot 2024-12-16 124059.png'
import pic6 from '../assets/Screenshot 2025-01-09 101337.png'

export const Certificate = () => {
    return(
        <>
          <div className='bg-black pt-32'>
            <p className='text-center text-5xl font-bold text-cyan-300 text-cyan-300'>Certificate</p>
            <div className='mt-16 flex justify-around '>
                <img className='h-64 w-80 shadow-[0_0_20px_#22d3ee]' src={pic4} alt="" />
                <img className='h-64 w-80 shadow-[0_0_20px_#22d3ee]' src={pic5} alt="" />
                <img className='h-64 w-80 shadow-[0_0_20px_#22d3ee]' src={pic6} alt="" />
            </div>
          </div>
        </>
    )
}