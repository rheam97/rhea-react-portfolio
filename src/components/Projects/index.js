import React from "react";
import Carousel from "react-bootstrap/Carousel";
import budgettracker from "../../assets/images/budgettracker.png";
import workdayscheduler from "../../assets/images/workdayscheduler.gif";
import sqlcms from "../../assets/images/sqlcms.png";
import newsify from "../../assets/images/newsify.png";
import restroom from "../../assets/images/restroom.png";
import weather from "../../assets/images/weatherdashboard.gif";
import silversocials from "../../assets/images/silversocials.png"
import "./index.scss";

function Projects() {
  const PROJECTS = [
    {
      name: "Silver Socials",
      github: "https://github.com/rheam97/silver-socials",
      site: "https://silver-socials.herokuapp.com/",
      image: silversocials,
      about:
        "A MERN-Stack social network app for people 55+ to socialize in groups formed by common interest.",
    },
    {
      name: "Restroom-Finder",
      github: "https://github.com/rheam97/restroom-finder.git",
      site: "https://restroom-finder.herokuapp.com/",
      image: restroom,
      about:
        "An MVC app that uses sequelize, express.js, handlebars.js, and Mapbox GL JS to organize, store, and render crowd-sourced, location-based data to and from a map.",
    },
    {
      name: "News!fy",
      github: "https://github.com/rheam97/Newsify.git",
      site: "https://github.com/rheam97/Newsify.git",
      image: newsify,
      about:
        "Entirely front end, proof-of-concept for news accessibility app. Uses MediaStack API Free Plan to fetch news data and the free ResponsiveVoice API to read the articles aloud.",
    },
    {
      name: "Budget Tracker",
      github: "https://github.com/rheam97/budget-tracker-pwa.git",
      site: "https://native-budget-tracker.herokuapp.com/",
      image: budgettracker,
      about:
        "An application you can use to track your transactions both on and offline. PWA that mimics a native mobile app and uses MongoDB to store inputs.",
    },
    {
      name: "CMS Employee Tracker",
      github: "https://github.com/rheam97/SQLcms-employee-tracker.git",
      site: "https://github.com/rheam97/SQLcms-employee-tracker.git",
      image: sqlcms,
      about:
        "A CLI application built with MySQL and Node that allows users to view an employee database and update data fields. Also includes ability to delete data and get budget for departments.",
    },
    {
      name: "Work Day Scheduler",
      github: "https://github.com/rheam97/workday-scheduler.git",
      site: "https://rheam97.github.io/workday-scheduler/",
      image: workdayscheduler,
      about:
        "A simple calendar application that allows a user to save events for each hour of the day. This app will run in the browser and feature dynamically updated HTML and CSS powered by jQuery and Moment.js.",
    },
  ];
  return (
    <div className="projects">
      <h1 className= 'heading'>Projects to-date</h1>
      <Carousel className="carousel">
        {PROJECTS.map((project, i) => (
          <Carousel.Item key={i} className="item">
              <img
                className="d-block center img mt-3 pb-3"
                src={project.image}
                alt={project.name}
              />
              <div className="links">
                <a href={project.site} rel="noreferrer" target="_blank">
                  Site
                </a>
                {"  "}|{"  "}
                <a href={project.github} rel="noreferrer" target="_blank">
                  Code
                </a>
            </div>
            <div className="caption pb-5">
              <h3>{project.name}</h3>
              <p>{project.about}</p>
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
}

export default Projects;
