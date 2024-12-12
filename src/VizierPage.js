import React from 'react';
import CloseButton from 'react-bootstrap/CloseButton';

class Vizier extends React.Component
{
  render()
  {
    return(
      <div class = "container-fluid">
         <CloseButton onClick={this.props.viewClicked} class="closeBtn"/>
        <center><img alt="vizierprototype"src="vizierprototype.gif" id="vizierprototype"/></center><br/>
        <center><a href="https://aalvizier.eu/"><img alt="vizierlogo" src="vizierlogo.png" id="vizi"/><i class="fa fa-external-link"/>
</a></center><br/>
<center><h2>Tools: RaspberryPi, JavaScript, Python, NodeJS, MongoDB, Swagger, Linux, Docker, IoT</h2></center><br/>
          <div id="content">
          <p>Vizier is a smart home IoT-based system designed to help the elderly to lead an active social, mental and physical life.
          <br/><br/>
          <h3>Features</h3>
          <ul>
            <li> Voice-based communication system for users to query topics such as events, home sensors, messages etc</li>
            <li>Tablet application consisting of features such as mail, voice and audio call, Fitbit, calendar, etc.</li>
            <li>Monitor home using installed Z-wave sensors such as door and window sensors, multi-sensors, etc. </li>
            <li>Online course for users to stay mentally fit</li>
          </ul>
          <h3>Role</h3>
          <ul>
          <li> Led the DCU team on the development of the backend system and building the main console integrating home sensors.</li>
            <li> Worked alongside European partners integrating various systems </li>
            <li> Developed the second version of the system from scratch</li>
            <li>Performed the research and development of the speech recognition system using Raspberry Pi and Matrix Voice </li>
            <li>Developed the smart home platform integrating Z-Wave home sensors</li>
            <li>Worked on fabricating and 3D printing the box housing matrix voice </li>
            <li>Developed and maintained the back-end system, including API development, Database Management, etc.</li>
            <li>Responsible for writing and maintaining documentation of the project</li>
            <li> Responsible for the presentation of the system on behalf of DCU</li>
          </ul>

          </p>
          </div>
      </div>
    );
  }
}

export default Vizier;
