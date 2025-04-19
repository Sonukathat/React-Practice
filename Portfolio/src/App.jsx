import { Bottom } from "./component/Bottom"
import { Certificate } from "./component/Certificate"
import { Contact } from "./component/Contact"
import { Education } from "./component/Education"
import { Home } from "./component/Home"
import { Header } from "./component/Header"
import { Project } from "./component/Project"
import { Skills } from "./component/Skills"


function App() {
  return(
    <>
      <div className="scroll-smooth">
      <Header/>
      <Home/>
      <Education/>
      <Project/>
      <Skills/>
      <Certificate/>
      <Contact/>
      <Bottom/>
      </div>
    </>
  )
}

export default App
