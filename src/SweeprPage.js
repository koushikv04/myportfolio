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
          <center><h2>Tools: Swift, Objective-C, XCode, UIKit, XCTest, CocoaPods, Android Studio, Android Alamofire, Google Analytics, Fastlane, Bash Automation, GitHub, Jenkins, HomeKit, Java, HTML/CSS/JavaScript, React, Agile methodology(Jira)  </h2></center><br/>
          <div id="content">
            <p>Sweepr is a simplified customer care solution for telecom companies to help their customers diagnose and fix network issues using mobile apps. Our SDK integrated into telco apps provides simplified step-by-step solutions to customer issues and is proactive in learning user needs. The SDK contains features which could help diagnose the home network, get device information and gather usage so that Sweepr can provide precise solutions.</p>
            <h3> Role</h3>
            <ul>
            <li>Responsible for Developing, Maintaining and Releasing iOS Apps and SDK in Sweepr. </li>
              <li>Contributed to Development, Maintenance and Release of Android apps and SDK </li>
              <li>Unified two iOS SDKs into one; Removed bugs and made it crash-free; Cleaned, Removed, and significantly reduced the number of lines of code in the project.</li>
              <li>Instrumental in developing Android POC testing the transition from React Native to native development using HTML/CSS/JavaScript assets </li>
              <li>Worked on developing new iOS SDKs with HTML/CSS/JavaScript assets</li>
              <li>Fixed and added new unit tests and integration tests; Increased Code coverage</li>
              <li>Worked on automation of processes in development such as Automated testing with GitHub Actions, SDK release using Jenkins and TestFlight and App Store releases using Fastlane</li>
              <li>Implemented bash scripts to ease coding and initialise processes</li>
              <li>Responsible for Submitting, Managing and Monitoring iOS apps integrated with SDK on the App Store and TestFlight</li>
              <li>Work closely with the Backend and QA team in developing new features, making new releases and delivering quality apps</li>
              <li>Responsible for Writing and Maintaining feature documentation and SDK guide</li>
              <li>Responsible for performing research and development on adding new features to the SDK </li>
              <li>Developed SDK extensions integrating Apple and third-party frameworks such as HomeKit, Ookla Speed test, Google Analytics, Shipbook logs, etc.</li>
              <li>Worked in Agile environment; Participated in daily stand-ups, sprint planning and collaborated with team members in planning and releasing new features in the sprint</li>
            </ul>
          </div>
      </div>
    );
  }
}

export default Sweepr;
