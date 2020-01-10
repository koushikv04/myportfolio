import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron'

class Umap extends React.Component
{
  render()
  {
    return(
      <div>
        <center><img src="UmapIcon.png" id="icon"/></center><br/><br/>
          <h2>Tools: iOS,Objective-C, Xcode</h2><br/>
          <p><b>An iPad Application provides information on current and upcoming conferences and facilitates delegates to chat, make seat selection and accommodation arrangements from iPad.</b>
          <h2>Role:</h2>
          <ul>
            <li>Stabilised the code through bug fixes </li>
            <li>Reconstructed the complete code to coding standards and performed memory optimisation</li>
            <li>Made Enhancements such as
- Displayroutesonmap
- SynchroniseeventstoiPadcalendar </li>
          </ul>
          </p>
      </div>
    );
  }
}

export default Umap;
