import React from 'react';
import CloseButton from 'react-bootstrap/CloseButton';

class Dm extends React.Component
{
  render()
  {
    return(
      <div>
        <CloseButton onClick={this.props.viewClicked} class="closeBtn"/>
        <center><img alt="DM" src="DMIcon.png" id="icon"/></center><br/>
          <center>
            <h1>Disease Specific Care Management
            </h1>
          </center>
          <center><h2>Tools: iOS, Objective-C, Xcode, Instruments, SQLite, Mapkit, EKEvent</h2></center><br/>
          <div id="content">
          <p>Disease Specific Care Management(DM) is a proof of concept iPhone Application developed to help users manage their scheduled medical appointments and insurance companies to keep track of their customer’s health with input from physicians and laboratory results updated in the application.
          <br/><br/>
          <h3>Features</h3>
          <ul>
            <li>A one stop solution for insurance companies to suggest their customers of medical services they can avail and have all health records on the application</li>
            <li>The app can list out the nearby clinics, test centers and can also give directions to the location</li>
            <li>The app syncs the appointments to the calendar and notify users of upcoming appointments</li>
          </ul>
          <h3>Role</h3>
          <ul>
            <li><b>Initiated the idea</b> to develop the application on discussion with the business head in Tech Mahindra </li>
            <li><b>Spearheaded the entire application Single-Handedly</b> from Design to Development of the application.</li>
          </ul>
          </p>
          </div>
      </div>
    );
  }
}

export default Dm;
