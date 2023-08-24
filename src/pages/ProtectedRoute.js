import { Navigate } from 'react-router-dom';

import React from 'react';
import { useSelector } from 'react-redux';

const ProtectedRoute = ({ children }) => {
    const { user } = useSelector((store) => store.user);
    if (!user) {
        return <Navigate to="/langding" />;
    }
    return children;
};

export default ProtectedRoute;
