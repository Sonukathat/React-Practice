import { Bottom } from "./component/Bottom"
import { Certificate } from "./component/Certificate"
import { Contact } from "./component/Contact"
import { Education } from "./component/Education"
import { Home } from "./component/Home"
import { Header } from "./component/Navbar"
import { Project } from "./component/Project"
import { Skills } from "./component/Skills"


function App() {
  return(
    <>
      <Header/>
      <Home/>
      <Education/>
      <Project/>
      <Skills/>
      <Certificate/>
      <Contact/>
      <Bottom/>
    </>
  )
}

export default App
