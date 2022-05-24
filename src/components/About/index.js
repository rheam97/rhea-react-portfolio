import React from "react";
import "./index.scss";
function About() {
  return (
    <section>
      <h1 id="about" className="text-left heading">
        Rhea Malviya | Full-Stack Developer
      </h1>
      <div className='bio-wrapper'>
      <div className="text-left bio">
        <p>
          I'm a full stack developer with a previous
          interdisciplinary background in International Relations, Anthropology,
          Social and Public Policy, and applications of Social Psychology and
          Neuroscience to policymaking. Learning new things constantly has been
          and continues to be my bread-and-butter, which is why I feel suited to
          the field of software development. I am proficient in RESTful APIs,
          vanilla JS, and advanced CSS frameworks and am currently learning
          building MERN apps and honing my CS fundamentals.
          <br />
          <br /> I look forward to hearing from you regarding joining your team
          as a driven, personable, and adaptable member.
        </p>
      </div>
      </div>
    </section>
  );
}

export default About;
