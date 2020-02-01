import React from 'react';

class Bridge extends React.Component
{
  render()
  {
    return(
      <div>
        <center><img alt="Bridge" src="BridgeIcon.png" id="icon"/></center><br/>
        <center>
          <h1><a href="https://itunes.apple.com/nz/app/bridge-aspire-conference-management/id737471927?mt=8" target="_blank" rel="noopener noreferrer">Bridge - Aspire Conference Management System</a>
          </h1>
        </center>
          <center><h2>Tools: iOS,Objective-C, Xcode</h2></center><br/>
          <div id="content">
          <p>Bridge Conference Management System is an iPad Application facilitates delegates with information about conferences and provide miscellaneous services such as transportation,accomodation etc from the application.
          <br/><br/>
          <h3>Features</h3>
          <ul>
            <li> Delegates can gather information on current and upcoming conference events such as schedule,speakers etc.</li>
            <li>Network with speakers and delegates in the conference</li>
            <li>Arrange transportation and accomodation</li>
          </ul>
          <h3>Role</h3>
          <ul>
            <li>Stabilised the code through bug fixes</li>
            <li>Reconstructed the application to coding standards and performed memory optimisation</li>
            <li>Made Enhancements such as:</li>
            <ul>
              <li>Display routes on map and also provide directions</li>
              <li>Synchronise events to iPad calendar </li>
            </ul>
          </ul>
          </p>
          </div>
      </div>
    );
  }
}

export default Bridge;
