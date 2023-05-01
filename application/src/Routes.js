import React from 'react';
import { Routes, Route } from 'react-router-dom';
import View from './pages/View';

const MyRoutes = () => {
    return (
        <Routes>
            <Route path='pathfinder'>
                <Route path=':loc' element={<View/>} />
            </Route>
        </Routes>
    )
}

export default MyRoutes;