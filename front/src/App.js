import { useState } from 'react';
import './App.css';

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
        { /* eslint-disable-next-line*/}
        <img src="Resume.png"/>
      </div>
    </div>
  );
}

function WebPage(props) {
  const [page, setPage] = useState(0);
  return (
    <div>
      <Info/>
      {page === 0? <div/> : <Resume/>}
      <div className={"nav"}>
        <ul>
          <li><button className={"nava"} onClick={() => setPage(page===0?1:0)}>{page===0?"Show ":"Hide "}Resumé</button></li>
          <li><button className={"nava"} onClick={() => {window.open("https://www.linkedin.com/in/michael-sanchez-02282001/",'_blank').then((response) => response.json())}}>LinkedIn</button></li>
          <li><button className={"nava"} onClick={() => {window.open("https://github.com/DiscardStudio",'_blank')}}>GitHub</button></li>
        </ul>
      </div>
    </div>
  );
}

export default WebPage;
