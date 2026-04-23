import React from 'react';
import { HashRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Projects from './pages/Projects';
import './App.css';

function App() {
  return (
    <HashRouter>
      <div className="app-shell">
        <Navbar />
        <main className="app-main">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
          </Routes>
        </main>
      </div>
    </HashRouter>
  );
}

export default App;
