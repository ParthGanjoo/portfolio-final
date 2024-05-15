import logo from './logo.svg';
import './App.css';
import './styles/styles.css';
import './styles/skeleton.css';
import Header from './components/Header';
import Home from './components/Home';
import Projects from './components/Projects';
import Photography from './components/Photography';
import About from './components/About';
import Footer from './components/Footer';
import { Routes, Route,  } from 'react-router-dom';
import React from 'react';

const BlobComponent = React.lazy(() => import("./components/BlobComponent"));

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/photography" element={<Photography />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <BlobComponent />
      
    </div>
  );
}

export default App;
