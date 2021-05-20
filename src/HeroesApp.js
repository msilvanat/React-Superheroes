import React, { useEffect, useReducer } from 'react';
import { AuthContext } from './auth/AuthContext';
import { authReducer } from './auth/authReducer';
import { AppRouter } from './routers/AppRouter';

// siempre creo el init poeque voy a leer el localstrorage, para ver si tenemos ese objeto (el user)
// si no existe el usuario retorno un objeto que tiene el logged en false 
const init = () => {
    return JSON.parse(localStorage.getItem('user')) || { logged : false };
}

export const HeroesApp = () => {
    const [ user, dispatch] = useReducer(authReducer, {}, init);

    // Efecto que grabe en el localStorage que tenga como dependencia el usuario y que se dispare 
    // cada vez que el usuario cambia, y va a grabar en el localStorage

    useEffect(() => {        
        localStorage.setItem( 'user', JSON.stringify(user));
    }, [user])

    return (
        // higher order component 
        <AuthContext.Provider value={{ user, dispatch }}>
            <AppRouter />
        </AuthContext.Provider>
    )
}
