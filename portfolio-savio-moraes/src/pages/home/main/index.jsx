import React from 'react';
import { HardSkills, Projetos, Contatos} from '../../../components'
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
