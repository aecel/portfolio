import "./styles/style.css"
import Footer from "./components/Footer"
import Introduction from "./components/Introduction"
import ProjectBrowser from "./components/ProjectBrowser"
import ContactMe from "./components/ContactMe"

const App = () => {
  return (
    <div id="App">
      {/* <header></header> */}
      <main>
        <Introduction />
        <ProjectBrowser />
        <ContactMe />
      </main>
      <Footer />
    </div>
  )
}

export default App
