import React from 'react';
import Navbar from './component/Nav';
import Home from './component/Home';
import About from './component/About';
import Skills from './component/Skills';
import Project from './component/Project';
import Interst from './component/Interst';

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Project />
      <Interst />
    </div>
  );
}

export default App;
