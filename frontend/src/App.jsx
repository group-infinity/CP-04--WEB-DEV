import Navbar from "./layout/Navbar"
import "./index.css"
import Home from './pages/Home.jsx';
import Cards from './components/Cards.jsx'


function App() {
  return (
    <>
      <Navbar></Navbar>
      <Home></Home>
      <Cards></Cards>
    </>
  )
}

export default App
