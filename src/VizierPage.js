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
          <center><h2>Tools: RaspberryPi,Javascript, Python, NodeJS, MongoDB, Swagger,Linux,Docker,IoT</h2></center><br/>
          <div id="content">
          <p>Vizier is a smart home IoT based system designed to help elderly to lead a active social,mental and physical life.
          <br/><br/>
          <h3>Features</h3>
          <ul>
            <li>Voice based communication system for users to query on topics such as events,home sensors,messages etc</li>
            <li>Tablet application consisting of features such as mail,voice and audio call, fitbit,calendar etc.</li>
            <li>Monitor home using Z-wave sensors such as door,mutlisensors etc </li>
            <li>Online course for users to stay mentally fit</li>
          </ul>
          <h3>Role</h3>
          <ul>
            <li>Worked as the <b>Senior Researcher </b>on the project  </li>
            <li>Lead the DCU team and worked alongside European partners</li>
            <li> Developed the second version of the system from scratch</li>
            <li>Performed the research and development of the speech recognition system using Raspberry pi and Matrix Voice </li>
            <li>Developed the smart home platform integrating the z-wave sensors</li>
            <li>Developed and maintained the back-end system including API development, Database Management etc. following Agile methodology</li>
            <li>Responsible for documentation and presentation of system on behalf of DCU</li>
          </ul>
          </p>
          </div>
      </div>
    );
  }
}

export default Vizier;
