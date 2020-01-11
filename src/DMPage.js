import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron'

class Dm extends React.Component
{
  render()
  {
    return(
      <div>
        <center><img src="DMIcon.png" id="icon"/></center><br/><br/>
          <center>
            <h1>Disease Specific Care Management
            </h1>
          </center>
          <center><h2>Tools: iOS,Objective-C, Xcode</h2></center><br/>
          <p><b>An iPhone Application developed to help users manage their scheduled medical appointments and insurance companies to keep track of their customer’s health with input from physicians and laboratory results updated in the application.</b>
          <h2>Role:</h2>
          <ul>
            <li>Initiated the idea to develop the application on discussion with the business head in Tech Mahindra </li>
            <li>Spearheaded the entire application starting from design to development of the application and testing.</li>
            <li>Incorporated features such as
- Synchronise events to iPhone calendar
- Apple Push Notification Service(APNS)
- Show routes on map from current location</li>
          </ul>
          </p>
      </div>
    );
  }
}

export default Dm;
