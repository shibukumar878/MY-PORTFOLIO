import React from "react";
import resume from '../assets/Shibu.pdf';
import photo from '../assets/sky.jpeg';

const Home = () => {
  return (
    <section
      id="home"
      className="h-screen flex items-center justify-center bg-gradient-to-br from-indigo-100 to-white px-4 md:px-20"
    >
      <div className="flex flex-col-reverse md:flex-row items-center gap-10 max-w-6xl w-full">
        
        {/* Text content */}
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-4">
            Hi, I'm <span className="text-indigo-600">Shibu Kumar</span>
          </h1>
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-600 mb-6">
            Frontend Developer
          </h2>
          <p className="text-gray-600 mb-8 max-w-xl">
            "I’m a front-end developer passionate about building modern, responsive websites using React.js, Tailwind CSS, and JavaScript. I love creating clean, user-friendly interfaces that enhance user experience and performance."
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <a
              href={resume}
              download='resume'
              className="px-6 py-3 bg-indigo-600 text-white rounded-full font-semibold hover:bg-indigo-700 transition"
            >
              Download Resume
            </a>
            <a
              href="#contact"
              className="px-6 py-3 border-2 border-indigo-600 text-indigo-600 rounded-full font-semibold hover:bg-indigo-50 transition"
            >
              Contact Me
            </a>
          </div>
        </div>

        {/* Image */}
        <div className="flex-1 flex justify-center">
          <img
            src={photo}
            alt="Developer Illustration"
            className="w-64 h-64 object-cover rounded-[180px]  shadow-md border-4 border-indigo-200"
          />
        </div>
      </div>
    </section>
  );
};

export default Home;
