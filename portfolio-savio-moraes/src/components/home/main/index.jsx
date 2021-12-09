import React from 'react';
import Perfil from './perfil';
import Stacks from './stacks';
import Projetos from './projetos';
import Contatos from './contatos';
import Experencias from './experiencias';
import './main.css';

function Main() {
  return (
    <div className="main">
      <section id="profile">
        <Perfil />  
      </section>
      <section className="stacks">
        <Stacks />  
      </section>
      <section id="projects">
        <Projetos />  
      </section>
      <section id="contacts">
        <Contatos />  
      </section>
      <section id="works">
        <Experencias />  
      </section>   
    </div>
  )
}

export default Main;
