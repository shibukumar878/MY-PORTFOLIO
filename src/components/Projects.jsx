import React from "react";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  const projectList = [
    {
      title: "Portfolio Website",
      description: "A personal portfolio site built with React and Tailwind CSS.",
      tech: "React, Tailwind CSS",
      liveLink: "https://yourportfolio.vercel.app",
      codeLink: "https://github.com/yourusername/portfolio",
      image: "https://via.placeholder.com/400x250?text=Portfolio+Project",
    },
    {
      title: "Weather App",
      description: "A simple weather app using OpenWeatherMap API.",
      tech: "React, API, CSS",
      liveLink: "https://yourweatherapp.vercel.app",
      codeLink: "https://github.com/yourusername/weather-app",
      image: "https://via.placeholder.com/400x250?text=Weather+App",
    },
    {
      title: "Todo List App",
      description: "Basic todo app with add, delete, and filter functionality.",
      tech: "HTML, CSS, JavaScript",
      liveLink: "https://yourtodo.vercel.app",
      codeLink: "https://github.com/yourusername/todo-app",
      image: "https://via.placeholder.com/400x250?text=Todo+App",
    },
  ];

  return (
    <section id="projects" className="py-20 bg-gray-100 px-4 md:px-20">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-10">
          My <span className="text-indigo-600">Projects</span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectList.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
