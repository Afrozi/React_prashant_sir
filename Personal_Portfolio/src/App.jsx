import { Contact } from "lucide-react"
import Aboutme from "./Components/Aboutme"
import Education from "./Components/Education"
import Extracurricular from "./Components/Extracurricular"
import Header from "./Components/Header"
import Hobbies from "./Components/Hobbies"
import Project from "./Components/Project"
import Skills from "./Components/Skills"
import Contacts from "./Components/Contacts"

function App() {

  return (
    <div className="bg-slate-100 px-3 py-8">
      <div className="bg-white max-w-4xl mx-auto rounded-xl shadow-lg">
      <Header/>
      <Aboutme/>
      <Project />
      <Skills />
      <Education />
      <Hobbies />
      <Extracurricular />
      <Contacts />
      </div>
    </div>
  )
}

export default App
