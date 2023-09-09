import {Routes, Route, Navigate} from 'react-router-dom';

import { LoginPage } from '../auth';
import { SearchPage } from '../dogs/pages';
// import { SearchPage } from '../dogs/pages';


export const AppRouter = () => {

    return(
        <Routes>
            <Route path="auth/login" element={<LoginPage />} />
            <Route path="search" element={<SearchPage /> } />
            <Route path="/*" element={ <Navigate to="/auth/login" /> } />
        </Routes>
    )


}