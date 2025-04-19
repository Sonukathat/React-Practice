import pic1 from '../assets/Screenshot 2025-04-15 105551.png'
import pic2 from '../assets/Screenshot 2025-04-15 105627.png'
import pic3 from '../assets/Screenshot 2025-04-15 105655.png'
import pic4 from '../assets/Screenshot 2025-04-15 105714.png'

export const Project = () => {
    return(
        <>
          <div className='bg-black pt-32'>
            <p className='text-center text-5xl font-bold text-cyan-300'>Project</p>
            <div className='flex justify-center gap-32 mt-28'>
                <a href="https://sonukathat.github.io/Cloth-Website/" target='_blank'><img className='h-64 w-96 rounded-2xl shadow-[0_0_20px_#22d3ee] border-2 border-cyan-500 transition-transform duration-300 hover:scale-105' src={pic1} alt="cloth" /></a>
                <a href="https://sonukathat.github.io/Food_Website/" target='_blank'><img className='h-64 w-96 rounded-2xl shadow-[0_0_20px_#22d3ee] border-2 border-cyan-500 transition-transform duration-300 hover:scale-105' src={pic2} alt="food" /></a>
            </div>
            <div className='flex justify-center gap-32 mt-28'>
                <a href="https://sonukathat.github.io/Weather-App/" target='_blank'><img className='h-64 w-96 rounded-2xl shadow-[0_0_20px_#22d3ee] border-2 border-cyan-500 transition-transform duration-300 hover:scale-105' src={pic3} alt="wether" /></a>
                <a href="https://sonukathat.github.io/Typing_Speed_Checker/" target='_blank'><img className='h-64 w-96 rounded-2xl shadow-[0_0_20px_#22d3ee] border-2 border-cyan-500 transition-transform duration-300 hover:scale-105' src={pic4} alt="typing speed" /></a>
            </div>
          </div>
        </>
    )
}