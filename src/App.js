import { useEffect, useState, React } from 'react';
import './App.css';
import { Display } from './components/componentPicker';
import { About, Experience, Education, Skills } from './components/components';

function Nav(props) {
  useEffect(() => {
    if(window.innerWidth <= 700) {
      
    }
  },[]);


  return (
    <div>
      <div className="nav">
        <img alt="Michael Sanchez" src="SanchezPictures/Contemporary.png" className="me"/>
        <ul className="nav">
          {
            props.nav.map(x=>{
              return (
              <li className="nav" key={x.page}>
                <button style={x.page===props.page? {opacity: 1}:{opacity: 0.5}} className={"nava"} onClick={() => props.setPage(x.page)}>{x.title}</button>
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
  const [page, setPage] = useState(0);
  const nav = [
    { page: 0, title: "About/Skills", component:
      <>
        <About/>
        <br/>
        <Skills/>
      </>},
    { page: 1, title: "Experience", component: <Experience/> },
    { page: 2, title: "Education", component: <Education/> }
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
