import React from 'react';
import HardSkills from './hardSkills';
import Projetos from './projetos';
import './main.css';

function Main() {
  return (
    <div className="main">
      <section>
        <HardSkills />  
      </section>
      <section id="projects">
        <Projetos />  
      </section>  
    </div>
  )
}

export default Main;
