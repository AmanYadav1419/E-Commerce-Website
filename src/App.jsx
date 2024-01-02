
import { Outlet } from 'react-router-dom'
import './App.css'
import Home from './home/Home'
import Navitems from './components/Navitems'

function App() {

  return (
    <>
    <Navitems/>
      <Outlet/>
    </>
  )
}

export default App
