import { useState } from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Components/Home';
import Copa from './Components/Copa';
import Vencedor from './Components/Vencedor';
import { CopaStorage } from './CopaContext';
import ProtectedRoute from './Components/ProtectedRoute';

function App() {
   return (
      <div className='App'>
         <BrowserRouter >
            <CopaStorage>
               <main className='AppBody'>
                  <Routes>
                     <Route path='/' element={<Home/>} />
                     <Route path='copa' element={<ProtectedRoute><Copa/></ProtectedRoute>}/>
                     <Route path='vencedor' element={ <ProtectedRoute><Vencedor /></ProtectedRoute>}/>
                  </Routes>
               </main>
            </CopaStorage>
         </BrowserRouter>
      </div>
   )
}

export default App
