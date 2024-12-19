import Header from "./components/Header/Header"
import LibrarySection from "./components/LibrarySection"
import Homepage from "./pages/Homepage"

function App() {
  return (
    <>
      <Header/>
      <div className="flex gap-2">
        <LibrarySection/>
        <Homepage/>
      </div>

    </>
  )
}

export default App
