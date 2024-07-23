import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import ModelS from './pages/ModelS';
import ModelY from './pages/ModelY';
import ModelX from './pages/ModelX';
import Model3 from './pages/Model3';
import ModelCT from './pages/ModelCT';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/model-s" element={<ModelS />} />
          <Route path="/model-y" element={<ModelY />} />
          <Route path="/model-x" element={<ModelX />} />
          <Route path="/model-3" element={<Model3 />} />
          <Route path="/model-ct" element={<ModelCT />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
