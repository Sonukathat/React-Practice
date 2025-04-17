export const Header = () => {
    return (
        <>
          <nav className="bg-neutral-900 flex justify-around h-15 items-center sticky top-0">
            <div>
                <p className="text-3xl font-bold text-cyan-300">Sonu's Portfolio</p>
            </div>
            <div>
                <ul className="flex justify-around gap-10">
                    <li className="text-cyan-300">Home</li>
                    <li className="text-cyan-300">Education</li>
                    <li className="text-cyan-300">Projects</li>
                    <li className="text-cyan-300">Skills</li>
                    <li className="text-cyan-300">Certificate</li>
                    <li className="text-cyan-300">Contact</li>
                </ul>
            </div>
          </nav>
        </>
    )
}