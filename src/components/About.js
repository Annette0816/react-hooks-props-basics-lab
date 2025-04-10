import React from "react";
import links from "./links";

function About(props) {
  return (
    <div id="about">
      <h2>About Me</h2>
      <p>{props.bio}</p>
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
      {/* add your <Links /> component here */}
      <links 
      github={props.github}
      linkedIn={props.linkedin} 
       />
    </div>
  );
}

export default About;
