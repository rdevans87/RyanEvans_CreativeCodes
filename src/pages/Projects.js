import React from 'react';


function RepoCards(props) {
    return(
  
    <section className="projects">
     
    <div className="container">
     <div className="card" id="project">
       <div className="face face1" >
         <div className="content">  
         <img className="screenshot" src={props.image} alt={props.name}/>       
           <h3>{props.name}</h3>
         </div>
       </div>
       <div className="face face2">
         <div className="content">
           <p>{props.summary}</p>
           <p>{props.tools}</p>
           <a href={props.github}><img src="https://img.icons8.com/fluent/48/4a90e2/github.png" width="26px" alt="Repository" id="icon"/></a> 
           <a href={props.deploy}><img src="https://img.icons8.com/metro/26/000000/domain.png" alt="Deployed" id="icon"/></a>
         </div>
       </div>
    </div>
    </div>
    </section>

  );

}

export default RepoCards;