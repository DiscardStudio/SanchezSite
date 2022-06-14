import { useState } from 'react';
import './App.css'

function Info(props) {
  return (
    <div>
      <div className={"parallax1"}>
        <div className={"home"} id="home">
          <h1><code>Discard Software</code></h1>
          <p><code>Software Solutions, Consulting, and Tutoring</code><code className={"blinking"}> |</code></p>
        </div>
      </div>
    </div>
  );
}

function Resume(props) {
  return (
    <div className="resume">
      <div className="resume1">
        <h1>Projects</h1>
        <h3>Delphi -Technologies: ReactJS, Node.js, SQL, Python Selenium</h3>
        <p>
          -Algorithmically determines 
          recommendations for research 
          articles based on interests and 
          previously visited articles
        </p>
        <p>
          -Serves a ReactJS application via NodeJS 
        </p>
        <p>
          -Stores Information in 
          PostgreSQL and adds to database 
          using a python web scraper via
          OLTP and OLAP
        </p>
        <h1>Work Experience</h1>
        
      </div>
      <div className="resume1">

      </div>
    </div>
  );
}

function WebPage(props) {
  const [page, setPage] = useState(1);
  return (
    <div>
      <div className={"nav"}>
        <ul>
          <li><button className={"nava"} onClick={() => setPage(0)}>Home</button></li>
          <li><button className={"nava"} onClick={() => setPage(1)}>Resumé</button></li>
          <li>|</li>
          <li><button className={"nava"} onClick={() => {window.location.replace("mailto:msanchezmbm@gmail.com").then((response) => response.json())}}>Email</button></li>
          <li><button className={"nava"} onClick={() => {window.location.replace("https://www.linkedin.com/in/michael-sanchez-02282001/").then((response) => response.json())}}>LinkedIn</button></li>
          <li><button className={"nava"} onClick={() => {window.location.replace("https://github.com/DiscardStudio")}}>GitHub</button></li>
        </ul>
      </div>
      {page === 0? <Info/> : <Resume/>}
    </div>
  );
}

export default WebPage;
