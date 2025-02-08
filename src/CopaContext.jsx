import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

export const CopaContext = React.createContext();

export const CopaStorage = ({ children }) => {

    const [started, setStarted] = useState(false);
    const navigate = useNavigate();

    function start(){
        setStarted(true);
        navigate('/copa')
    }

    return (
        <CopaContext.Provider
            value={{start, started, setStarted}}>
            {children}
        </CopaContext.Provider>
    )
}

