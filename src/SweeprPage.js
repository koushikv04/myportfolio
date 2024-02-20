import React from 'react';
import CloseButton from 'react-bootstrap/CloseButton';

class Sweepr extends React.Component
{
  render()
  {
    return(
      <div class = "container" id="sweeprcontainer">
        <CloseButton onClick={this.props.viewClicked} class="closeBtn"/>
             <a href="https://sweepr.com">
              <img alt="sweeprlogo" src="sweeprlogo.png" id="sweepr"/><i class="fa fa-external-link"/>
            </a>
           
         
          <h1>Sweepr</h1>
          <center><h2>Tools: iOS, Swift, Xcode, UIKit, Cocoapods, Alamofire, Google Analytics, Fastlane</h2></center><br/>
          <div id="content">
            <p>Sweepr is a simplified customer care solution helping customers to self-diagnose and fix issues at the ease of their homes without the hassle of waiting for customer care. </p>
            <br/>
            <h3> Role</h3>
            <ul>
             <li>Sole responsibility for handling iOS app development in Sweepr</li>
              <li>Develop, Maintain and Release core iOS Sweepr SDK on CocoaPods</li>
              <li>Responsible for Submitting, Managing and Monitoring iOS apps integrated with SDK on the App Store</li>
              <li>Work closely with the Backend and QA team in developing intuitive user experience and delivering quality apps</li>
              <li>Develop automated testing using XCTest and Ensure to maintain code coverage of the project</li>
              <li>Responsible for Releasing, Updating and Maintaining code on GitHub version control</li>
              <li>Responsible for Writing and Maintaining feature documentation and SDK guide</li>
              <li>Brainstorm and come up with new features working along with team members</li>
              <li>Responsible to perform research and integrating third-party SDK such as HomeKit etc. into the core SDK</li>
              <li>Work in Agile environment; Collaborate with team members in  planning and releasing new features in the sprint</li>
            </ul>
          </div>
      </div>
    );
  }
}

export default Sweepr;
