import React from 'react';

const ProjectList = ({ projects }) => {
  return (
    <ul className="project-list">
      {projects.map((project, index) => (
        <li key={index}>{project.name}</li>
      ))}
    </ul>
  );
};

export default ProjectList;