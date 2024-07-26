

import { Route, Routes } from 'react-router-dom'
import './App.css'
import Login from './components/Login'
import Navbar from './components/Navbar'
import Singup from './components/Singup'
import Statebasics from './components/Statebasics'
import Counter from './components/Counter'
import Greet from './components/Greet'
import Mapping from './components/Mapping'
import Api from './components/Api'
import Posts from './components/Posts'
import Poke from './components/Poke'

function App() {
  
  return (
    <>
      <Navbar /><br/>
      
      <Routes>
        <Route path="/sing" element={<Singup></Singup>}/>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='S' element={<Statebasics></Statebasics>}></Route>
        <Route path="/count" element={<Counter></Counter>}></Route>
        <Route path='/greet' element={<Greet></Greet>}></Route>
        <Route path='/map' element={<Mapping></Mapping>}></Route>
        <Route path="/api" element={<Api></Api>}></Route>
        <Route path="/posts" element={<Posts></Posts>}></Route>
        <Route path="/poke" element={<Poke></Poke>}></Route>
      </Routes>
     
      
    </>
  )
}

export default App
