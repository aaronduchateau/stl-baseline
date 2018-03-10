import React, {PropTypes} from 'react';
import {Route, Redirect} from 'react-router-dom';

import {getToken} from '../utils/storageUtil';
import Me from '../containers/dashboard/Me';

const isAuthenticated = () => {
    return !!getToken();
};

const AuthenticatedRoute = ({component: Component, ...rest}) => (
    <Route {...rest} render={props => (
        isAuthenticated() ? (
            <Me>
                <Component {...props}/>
            </Me>
        ) : (
            <Redirect to={{
                pathname: '/',
                state: {from: props.location}
            }}/>
        )
    )}/>
);

export default AuthenticatedRoute;