import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron'

class Bridge extends React.Component
{
  render()
  {
    return(
      <div>
        <center><img src="BridgeIcon.png" id="icon"/></center><br/>
        <center>
          <h1>Conference Management System
          </h1>
        </center>
          <center><h2>Tools: iOS,Objective-C, Xcode</h2></center><br/>
          <p>An iPad Application provides information on current and upcoming conferences and facilitates delegates to chat, make seat selection and accommodation arrangements from iPad.
          <br/>
          <h3>Role:</h3>
          <ul>
            <li>Stabilised the code through bug fixes </li>
            <li>Reconstructed the complete code to coding standards and performed memory optimisation</li>
            <li>Made Enhancements such as:</li>
            <ul>
              <li>Display routes on map and also provide directions</li>
              <li>Synchronise events to iPad calendar </li>
            </ul>
          </ul>
          </p>
      </div>
    );
  }
}

export default Bridge;
