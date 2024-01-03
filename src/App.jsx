
import { Outlet } from 'react-router-dom'
import './App.css'
import Home from './home/Home'
import Navitems from './components/Navitems'
import Footer from './components/Footer'

function App() {

  return (
    <>
    <Navitems/>
      <Outlet/>
      <Footer/>
    </>
  )
}

export default App
