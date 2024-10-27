import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from './Dashboard';
import WaterQualityStatus from './pages/WaterQualityStatus';
import Login from './pages/Login';

const AppRoutes = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/login" element={<Login />} />
                <Route path="/prediction" element={<WaterQualityStatus />} />


            </Routes>
        </Router>
    );
};

export default AppRoutes;
