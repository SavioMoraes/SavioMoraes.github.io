import React from 'react';
import './main.css';
import foto from './images/savio-transp.png'

function Main() {
  return (
    <div className="page-profile">
      <section className="image">
        <div className="div-image"></div>
          <img src={ foto } alt="Foto de rosto Sávio Moraes" />  
        <div className="saudation">
          <p>Olá, meu nome é <span>Sávio Moraes</span>,</p>
          <p>Sou entusiasta em tecnologia, tenho 41 anos e sou</p>
          <p>Desenvolvedor Web Full Stack Júnior</p>
        </div>
      </section>
      <section className="page-profile-text">
        <div className="container-text">
          <p>Atualmente estou cursando Desenvolvimento Web Full Stack na Trybe, onde já desenvolvi mais de 25 projetos com HTML, CSS, JavaSrcipt, React, TDD, Test Jest, NodeJS, MySQL, MongoDB entre outras tecnologias e metodologias aplicadas!</p>
          <p>Também sou formado em Gestão de Tecnologia da Informação pela Unip</p>
        </div>
      </section>
      <section className="works">
        <div className="works-container">
          <h5 className="title-works">Trabalhos anteriores</h5>
          <p></p>
          <p></p>
          <p></p>
          <p></p>
        </div>
      </section>
    </div>
  )
}

export default Main;
