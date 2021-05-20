
import React from 'react';
import { Redirect, Route } from 'react-router';
import PropTypes from 'prop-types';

export const PrivateRoute = ({

    isAuthenticated,
    component: Component,
    ...rest  // el resto de los elementos 

}) => {

    
    localStorage.setItem('lastPath', rest.location.pathname);

    return (
        <Route {...rest}
            component={(props) => (
                (isAuthenticated)  // si esta autenticado, quiero regresar el componente al cual el usuario quiere entrar
                    ? (<Component {...props} />)
                    : (<Redirect to="/login" />)
            )}

        />
    )
}

PrivateRoute.protoType = {
    isAuthenticated: PropTypes.bool.isRequired,
    component: PropTypes.func.isRequired

}