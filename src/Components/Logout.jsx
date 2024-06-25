import React, { useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../store/auth';
import { toast } from 'react-toastify';

function Logout() {

    const {LogoutUser} = useAuth();

    useEffect(()=>{
        LogoutUser();
    },[LogoutUser]);
    toast.success("Logout Successfully");
    return <Navigate to="/Login"/>
};

export default Logout;