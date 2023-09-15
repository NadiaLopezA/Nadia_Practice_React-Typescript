import { useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import { LoginPage } from '../auth';
import { SearchPage } from '../dogs';

import { useAuthStore } from '../hooks';


export const AppRouter = () => {

    const { status, checkAuthToken } = useAuthStore();

    useEffect(() => {
        checkAuthToken();
    }, []);


    if (status === 'checking') {
        return (
            <div>
                Cargando ...
            </div>
        )
    }

    return (
        <Routes>
            {
                (status === 'not-authenticated')
                    ? (
                        <>
                            <Route path="auth/login" element={<LoginPage />} />
                            <Route path="/*" element={<Navigate to="/auth/login" />} />
                        </>
                    )
                    : (
                        <>
                            <Route path="/" element={<SearchPage />} />
                            <Route path="/*" element={<Navigate to="/" />} />
                        </>
                    )
            }
        </Routes>
    )
}