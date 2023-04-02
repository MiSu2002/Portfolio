import React from "react";
import { Link } from "react-router-dom";

const Projects = ({ projects }) => {
  
    return (
        <div className="projects-slider-container">
            <style>
                {`
                .projects-slider-container {
                    margin-top: 2rem;
                    overflow-x: scroll;
                    scroll-snap-type: x mandatory;
                  }
                  
                  .projects-slider {
                    gap: 2rem;
                    scroll-snap-points-x: repeat(100%);
                    scroll-snap-type: x mandatory;
                    width: 150vw;
                  }
                  
                  .project-card {
                    width: 100%;
                    height: 70vh;
                    padding: 1rem;
                    border-radius: 10px;
                    position: relative;
                    overflow: hidden;
                    box-shadow: 2px 10px 16px rgba(155, 255, 255, 0.2);
                    transition: box-shadow 0.2s ease;
                    background-size: cover;
                    background-repeat: no-repeat;
                  }
                  
                  .project-card img {
                    width: 100%;
                    height: 50vh;
                    object-fit: cover;
                    border-radius: 10px;
                    margin-bottom: 1rem;
                    box-shadow: 4px 0px 8px rgba(20, 20, 20, 0.9);
                    transition: transform 0.2s ease;
                    z-index: 0;
                  }

                  .project-card:hover img {
                    transform: scale(1.1);
                  }
                  
                  .project-card h3 {
                    font-size: 1.5rem;
                    margin-bottom: 0.5rem;
                  }
                  
                  .project-card p {
                    font-size: 1rem;
                    margin-bottom: 1rem;
                  }
                  
                  .project-card a {
                    display: block;
                    text-align: center;
                    padding: 0.5rem 1rem;
                    border-radius: 5px;
                    background-color: teal;
                    color: #fff;
                    text-decoration: none;
                    transition: background-color 0.2s ease;
                  }
                  
                  .project-card a:hover {
                    background-color: rgb(0,128,128,0.6);
                  }
                  `}
            </style>
        <h2>Projects</h2>
        <div className="projects-slider d-flex text-white mb-5">
          {projects.map(project => (
            <div key={project.id}
            className="project-card ms-5 d-flex flex-column justify-content-center align-items-center"
                style={{ background: `linear-gradient(to left, rgba(0,128,128, 0.2), rgba(0, 0, 0, 0.7)), url(${project.image})` }}>
              <img src={project.image} alt={project.name} />
              <h3 className="text-center mt-2">{project.name}</h3>
              <p className="text-center">{project.description}</p>
              <div className="d-flex">
              <a href={project.link} className="mt-2 me-3">View project</a>
              <Link to={`/projects/${project.id}`} className="mt-2 bg-secondary">Know More</Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };

  export default Projects;