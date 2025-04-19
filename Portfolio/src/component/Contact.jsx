import { SiMinutemailer } from "react-icons/si";
import { IoCall } from "react-icons/io5";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const downloadResume = () => {
  const link = document.createElement("a");
  link.href = "/SonuKathat_Resume.pdf";
  link.download = "My_Resume.pdf";
  document.body.appendChild(link); 
  link.click();
  document.body.removeChild(link);
};

export const Contact = () => {
    return(
        <>
          <div id="contact" className="bg-black pt-32">
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
                  <div className="flex gap-10 mt-16">
                    <a href="https://www.linkedin.com/in/sonu-kathat-6697ba2b8/" target="_blank"><FaLinkedin className="h-10 w-10 text-cyan-300 hover:-translate-y-2 transition-transform duration-200"/></a>
                    <a href="https://github.com/Sonukathat" target="_blank"><FaGithub className="h-10 w-10 text-cyan-300 hover:-translate-y-2 transition-transform duration-200"/></a>
                  </div>
                  <div className="mt-16">
                    <button className="border border-cyan-500 text-cyan-400 h-12 w-40 rounded hover:shadow-[0_0_15px_#22d3ee]" onClick={downloadResume}>Download Resume</button>
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