import React, { useState, useEffect } from "react";
import { FaGithub } from "react-icons/fa";
import Link from "next/link";
import '@/styles/Projects.scss';

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const repoNames = ["MailBoxClient", "TaskScheduler-FrontEnd", "ExpenseTracker", "E-CommerceProject"]; 

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch("https://api.github.com/users/iamASR27/repos");
        const data = await response.json();
        console.log(data);
        const filteredProjects = data.filter(project => repoNames.includes(project.name));

        const projectsWithLanguages = await Promise.all(filteredProjects.map(async (project) => {
          const languagesResponse = await fetch(project.languages_url);
          const languagesData = await languagesResponse.json();
          return {
            ...project,
            languages: languagesData
          };
        }));
        
        setProjects(projectsWithLanguages);
      } catch (error) {
        console.error("Error fetching GitHub repositories:", error);
      }
    };

    fetchProjects();
  }, []);

  return (
    <div id="projects">
    <h2 style={{textAlign: 'center'}}>My Projects</h2>
    <div className="project__cards">
      {projects?.map((project) => (
        <div key={project.id} className="project__card">
          <Link href={project.html_url} className="project__card__title" target="_blank">{project.name}</Link>
          {/* <p className="project-languages">Languages: {Object.keys(project.languages).join(", ")}</p> */}
          <Link href={project.html_url} target="_blank"><button className="project__card__repo"><FaGithub />Go to repo</button></Link>
          <hr />
          <p className="project__card__languages"><strong>Languages</strong>: {formatLanguages(project.languages)}</p>
          {console.log(project.languages)}
          <p className="project__card__updated"><strong>Last Updated</strong>: {project.updated_at.split("T")[0]}</p>
        </div>
      ))}
    </div>
  </div>
  );
};

const formatLanguages = (languages) => {
    const totalBytes = Object.values(languages).reduce((total, bytes) => total + bytes, 0);
    const languageEntries = Object.entries(languages);
    return languageEntries.map(([language, bytes]) => `${language}: ${(bytes / totalBytes * 100).toFixed(1)} %`).join(", ");
  };

export default Projects;

