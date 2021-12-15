import React from 'react';
import './contatos.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

function Contatos() {
  return (
    <section className="contatos-container">
      <h2 className="contatos-title">Contatos</h2>
      <div className="contatos">
        <div className="contato">
          <FontAwesomeIcon icon={faLinkedin} size="lg" />
        </div>
        <div className="contato">
          <FontAwesomeIcon icon={faEnvelope} size="lg" />
        </div>
        <div className="contato">
          <FontAwesomeIcon icon={faWhatsapp} size="lg" />
        </div>
        <div className="contato">
          <FontAwesomeIcon icon={faGithub} size="lg" />
        </div>
      </div>
    </section>
  )
}

export default Contatos;
