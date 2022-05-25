import React from 'react';
import './App.css'

/**
 * Navigation
 */
function Nav(props)
{
  return (
    <div className={"nav"}>
      <ul>
        <li><a className={"nava"} href={"#home"}>Home</a></li>
        <li><a className={"nava"} href={"#resume"}>Resumé</a></li>
        <li>|</li>
        <li><a className={"nava"} href={"mailto:msanchezmbm@gmail.com"}>Email</a></li>
        <li><a className={"nava"} href={"https://www.linkedin.com/in/michael-sanchez-02282001/"}>LinkedIn</a></li>
        <li><a className={"nava"} href={"https://github.com/DiscardStudio"}>GitHub</a></li>
      </ul>
    </div>
  );
}

function Info(props)
{
  return (
    <div>
      <div className={"parallax1"}>
        <div className={"home"} id="home">
          <h1><code>Michael Sanchez</code></h1>
          <p><code>Freelance Web Developer</code><code className={"blinking"}> |</code></p>
        </div>
      </div>
    </div>
  );
}

class WebPage extends React.Component
{
  render() {
    return (
    <div>
      <Nav/>
      <Info/>
    </div>
  );}
}

export default WebPage;
