import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron'

class Radiotouch extends React.Component
{
  render()
  {
    return(
      <div>
        <center><img src="RTIcon.png" id="icon"/></center><br/><br/>
          <h2>Tools: iOS,Objective-C, Xcode</h2><br/>
          <p><b>Radiotouch is an iPad application, which can display high resolution X-Rays wherein expert physicians can review/share/ comment on them.</b>
          <h2>Role:</h2>
          <ul>
            <li>Performed preliminary research, requirement gathering, design of flow and architecture, development of application and testing  </li>
            <li>The Application was nominated for Mahindra Innovation Awards</li>
            <li>The Application was also patented by the Australian IP Authority </li>
          </ul>
          </p>
      </div>
    );
  }
}

export default Radiotouch;
