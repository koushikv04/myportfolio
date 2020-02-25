import React from 'react';

class Medfit extends React.Component
{
  render()
  {
    return(
      <div>
        <center><img alt="Medfit" src="MedfitIcon.png" id="icon"/></center><br/>
          <center><h2>Tools: Android, Java, Android studio, Shimmer Api</h2></center><br/>
          <div id="content">
          <p>MedFit is a mobile health application lending a helping hand to patients suffering from Cardiovascular diseases (CVD) to stay fit by offering exercises, log and track progress, provide feedback and connect with participants and trainers.
          <br/><br/>
          <h3><center>Features</center></h3>
          <div className="sidebar">
              <img id="screenshot2" alt="medfit1" src="medfit1.png" />
              <img id="screenshot2" alt="medfit2" src="medfit2.png" />
              <img id="screenshot2" alt="medfit3" src="medfit3.png" />
              <img id="screenshot2" alt="medfit4" src="medfit4.png" />
              <img id="screenshot2" alt="medfit5" src="medfit5.png" />
          </div>
          <ul>
          <li>Easy to use and Designed with large fonts to help the elderly to navigate the application</li>
          <li>The exercises are automatically chosen based on feedback from users and repetition count monitored for each exercise</li>
          <li>Application also provides additional features such as :
            <ul>
              <li>Monitor progress using Fitbit</li>
              <li>Join a group and find out where they stand with the rest</li>
              <li>Health tips</li>
              <li>Chat feature with groups and individuals</li>
            </ul>
          </li>

          </ul>
          <h3><center>Role</center></h3>
          <ul>
            <li><b>Single-handedly</b> developed the second version of the application </li>
            <li>Integrated Shimmer(R) API to capture and transmit data while performing exercises</li>
            <li>Contributed to two research papers and papers were accepted in <b><a href="http://doras.dcu.ie/21910/" target="_blank" rel="noopener noreferrer">MMHealth workshop</a></b> and <b><a href="http://doras.dcu.ie/22042/" target="_blank" rel="noopener noreferrer">MobiHealth conference</a></b></li>
          </ul>
          </p>
          </div>
      </div>
    );
  }
}

export default Medfit;
