import "./styles/style.css"
import getProjectArray from "./getProjectArray"
import Footer from "./components/Footer"
import ProjectCards from "./components/ProjectCards"

const App = () => {
  const projectArray = getProjectArray()

  return (
    <div className="App">
      <header></header>
      <main>
        <ProjectCards />
      </main>
      <Footer />
    </div>
  )
}

export default App
