import React from 'react';

class Sih extends React.Component
{
  render()
  {
    return(
      <div>
        <center><img alt="step into health" src="sihicon.jpg" id="icon"/></center><br/>
        <center>
          <h1><a href="https://itunes.apple.com/nz/app/step-into-health/id741316085?mt=8" rel="noopener noreferrer" target="_blank">Aspire Step into Health</a>
          </h1>
        </center>
          <center><h2>Tools: iOS,Objective-C, Xcode</h2></center><br/>
          <div id="content">
          <p>Aspire SIH is an iPhone application that is designed to engage the people of Qatar in a self-managed lifelong health program based
          on tracking of steps and input of physical activity by users.
          <br/><br/>
          <h3>Features</h3>
          <ul>
            <li>Application keeps track of users steps and encourages user to stay fit </li>
            <li>Ability to log activities</li>
            <li>Compete with friends and compare metrics such as calories,distance etc. </li>
          </ul>
          <h3>Role</h3>
          <ul>
            <li>Developed Dashboard UI of the application </li>
            <li>Integrated formulas for offline calculation</li>
          </ul>
          </p>
          </div>
      </div>
    );
  }
}

export default Sih;
