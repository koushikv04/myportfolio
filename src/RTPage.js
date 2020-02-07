import React from 'react';

class Radiotouch extends React.Component
{
  render()
  {
    return(
      <div>
        <center><img alt="Radiotouch" src="RTIcon.png" id="icon"/></center><br/>
          <center><h1> Radiotouch </h1></center>
          <center><h2>Tools: iOS,Objective-C, Xcode</h2></center><br/>
          <p id="firstapp"><h3>My First App <span role="img">&#x1F600;</span></h3></p>
          <div id="protoimages">
          <img alt="proto1" src="proto1.png" />
          <img alt="proto2" src="proto2.png" />
          <img alt="proto3" src="proto3.png" />
          </div>
          <br/>
          <div id="content">
            <p> The Journey Began here</p>
            <p> <span role="img">An &#x1F4A1;</span> begins with a wireframe is what the crude drawing all about <span role="img">&#x1F600;</span> </p>
            <p><b>Radiotouch</b> is proof of concept iPad application, which can display high resolution X-Rays wherein expert physicians can review/share/comment on them.
            <br/><br/>
            <h3>Features</h3>
            <ul>
              <li>The ipad application can display high resolution X-Ray images. The app could decompress the high resolution x-rays on the fly and annotate the images with the help of a third party SDK.</li>
              <li>Physicians can view, annotate and comment on the images</li>
              <li>Individual access and the permission varies between Doctors, Nurses and technical physicians</li>
            </ul>

            <br/>
            <h3>Role</h3>
            <ul>
              <li>Performed preliminary research and Requirement gathering </li>
              <li>Designed the flow and architecture and Developed the application  </li>
              <li>Worked in a team and reported directly to the business head</li>
            </ul>
            <br/>
            <h3>Result</h3>
            <ul>
              <li>The application was well received and showcased to many clients </li>
              <li>The Application was nominated for <b> Mahindra Innovation Awards </b></li>
              <li>The Application was patented in Australia under the name:<b>Cloud Based Versatile Systems for Radiological Images </b> in 2013</li>
            </ul>
          </p>
          </div>
      </div>
    );
  }
}

export default Radiotouch;
