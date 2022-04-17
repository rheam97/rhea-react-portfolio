import React from 'react'
import budgettracker from '../../assets/images/budgettracker.png'
import workdayscheduler from '../../assets/images/workdayscheduler.gif'
import sqlcms from '../../assets/images/sqlcms.png'
import newsify from '../../assets/images/newsify.png'
import restroom from '../../assets/images/restroom.png'
import weather from '../../assets/images/weatherdashboard.gif'

function Projects(){
    const PROJECTS = [
        {
          name: 'Restroom-Finder',
          github: 'https://github.com/rheam97/restroom-finder.git',
          site: 'https://restroom-finder.herokuapp.com/',
          image: restroom,
          about: 'An MVC app that uses sequelize, express.js, handlebars.js, and Mapbox GL JS to organize, store, and render crowd-sourced, location-based data to and from a map.'
        },
        {
          name: 'News!fy',
          github: 'https://github.com/rheam97/Newsify.git',
          site: 'https://github.com/rheam97/Newsify.git',
          image: newsify,
          about: 'Entirely front end, proof-of-concept for news accessibility app. Uses MediaStack API Free Plan to fetch news data and the free ResponsiveVoice API to read the articles aloud.'
        },
        {
          name: 'Budget Tracker',
          github: 'https://github.com/rheam97/budget-tracker-pwa.git',
          site: 'https://native-budget-tracker.herokuapp.com/',
          image: budgettracker,
          about: 'An application you can use to track your transactions both on and offline. PWA that mimics a native mobile app and uses MongoDB to store inputs.'
        },
        {
            name: 'CMS Employee Tracker',
            github: 'https://github.com/rheam97/SQLcms-employee-tracker.git',
            site: 'https://github.com/rheam97/SQLcms-employee-tracker.git',
            image: sqlcms,
            about: 'A CLI application built with MySQL and Node that allows users to view an employee database and update data fields. Also includes ability to delete data and get budget for departments.'
        },
        {
          name: 'Weather Dashboard',
          github: 'https://github.com/rheam97/weather-dashboard.git',
          site: 'https://rheam97.github.io/weather-dashboard/',
          image: weather,
          about: 'A weather dashboard that will run in the browser and feature dynamically updated HTML and CSS (made with Bootstrap) using vanilla JS. Uses the OpenWeather One Call API to retrieve weather data for cities. Uses localStorage to store any persistent data.'
        },
        {
          name: 'Work Day Scheduler',
          github: 'https://github.com/rheam97/workday-scheduler.git',
          site: 'https://rheam97.github.io/workday-scheduler/',
          image: workdayscheduler,
          about: 'A simple calendar application that allows a user to save events for each hour of the day. This app will run in the browser and feature dynamically updated HTML and CSS powered by jQuery and Moment.js.'
        },
      ];
}

export default Projects