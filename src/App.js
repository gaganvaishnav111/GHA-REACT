import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ProjectList from './ProjectList';

function App() {
  const [projects, setProjects] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get('https://springbootapplication-fxedb4bce6a5cwbu.southindia-01.azurewebsites.net/api/projects')
      .then(response => {
        setProjects(response.data);
      })
      .catch(error => {
        console.error('Error fetching projects:', error);
        setError('Failed to fetch projects');
      });
  }, []);

  return (
    <div>
      <h1>My Projects</h1>
      {error ? (
        <p>{error}</p>
      ) : (
        <ProjectList projects={projects} />
      )}
    </div>
  );
}

export default App;
