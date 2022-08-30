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
         <div class="profile">
          <center><img src="kvlogo2.png" alt="profile_picture"/></center>
        </div>
        <p id="soonText"><center>Coming soon</center></p>
        <p id="resumedesc"><center>Until then, please refer or contact me through my linkedin profile, thank you</center>  </p>
        <a href="https://www.linkedin.com/in/kaushikvenkataraman" target="_blank" rel="noopener noreferrer"><center> <i id="contactsicons" class='fa fa-linkedin-square'/></center></a>
      </div>
    );
  }
}

export default Main;
