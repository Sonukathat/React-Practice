import html from '../assets/download (1).jpg'
import css from '../assets/css-icon5555.logowik.com.webp'
import js from '../assets/download.png'
import react from '../assets/images.png'
import tailw from '../assets/tailwind-css-logo-png_seeklogo-354675.png'
import c from '../assets/images.jpg'
import cs from '../assets/c-sharp-programming-language-sign-600nw-1953851587.webp'
import net from '../assets/download (1).png'

export const Skills = () => {
    return(
        <>
          <div id='skills' className="bg-black pt-32">
            <p className='text-center text-5xl font-bold text-cyan-300'>Skills</p>
            <div className='mt-24 flex justify-center gap-16'>
              <div className='rounded-tl-3xl rounded-br-3xl border-2 border-cyan-400 h-36 w-60 flex flex-col items-center gap-5 hover:shadow-[0_0_20px_#22d3ee] hover:-translate-y-3 hover:-translate-x-3 transition-transform duration-200'>
                <img className='h-14 w-14 rounded-full mt-5' src={html} alt="HTML" />
                <p className='text-cyan-400 font-bold'>HTML</p>
              </div>
              <div className='rounded-tl-3xl rounded-br-3xl border-2 border-cyan-400 h-36 w-60 flex flex-col items-center gap-5 hover:shadow-[0_0_20px_#22d3ee] hover:-translate-y-3 transition-transform duration-200'>
                <img className='h-14 w-14 rounded-full mt-5' src={css} alt="CSS" />
                <p className='text-cyan-400 font-bold'>CSS</p>
              </div>
              <div className='rounded-tl-3xl rounded-br-3xl border-2 border-cyan-400 h-36 w-60 flex flex-col items-center gap-5 hover:shadow-[0_0_20px_#22d3ee] hover:-translate-y-3 transition-transform duration-200'>
                <img className='h-14 w-14 rounded-full mt-5' src={js} alt="JAVASCRIPT"/>
                <p className='text-cyan-400 font-bold'>JAVASCRIPT</p>
              </div>
              <div className='rounded-tl-3xl rounded-br-3xl border-2 border-cyan-400 h-36 w-60 flex flex-col items-center gap-5 hover:shadow-[0_0_20px_#22d3ee] hover:-translate-y-3 hover:translate-x-3 transition-transform duration-200'>
                <img className='h-14 w-14 rounded-full mt-5' src={react} alt="RAECT"/>
                <p className='text-cyan-400 font-bold'>REACT</p>
              </div>
            </div>
            <div className='mt-20 flex justify-center gap-16'>
              <div className='rounded-tl-3xl rounded-br-3xl border-2 border-cyan-400 h-36 w-60 flex flex-col items-center gap-5 hover:shadow-[0_0_20px_#22d3ee] hover:-translate-y-3 hover:-translate-x-3 transition-transform duration-200'>
                <img className='h-14 w-14 rounded-full mt-5' src={tailw} alt="TAILWIND" />
                <p className='text-cyan-400 font-bold'>TAILWIND CSS</p>
              </div>
              <div className='rounded-tl-3xl rounded-br-3xl border-2 border-cyan-400 h-36 w-60 flex flex-col items-center gap-5 hover:shadow-[0_0_20px_#22d3ee] hover:-translate-y-3 transition-transform duration-200'>
                <img className='h-14 w-14 rounded-full mt-5' src={c} alt="C" />
                <p className='text-cyan-400 font-bold'>C</p>
              </div>
              <div className='rounded-tl-3xl rounded-br-3xl border-2 border-cyan-400 h-36 w-60 flex flex-col items-center gap-5 hover:shadow-[0_0_20px_#22d3ee] hover:-translate-y-3 transition-transform duration-200'>
                <img className='h-14 w-14 rounded-full mt-5' src={cs} alt="C SHARP" />
                <p className='text-cyan-400 font-bold'>C#</p>
              </div>
              <div className='rounded-tl-3xl rounded-br-3xl border-2 border-cyan-400 h-36 w-60 flex flex-col items-center gap-5 hover:shadow-[0_0_20px_#22d3ee] hover:-translate-y-3 hover:translate-x-3 transition-transform duration-200'>
                <img className='h-14 w-14 rounded-full mt-5' src={net} alt="DOT NET" />
                <p className='text-cyan-400 font-bold'>.NET</p>
              </div>
            </div>
          </div>
        </>
    )
}