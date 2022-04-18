import react from "react";
import './index.scss'
import Carousel from "react-bootstrap/Carousel";
import jsLogo from "../../assets/images/skills-logos/javascript.png";
import htmlLogo from "../../assets/images/skills-logos/html.png";
import cssLogo from "../../assets/images/skills-logos/css.png";
import bootstrapLogo from "../../assets/images/skills-logos/bootstrap.png";
import reactLogo from "../../assets/images/skills-logos/react.png";
import nodeLogo from "../../assets/images/skills-logos/nodejs.png";
import mernLogo from "../../assets/images/skills-logos/mern.png";
import mysqlLogo from "../../assets/images/skills-logos/mysql.png";
import mongoLogo from "../../assets/images/skills-logos/mongo.png";
import githubLogo from "../../assets/images/skills-logos/github.png";
import herokuLogo from "../../assets/images/skills-logos/heroku.png";
import atlasLogo from "../../assets/images/skills-logos/atlas.png";
import gitLogo from "../../assets/images/skills-logos/git.png";



function Skills() {
    const FRONTEND = [jsLogo, htmlLogo, cssLogo, bootstrapLogo, reactLogo]
    const BACKEND = [nodeLogo, mernLogo, mysqlLogo, mongoLogo]
    const VERSION =[githubLogo, herokuLogo, atlasLogo, gitLogo]
  return (
    <div className="techstack">
      <div className='holder'>
        <h2>Front-end Technologies</h2>
        <Carousel className='carousel  mt-4 mb-4'>
            {FRONTEND.map((logo, i)=> (
                 <Carousel.Item key={i} interval={1000} className='item '>
                     <img src={logo} alt='front end tech'/>
                 </Carousel.Item>
            ))}
        </Carousel>
      </div>
      <div className='holder'>
        <h2>Backend Technologies</h2>
        <Carousel className='carousel mb-4'>
            {BACKEND.map((logo, i)=> (
                 <Carousel.Item  key={i} interval={1000} className='item '>
                     <img src={logo} alt='back end tech'/>
                 </Carousel.Item>
            ))}
        </Carousel>
      </div>
      <div className='holder'>
        <h2>Deployment + Version Control</h2>
        <Carousel className='carousel mb-4'>
            {VERSION.map((logo, i)=> (
                 <Carousel.Item  key={i} interval={1000} className='item'>
                     <img src={logo} alt='version control and deployment tech'/>
                 </Carousel.Item>
            ))}
        </Carousel>
      </div>
    </div>
  );
}

export default Skills;
