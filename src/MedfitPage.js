import React from 'react';

class Medfit extends React.Component
{
  render()
  {
    return(
      <div>
        <center><img alt="Medfit" src="MedfitIcon.png" id="icon"/></center><br/>
          <center><h2>Tools: Android,Java, Android studio</h2></center><br/>
          <p>MedFit is a health application lending a helping hand to patients suffering from Cardiovascular diseases (CVD) to stay fit by offering exercises, log and track progress, provide feedback and connect with participants and trainers.
          <br/>
          <h3>Role:</h3>
          <ul>
            <li><b>Single-handedly</b> developed the second version of the application </li>
            <li>Integrated Shimmer(R) API to capture and transmit data while performing exercises</li>
            <li>Contributed to two research papers and papers were accepted in <b>MMHealth workshop</b> and <b>MobiHealth conference</b></li>
          </ul>
          </p>
      </div>
    );
  }
}

export default Medfit;
