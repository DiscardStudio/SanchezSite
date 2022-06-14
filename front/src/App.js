import { useState } from 'react';
import { Viewer } from '@react-pdf-viewer/core';
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';
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

function WebPage(props) {
  const [page, setPage] = useState(0);
  const defaultLayoutPluginInstance = defaultLayoutPlugin();
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
      {page === 0? <Info/> : 
      <Viewer
        fileUrl='../public/resume.pdf'
        plugins={[
        defaultLayoutPluginInstance
          ]}/>}
    </div>
  );
}

export default WebPage;
