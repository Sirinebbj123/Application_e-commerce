import React from "react";
import UseAuth from "../Custom-hooks/useAuth";
import { Navigate } from "react-router-dom";
import {Outlet} from "react-router-dom"

const ProtectedRoute = () => {
    const { currentuser } = UseAuth();

    return currentuser ? <Outlet/> : <Navigate to='/Login' />;
};

export default ProtectedRoute;