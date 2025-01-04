import ArtistStack from "./components/ArtistStack"
import CategoryStack from "./components/CategoryStack"
import Container from "./components/Container"
import Header from "./components/Header/Header"
import { Outlet } from "react-router"
import Homepage from "./pages/Homepage"
import ShowAll from "./pages/ShowAll"
import MusicControls from "./components/MusicControls"

function App() {
  return (
    <>
      <Header/>
      <Outlet/>
      <MusicControls/>
    </>
  )
}

export default App
