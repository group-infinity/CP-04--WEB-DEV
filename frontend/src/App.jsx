import Navbar from "./layout/Navbar"
import "./index.css"
import Home from './pages/Home.jsx';
import Cards from './components/Cards.jsx'
import Footer from './components/Footer.jsx'



function App() {
  return (
    <>
      <Navbar></Navbar>
      <Home></Home>
      <Cards></Cards>
      <Footer></Footer>
    </>
  )
}

export default App
