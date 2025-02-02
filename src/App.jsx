import { useState } from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Components/Home'; 
import Copa from './Components/Copa'; 
import Vecedor from './Components/Vencedor';

function App() {
  return (
   <div className='App'>
      <BrowserRouter >
         <main className='AppBody'>
            <Routes>
                <Route path='/' element={<Home />} ></Route>
                <Route path='copa' element={<Copa />} ></Route>
                <Route path='vencedor' element={<Vecedor />} ></Route>
            </Routes>
         </main>
      
      </BrowserRouter>
   </div>
  )
}

export default App
