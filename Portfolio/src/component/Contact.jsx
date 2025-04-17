import { SiMinutemailer } from "react-icons/si";
import { IoCall } from "react-icons/io5";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

export const Contact = () => {
    return(
        <>
          <div className="bg-black pt-32">
            <p className="text-center text-5xl font-bold text-cyan-300">Contact Me</p>
            <div className="mt-32 border flex justify-around">
              <div>
                  <div className="flex mt-4">
                    <SiMinutemailer className="h-7 w-7 text-cyan-300"/>
                    <p className="text-lg text-cyan-300 ml-4">skkhankathat@gmail.com</p>
                  </div>
                  <div className="flex mt-4">
                    <IoCall className="h-6 w-6 text-cyan-300"/>
                    <p className="text-lg text-cyan-300 ml-4">+91 9649642031</p>
                  </div>
                  <div className="flex gap-10 mt-24">
                    <FaLinkedin className="h-10 w-10 text-cyan-300"/>
                    <FaGithub className="h-10 w-10 text-cyan-300"/>
                  </div>
              </div>
              <div>
                  <form action="#" className="flex flex-col gap-10">
                      <input className="w-lg h-10 bg-neutral-800 rounded pl-2 text-white" type="text" placeholder="Your Name" />
                      <input className="w-lg h-10 bg-neutral-800 rounded pl-2 text-white" type="text" placeholder="Your Email"/>
                      <textarea className="w-lg h-32 bg-neutral-800 rounded pl-2 text-white" placeholder="Your Message" name="tarea" id="tarea"></textarea>
                      <button className="bg-cyan-500 w-48 h-12 mb-16 rounded">Send</button>
                  </form>
              </div>
              </div>
          </div>
        </>
    )
}