import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import About from "./About";
import Projects from "./Projects";
import Contact from "./Contact";

class Main extends React.Component
{
  constructor() {
    super();
    this.state = {
      value: "none"
    }
  }


  render()
  {

    return(
      <div id="portfolioroot">
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand><h1>Kouv</h1></Navbar.Brand>
          <Nav className="justify-content-end">
            <Nav.Link href="#About">About</Nav.Link>
            <Nav.Link href="#Projects">Projects</Nav.Link>
            <Nav.Link href="#Contact">Contact</Nav.Link>
          </Nav>
      </Navbar>
      <div id="main">
        <div class="bg-text">
          <img alt="myphoto" id="photo" src="Kouv.jpg"/>
          <h1>Hello, I am Kouv</h1>
          <h3>Kaushik Venkataraman, the Software Developer</h3>
        </div>
      </div>
      <div id="About">
      <About/>
      </div>
      <div id="Projects" value={this.state.value}>
      <Projects/>
      </div>
      <div id="Contact">
      <Contact/>
      </div>
      </div>
    );
  }
}

export default Main;
