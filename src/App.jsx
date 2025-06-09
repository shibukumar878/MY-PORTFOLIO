import React from 'react';
import Nav from './components/Nav';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';


const App = () => {
  return (
    <div>
       <Nav />
      <Home id="home"/>
      <About id="about"/>
      <Projects/>
      <Skills/>
      <Contact/>
    </div>
  );
};

export default App;

     
   