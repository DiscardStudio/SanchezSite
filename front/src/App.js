import { useState } from 'react';
import { Document, Page, pdfjs } from "react-pdf";
import './App.css';

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

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
        <Document file="Resume.pdf">
          <Page pageNumber={1} onLoadError={console.error}/>
        </Document>
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
          <li><button className={"nava"} onClick={() => {window.location.replace("https://www.linkedin.com/in/michael-sanchez-02282001/").then((response) => response.json())}}>LinkedIn</button></li>
          <li><button className={"nava"} onClick={() => {window.location.replace("https://github.com/DiscardStudio")}}>GitHub</button></li>
        </ul>
      </div>
    </div>
  );
}

export default WebPage;
