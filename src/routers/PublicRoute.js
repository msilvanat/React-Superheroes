
import React from 'react';
import { Redirect, Route } from 'react-router';
import PropTypes from 'prop-types';

export const PublicRoute = ({

    isAuthenticated,
    component: Component,
    ...rest  // el resto de los elementos 

}) => {

    return (
        <Route  {...rest}
            component={(props) => (
                (!isAuthenticated)  // si esta autenticado, quiero regresar el componente al cual el usuario quiere entrar
                    ? (<Component {...props} />)
                    : (<Redirect to="/" />)
            )}

        />
    )
}

PublicRoute.protoType = {
    isAuthenticated: PropTypes.bool.isRequired,
    component: PropTypes.func.isRequired

}