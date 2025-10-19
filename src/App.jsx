import React from 'react'
import {BrowserRouter, Route, Routes} from "react-router-dom"
import Home from './Home'
import Liked from './Liked'
import Search from './Search'
import Playlist from './Playlist'
import Nav from './components/Nav'


function App() {
  return (
    <BrowserRouter>
    <Nav/>
    <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/liked' element={<Liked/>}/>
            <Route path='/search' element={<Search/>}/>
            <Route path='/playlist' element={<Playlist/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App
