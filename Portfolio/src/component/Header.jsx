export const Header = () => {
    return (
        <>
          <nav className="bg-neutral-900 flex justify-around h-15 items-center sticky top-0">
            <div>
                <p className="text-3xl font-bold text-cyan-300">Sonu's Portfolio</p>
            </div>
            <div>
                <ul className="flex justify-around gap-10">
                    <li><a className="text-cyan-300" href="#home">Home</a></li>
                    <li className="text-cyan-300"><a href="#education">Education</a></li>
                    <li className="text-cyan-300"><a href="#project">Projects</a></li>
                    <li className="text-cyan-300"><a href="#skills">Skills</a></li>
                    <li className="text-cyan-300"><a href="#certificate">Certificate</a></li>
                    <li className="text-cyan-300"><a href="#contact">Contact</a></li>
                </ul>
            </div>
          </nav>
        </>
    )
}