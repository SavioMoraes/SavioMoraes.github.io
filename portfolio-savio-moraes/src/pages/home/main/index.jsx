import React from 'react';
import HardSkills from './hardSkills';
import Projetos from './projetos';
import Contatos from './contatos';
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
      <section id="contacts">
        <Contatos />  
      </section>  
    </div>
  )
}

export default Main;
