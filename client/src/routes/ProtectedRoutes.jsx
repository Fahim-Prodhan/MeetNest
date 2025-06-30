import React, {  } from 'react';
import { Navigate } from 'react-router';
import { useAuthContext } from '../context/authContext';

const ProtectedRoutes = ({children}) => {

    const { authUser,loadingUser } = useAuthContext();

    if (loadingUser) {
        return <div className="flex justify-center"><span className="loading loading-ring loading-xs"></span>
            <span className="loading loading-ring loading-sm"></span>
            <span className="loading loading-ring loading-md"></span>
            <span className="loading loading-ring loading-lg"></span></div>
    }

    if (authUser) {
        return children;
    }

    return <Navigate state={location.pathname} to='/login'></Navigate>

};

export default ProtectedRoutes;