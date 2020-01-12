import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron'

class Cherrypick extends React.Component
{
  render()
  {
    return(
      <div>
        <center><img src="cherrypickicon.png" id="icon"/></center><br/>
        <center>
          <h1>Cherrypickbox
          </h1>
        </center>
          <center><h2>Tools: iOS,Objective-C, Xcode</h2></center><br/>
          <p>A Digital enterprise mobile application which provides a single point of contact for customers to create work groups, manage tasks, share messages, documents, notes, create events and much more.
          <br/>
          <h3>Role:</h3>
          <ul>
            <li><b>Single-handedly</b> developed the second version of the application from scratch  </li>
            <li>Reconstructed the entire UI of the application to development standards</li>
            <li>Updated the application to include all features from website</li>
          </ul>
          </p>
      </div>
    );
  }
}

export default Cherrypick;
