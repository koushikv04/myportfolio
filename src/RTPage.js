import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron'

class Radiotouch extends React.Component
{
  render()
  {
    return(
      <div>
        <center><img src="RTIcon.png" id="icon"/></center><br/>
          <center><h1> Radiotouch </h1></center>
          <center><h2>Tools: iOS,Objective-C, Xcode</h2></center><br/>
          <p>Radiotouch is an iPad application, which can display high resolution X-Rays wherein expert physicians can review/share/ comment on them.
          <br/>
          <h3>Role:</h3>
          <ul>
            <li>Performed preliminary research, requirement gathering, design of flow and architecture, development of application and testing  </li>
            <li>The Application was nominated for <b> Mahindra Innovation Awards </b></li>
            <li>The Application was also <b>patented by the Australian IP Authority </b></li>
          </ul>
          </p>
      </div>
    );
  }
}

export default Radiotouch;
