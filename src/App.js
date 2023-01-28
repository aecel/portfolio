import "./styles/style.css"
import Footer from "./components/Footer"
import ProjectCards from "./components/ProjectCards"
import Introduction from "./components/Introduction"

const App = () => {

  return (
    <div className="App">
      <header></header>
      <main>
        <Introduction />
        <ProjectCards />
      </main>
      <Footer />
    </div>
  )
}

export default App
