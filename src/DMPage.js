import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron'

class Dm extends React.Component
{
  render()
  {
    return(
      <div>
        <center><img src="DMIcon.png" id="icon"/></center><br/>
          <center>
            <h1>Disease Specific Care Management
            </h1>
          </center>
          <center><h2>Tools: iOS,Objective-C, Xcode</h2></center><br/>
          <p>An iPhone Application developed to help users manage their scheduled medical appointments and insurance companies to keep track of their customer’s health with input from physicians and laboratory results updated in the application.
          <br/>
          <h3>Role:</h3>
          <ul>
            <li><b>Initiated the idea</b> to develop the application on discussion with the business head in Tech Mahindra </li>
            <li><b>Spearheaded the entire application</b> starting from design to development of the application and testing.</li>
            <li>Incorporated features such as:</li>
            <ul>
              <li>Synchronise events to iPhone calendar</li>
              <li>Apple Push Notification Service(APNS)</li>
              <li>Show routes on map from current location</li>
            </ul> 
          </ul>
          </p>
      </div>
    );
  }
}

export default Dm;
