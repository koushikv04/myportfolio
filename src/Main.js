import React from 'react';
import About from "./About";
import Projects from "./Projects";

class Main extends React.Component
{
  constructor() {
    super();
    this.state = {
      value: "none"
    }
  }
  
  componentDidMount() {
    var listitems = document.querySelectorAll("li");
    listitems.forEach((item, index) => {
      item.firstChild.addEventListener("click", function() {
        var current = document.getElementsByClassName("active");
        if(current.length>0) {
          current[0].className = current[0].className.replace("active", "");
        }
        this.className += "active";
      });
    }); 
   }


  render()
  {

    return(
      <div class="wrapper">
       <div class="section">
        <div class="container" id="home">
          <div class = "row align-items-center p-4" id="homerow">
            <div class = "col-5 text-right pr-4">
                <img  id="photo" src="Kouv_photo.png" alt="profile_picture"/>
            </div>
            <div class = "col-7">
              <div id="homeContent">
                <h1 class="display-3" id="welcome">Hi, Welcome &#128515;</h1>
                <div id="myinfo">I am
              <span id="myname"> Kaushik Venkataraman</span> aka Kouv, an iOS Developer based in Lancaster, United Kingdom</div>
              </div>
            </div>

          </div>

        </div>
        <div class = "about"id="About">
          <About/>
        </div>
        <div class="container" id="projectscontainer">
          <div id="Projects" value={this.state.value}>
            <Projects/>
          </div>
        </div>
      </div>
      <div class="sidebar">
        <div class="profile">
          <a href="#home" >
            <img src="kvlogo2.png" alt="profile_picture"/>
          </a>
        </div>
        <ul>
          <li>
            <a href="#About" id="sidebaritem">
              <p><span class = "item"><center>Who</center></span></p>
              <p><span class = "subitem"><center>am I?</center></span></p>
            </a>
          </li>
          <li>
            <a href="#Projects" id="sidebaritem">
              <p><span class = "item"><center>What</center></span></p>
              <p><span class = "subitem"><center>did I do?</center></span></p>         
            </a>
          </li>
        </ul>
        <div id = "footer">
          <div class="container">
          <div class="row align-items-center">
            <div class="col text-center">
              <a href="mailto:koushikv@outlook.com" >
               <i id="contactsicons" class="fa fa-envelope fa-3x"/>
              </a>
            </div>
            <div class="col text-center">
              <a href="https://www.linkedin.com/in/kaushikvenkataraman" target="_blank" rel="noopener noreferrer">
                <i id="contactsicons" class='fa fa-linkedin-square fa-3x'/>
              </a>
            </div>
            </div>
          </div>
        </div>
      </div>
    
    </div>

    );
  }
}

export default Main;
