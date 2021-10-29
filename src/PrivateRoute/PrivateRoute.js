import React from 'react';
import { Redirect, Route } from 'react-router';
import useFirebase from '../hooks/useFirebase';

const PrivateRoute = ({children, ...rest}) => {
    const {user, isLoading} = useFirebase();
    if(isLoading){
        return 'loading'
    }
    return (
        <Route
            {...rest}
            render={({ location }) => user.email ? children : <Redirect
                to={{
                    pathname: !user?.email && "/login",
                    state: { from: location }
                }}
            ></Redirect>}
        >

        </Route>
    );
};

export default PrivateRoute;