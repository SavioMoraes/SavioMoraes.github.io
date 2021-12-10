import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';
import './apresentation.css';

function Apresentation() {
  return (
    <div className="apresentation">
      <h4 className="name"><span className="destaque">S</span>ávio Moraes</h4>
      <h4 className="career">Desenvolvedor <FontAwesomeIcon icon={faGlobe} size="lg"/> Fullstack</h4>
    </div>
  );
}

export default Apresentation;
