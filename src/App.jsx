
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Login from './Components/Pages/Login'
import Navbar from './Components/Navbar/Navbar'
import Home from './Components/Pages/home'
import './multiLan'

function App() {

  return (
    <>
     <Navbar />
     <Routes>     
      <Route path='/' element={<Home/>} />
      <Route path='/login' element={<Login/>} />

     </Routes>
    </>
  )
}

export default App
