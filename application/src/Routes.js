import React from 'react';
import { Routes, Route } from 'react-router-dom';
import View from './pages/View';
import Home from './pages/Home';

const MyRoutes = () => {
    return (
        <Routes>
            <Route exact path='' element={<Home />}></Route>
            <Route path='pathfinder'>
                <Route path=':loc' element={<View/>} />
            </Route>
        </Routes>
    )
}

export default MyRoutes;