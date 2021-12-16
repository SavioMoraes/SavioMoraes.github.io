import React from 'react';
import ProjectList from '../projectList';
import './projetos.css';
import projects from '../../data';

class Projetos extends React.Component {
  render() {
    return (
      <div className="projects">
        <ProjectList projects={ projects } />
      </div>
    )
  }
}

export default Projetos;
