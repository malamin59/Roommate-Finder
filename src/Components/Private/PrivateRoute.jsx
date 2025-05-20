import React, { use } from 'react';
import { AuthContext } from '../../Context/AuthContext';
import { Navigate } from 'react-router-dom';
import Loading from '../loading';

const PrivateRoute = ({ children }) => {
    const { user,  loading} = use(AuthContext)
    if (loading) {
        return <Loading></Loading>
    }
    if (user && user.email) {
        return children
    }
    return <Navigate state={location.pathname} to="/signin"> </Navigate>

};

export default PrivateRoute;