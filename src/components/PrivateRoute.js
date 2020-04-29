
import React, {useContext} from 'react';
import { Route, Redirect } from 'react-router-dom';
import {  MotorcyclesContext } from '../context';
import Login from '../layout/Login';

const PrivateRoute = ({component: Component, ...rest}) => {
    const {  state } = useContext(MotorcyclesContext);
    return (
        <Route {...rest} render={props => (
            !state.isAuthenticated ?
                <Login />
            : <Redirect to="/" />
        )} />
    );
};

export default PrivateRoute;
