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
          This is not just a website. It's an open window peering deep into my soul. A doorway to the vast reaches of my mind. 
          A brief glimpse into the dark caverns of my creavity.  Everything you need to know about me is right here. My fears,
          failures, hopes, and dreams poured out on paper like an infinite stream of water rushing through my fingers down an 
          endless river of ideas. To be a writer, to actually sit down and write a story  from start to finish is both incredibly 
          gratifying and completely depressing . To put that much time and effort into something that you truly care about without 
          ever really knowing if anyone will read it. What's worse is reading your own story and  wondering if it's actually any 
          good or just a complete waste of time. I often ask myself these very same questions and there is no real answer just a 
          little voice inside my head that tells me to "Keep Writing" regardless of the outcome. 
          </code>
          <br />
          <br />
          <code>Aenean in mi non leo placerat suscipit a eget odio:</code>
         </div>
      </div>
    </div>
  );
};

export default About;
