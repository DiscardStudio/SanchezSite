import { useEffect, useState, React } from 'react';
import './App.css';
import { Display } from './components/componentPicker';
import { About, Experience, Education, Skills } from './components/components';

function Nav({page, nav, setPage}) {
  const [tpage, setTPage] = useState(page);
  const [navbar, toggle] = useState(true);

  function hideNav(){
    if(window.innerWidth <= 700) {
      document.getElementsByClassName("nav")[0].style.top = "-95vh";
    }
    toggle(false);
  }
  
  function showNav(){
    if(window.innerWidth <= 700 && navbar) {
      document.getElementsByClassName("nav")[0].style.top = "100vh";
    }
    toggle(true);
  }

  useEffect(() => {
    setPage(tpage);
  },[tpage,setPage]);


  return (
    <div>
      <div className="nav" id="navbar" onMouseEnter={() => showNav()}>
        <img alt="Michael Sanchez" src="SanchezPictures/Contemporary.png" className="me"/>
        <ul className="navl">
          {
            nav.map(x=>{
              return (
              <li className="navl" key={x.page}>
                <button style={x.page===page? {opacity: 1}:{opacity: 0.5}} className={"nava"} onClick={() => {
                  setTPage(x.page);
                  hideNav();
                  }}>{x.title}</button>
              </li>)
            })
          }
        </ul>
        <img className="logo" alt="logo"/>
      </div>
      <Display component={page} info={nav}/>
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
