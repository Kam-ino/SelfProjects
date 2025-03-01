import React from 'react';
import proj1 from '../img/1.jpg';
import proj2 from '../img/2.jpg';
import proj3 from '../img/3.jpg';
import proj4 from '../img/4.jpg';

const projects = [
    { img: proj1, description: "Description for Project 1" },
    { img: proj2, description: "Description for Project 2" },
    { img: proj3, description: "Description for Project 3" },
    { img: proj4, description: "Description for Project 4" },
];

function Innovation() {
    return (
        <div>
            <h1>Our Innovations</h1>
            <ul className="list-none">
                {projects.map((project, index) => (
                    <li key={index} className="flex items-center mb-4 border-b">
                        <img src={project.img} alt={`Project ${index + 1}`} className="resizedimg" />
                        <p className="ml-4">{project.description}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Innovation;
