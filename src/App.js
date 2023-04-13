import { useEffect, useState } from 'react';
import './App.css';
import { Display } from './components/componentPicker';
import { About, Experience, Education, Skills } from './components/components';

function Nav(props) {
  return (
    <div>
      <div className="nav">
        <img alt="Michael Sanchez" src="SanchezPictures/Contemporary.png" className="me"/>
        <ul>
          {
            props.nav.map(x=>{
              return (<li key={x.page}>
                <button className={"nava"} onClick={() => props.setPage(x.page)}>{x.title}</button>
              </li>)
            })
          }
        </ul>
        <img className="logo" alt="logo"/>
      </div>
      <Display component={props.page} info={props.nav}/>
    </div>
  );
}

function WebPage(props) {
  const [page, setPage] = useState(-1);
  const nav = [
    { page: 0, title: "About", component: <About/> },
    { page: 1, title: "Experience", component: <Experience/> },
    { page: 2, title: "Education", component: <Education/> },
    { page: 3, title: "Skills", component: <Skills/> }
  ];
  useEffect(() => {

  },[page]);

  return (
    <div>
      <Nav setPage={setPage} nav={nav} page={page}/>
    </div>
  );
}

export default WebPage;
