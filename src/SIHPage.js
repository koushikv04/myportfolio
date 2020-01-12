import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron'

class Sih extends React.Component
{
  render()
  {
    return(
      <div>
        <center><img src="sihicon.jpg" id="icon"/></center><br/>
        <center>
          <h1>Aspire Step into Health
          </h1>
        </center>
          <center><h2>Tools: iOS,Objective-C, Xcode</h2></center><br/>
          <p>Aspire SIH is an iPhone application that is designed to engage the people of Qatar in a self-managed lifelong health program based
          on tracking of steps and input of physical activity by users.
          <br/>
          <h3>Role:</h3>
          <ul>
            <li>Developed Dashboard UI of the application </li>
            <li>Integrated formulas for offline calculation</li>
            <li>Involved in unit testing of the application </li>
          </ul>
          </p>
      </div>
    );
  }
}

export default Sih;
