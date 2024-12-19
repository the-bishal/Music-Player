import ArtistStack from "./components/ArtistStack"
import CategoryStack from "./components/CategoryStack"
import Container from "./components/Container"
import Header from "./components/Header/Header"
import LibrarySection from "./components/LibrarySection"
import Homepage from "./pages/Homepage"
import ShowAll from "./pages/ShowAll"

function App() {
  return (
    <>
      <Header/>
      <div className="flex gap-2">
        <LibrarySection/>
          <Container>
              <CategoryStack/>
              <CategoryStack/>
              <CategoryStack/>
              <ArtistStack/>
          </Container>
      </div>

    </>
  )
}

export default App
