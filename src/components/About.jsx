import React from "react";

const About = () => {
  return (
    <section id="about" className="py-20 bg-white px-4 md:px-20">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-6">
          About <span className="text-indigo-600">Me</span>
        </h2>
        <p className="text-gray-600 text-lg leading-relaxed">
          I'm a passionate and self-motivated <strong>Frontend Web Developer</strong> with a strong foundation in HTML, CSS, JavaScript, and modern frameworks like <strong>React.js</strong> and <strong>Tailwind CSS</strong>. As a fresher, I bring a hunger to learn, build, and contribute to real-world projects.
        </p>

        <p className="text-gray-600 text-lg mt-4 leading-relaxed">
          I love turning design ideas into interactive and accessible websites. My current focus is on building responsive, fast, and user-friendly UIs. I'm always exploring new technologies and best practices to improve my craft.
        </p>

        <div className="mt-8 text-left">
          <h3 className="text-2xl font-semibold text-gray-700 mb-4">Tech Skills:</h3>
          <ul className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-gray-700">
            <li>✅ HTML5 & CSS3</li>
            <li>✅ JavaScript (ES6+)</li>
            <li>✅ React.js</li>
            <li>✅ Tailwind CSS</li>
            <li>✅ Git & GitHub</li>
            <li>✅ Responsive Design</li>
          </ul>
        </div>

        <div className="mt-10">
          <a
            href="#projects"
            className="px-6 py-3 bg-indigo-600 text-white rounded-full font-semibold hover:bg-indigo-700 transition"
          >
            View My Projects
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
