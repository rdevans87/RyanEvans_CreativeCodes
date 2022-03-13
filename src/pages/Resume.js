import React from "react";
import { ClipboardListIcon } from "@heroicons/react/solid";

const ReactLogo = require("../assets/ReactLogo.png");
const JsLogo = require("../assets/JsLogo.png");
const TailwindLogo = require("../assets/TailwindLogo.png");
const SqlLogo = require("../assets/SqlLogo.png");
const MongoDBLogo = require("../assets/MongoDBLogo.png");
const NodeJSLogo = require("../assets/NodeJSLogo.png");


const Resume = () => {
  return (
    <div id="Resume" className="w-1/2 mt-64 text-justify ml-auto mr-60">
      <div>
        <div className="table">
          <ClipboardListIcon className="h-5 w-5 mr-4 text-yellow_vs" />{" "}
          <code className="table-cell text-[#e6f1ff] text-3xl mt-5 whitespace-nowrap">
            Resume
          </code>
          <div className="table-cell border-b border-b-[#e6f1ff] border-opacity-25 w-full"></div>
        </div>
      </div>
      <div className="text-[#a2aabc] text-lg mt-5">
        <div className="flex flex-row">
          <div className="w-1/4">
            <code className="text-yellow_vs">Education</code>
          </div>
          <div className="w-3/4">
            <code className="text-blue_vs">Communication & Media Studies</code>
            <br />
            <code className="italic text-sm text-lightblue_vs">
            University of Central Florida
            </code>
            <br />
            <code className="text-xs text-brown_vs">
              • Sept 2007 - Aug 2011
            </code>
          </div>
        </div>
        <div className="flex flex-row pt-10">
          <div className="w-1/4">
            <code className="text-yellow_vs">Certs</code>
          </div>
          <div className="w-3/4">
            <code className="text-blue_vs">Full Stack Web Development</code>
            <br />
            <code className="italic text-sm text-lightblue_vs">
              The Ohio State University
            </code>
            <br />
            <code className="text-xs text-brown_vs">
              • Sept 2007 - Aug 2011
            </code>
          </div>
          </div>
        
        <div className="flex flex-row pt-10">
          <div className="w-1/4">
            <code className="text-yellow_vs">Work</code>
          </div>
          <div className="w-3/4">
            <code className="text-blue_vs">MRI Software, <code className="text-lightblue_vs">Product Owner</code></code>
            <code className="text-blue_vs"></code>
            <br />
            <code className="italic text-sm text-lightblue_vs">
            Cleveland, Ohio{" "}
            </code>
            <br />
            <code className="text-xs text-brown_vs">• July 2021 - Present</code>
            <br />
            <code className="text-sm">
              <br />• Responsible for developing user stories and packaging the features into product releases.
              <br />• Managing card break down, provide test case scenario input, and documentation approval.
              <br />• Assisting the Product Manager with developing the product roadmap and vision.
              <br />• Prioritizing enhancement requests and technical issues with product development team.
              <br />• Ensuring execution and delivery of solutions valued by the markets we serve.
              <br />• Effectively manage multiple strategic initiatives, work efforts and products.
            </code>
          </div>
        </div>
        <div className="flex flex-row pt-10 flex-wrap">
          <div className="w-1/4">
            <code className="text-yellow_vs">Skills</code>
          </div>
          <div className="w-3/4">
            <code className="text-sm">
              <br />• Agile Software Development, Scrum/Kanban, Mobile First Approach, UI/UX Design.
              <br />• Github, Heroku, Command Line Interface (CLI), SQL database, MongoDB, object-oriented programming (OOP), 
                      object-relational mapping (ORM), model-view-controller(MVC), JavaScript, Object Notation (JSON)
              <br />• Blogs, Entertainment, Real Estate, Social Events, Professional Resumes, Creative Portfolios, E-Commerce.
            </code>
            <div className="grid grid-cols-3 gap-2 text-sm mt-5 text-brown_vs">
            {/* <div className='flex flex-row col-start-1 mb-3'><code className='text-[#e6f1ff] underline'>Programming Languages</code></div>
            <div className='flex flex-row col-start-2 mb-3'><code className='text-[#e6f1ff] underline'>Libraries</code></div>
            <div className='flex flex-row col-start-3 mb-3'><code className='text-[#e6f1ff] underline'>Frameworks</code></div> */}
            <div className="flex flex-row col-start-1 mb-3">
              <img
                src={JsLogo}
                alt="Js Logo"
                className="h-5 w-5 ml-3 mr-4 text-yellow_vs"
              />
              <code>JavaScript (ES6+)</code>
            </div>
            <div className="flex flex-row col-start-2 mb-3">
              <img
                src={MongoDBLogo}
                alt="MongoDB Logo"
                className="h-5 mr-2 ml-20 text-yellow_vs"
              />
              <code>MongoDB</code>
            </div>
            <div className="flex flex-row col-start-1 mb-3">
              <img
                src={ReactLogo}
                alt="Next Logo"
                className="h-5 mr-4 ml-3 text-yellow_vs"
              />
              <code>React</code>
            </div>
            <div className="flex flex-row col-start-2 mb-3">
              <img
                src={SqlLogo}
                alt="SQL Logo"
                className="h-5 mr-2 ml-20 text-yellow_vs"
              />
              <code>SQL</code>
            </div>
            <div className="flex flex-row col-start-1 mb-3">
              <img
                src={TailwindLogo}
                alt="Tailwind Logo"
                className="h-5 mr-4 ml-3 text-yellow_vs"
              />
              <code>Tailwind CSS</code>
            </div>
            <div className="flex flex-row col-start-2 mb-3">
              <img
                src={NodeJSLogo}
                alt="NodeJS Logo"
                className="h-5 mr-2  ml-20 text-yellow_vs"
              />
              <code>Nodejs</code>
            </div>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
