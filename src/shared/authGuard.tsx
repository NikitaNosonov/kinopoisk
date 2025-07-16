import React from 'react';
import {UserData} from "./typesData";
import {Navigate} from 'react-router-dom';

interface authGuardProps {
    userRole: string;
    children: React.ReactNode;
}

export const AuthGuard = ({userRole, children}: authGuardProps) => {
    const userDataStr = localStorage.getItem('data');
    const userData = userDataStr ? JSON.parse(userDataStr) as UserData : null;
        if (userData?.role !== userRole) {
            alert("Не туда полез:)")
            return <Navigate to='/login' replace/>;
        }
        return <>{children}</>;
    return <Navigate to='/login' replace/>;
};
