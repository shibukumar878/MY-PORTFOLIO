import React from "react";

const ProjectCard = ({ title, description, tech, liveLink, codeLink, image }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-5 hover:shadow-xl transition-all">
      <img
        src={image}
        alt={title}
        className="w-full h-48 object-cover rounded-md mb-4"
      />
      <h3 className="text-xl font-semibold text-gray-800 mb-2">{title}</h3>
      <p className="text-gray-600 text-sm mb-3">{description}</p>
      <p className="text-sm text-gray-500 mb-4"><strong>Tech:</strong> {tech}</p>
      <div className="flex gap-4">
        <a
          href={liveLink}
          target="_blank"
          rel="noopener noreferrer"
          className="text-indigo-600 font-medium hover:underline"
        >
          Live Demo
        </a>
        <a
          href={codeLink}
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-700 font-medium hover:underline"
        >
          Source Code
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
