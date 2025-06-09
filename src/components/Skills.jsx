import React from "react";
import { motion } from "framer-motion";

const skills = [
  {
    title: "Languages",
    items: ["HTML", "CSS", "JavaScript", "TypeScript"],
  },
  {
    title: "Libraries & Frameworks",
    items: ["React.js", "Tailwind CSS", "Bootstrap"],
  },
  {
    title: "Tools & Platforms",
    items: ["Git", "GitHub", "VS Code", "Figma", "NPM"],
  },
];

const Skills = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-100 p-6 md:p-16">
      <h1 className="text-4xl font-bold text-center text-indigo-700 mb-12">
        My Skills
      </h1>

      <div className="grid md:grid-cols-3 gap-8">
        {skills.map((section, index) => (
          <motion.div
            key={section.title}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.3 }}
            className="bg-white rounded-2xl shadow-xl p-6 hover:scale-105 transition-transform duration-300"
          >
            <h2 className="text-2xl font-semibold text-indigo-600 mb-4">
              {section.title}
            </h2>
            <ul className="space-y-2">
              {section.items.map((skill, i) => (
                <li
                  key={i}
                  className="bg-indigo-100 text-indigo-800 px-4 py-2 rounded-md text-sm font-medium shadow-sm"
                >
                  {skill}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
