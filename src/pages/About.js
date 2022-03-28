import React from "react";
import { IdentificationIcon } from "@heroicons/react/solid";



const About = () => {
  return (
    <div
      id="About"
      className="mx-60 items-center justify-center w-1/2 text-justify"
    >
      <div>
        <div className="table">
          <IdentificationIcon className="h-5 w-5 mr-4 text-yellow_vs" />{" "}
          <code className="table-cell text-[#e6f1ff] text-3xl mt-5 whitespace-nowrap">
            About Me
          </code>
          <div className="table-cell border-b border-b-[#e6f1ff] border-opacity-25 w-full"></div>
        </div>
        <div className="text-[#a2aabc] text-lg mt-5">
          <code>
          Screenwriter turned Spaghetti-coder with a passion for technology and entertainment. 
          I've barely scratched the surface of all there is to know about web development, but I intend 
          to bring the same amount of passion and creativity to my code as I do screenwriting.
          <br/>
          <br/>
          Professional certifications in Full Stack Web Development, Project Management, Agile Methodologies, 
          Software QA Testing, and Microsoft Azure AI Fundamentals. Knowledge of front-end and back-end libraries 
          and frameworks for building mobile responsive and progressive web applications: HTML5, CSS3, JavaScript ES6, 
          React, Node.js, APIs, SQL Database.
          </code>
          <br />
         </div>
      </div>
    </div>
  );
};

export default About;
