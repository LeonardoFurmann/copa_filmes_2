import React, { useContext } from 'react'
import { CopaContext } from '../CopaContext';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({children}) => {
   const { started } = useContext(CopaContext);

   console.log(started)

  return started ? children : <Navigate to="/"/>; 
}

export default ProtectedRoute