import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Shareable from './Components/Shareable';
import Home from './Components/Home';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/:slug" element={<Shareable />} />
            </Routes>
        </Router>
    );
}

export default App;
