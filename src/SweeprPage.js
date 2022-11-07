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
              <li>Developed and maintained core Sweepr SDK on cocoapods</li>
              <li>Responsible in developing and delivering custom client apps integrating SDK </li>
              <li>Responsible in developing the POC and transitioning of solutions from react native to HTML</li>
             <li>Our clients included Virgnia Media, T-Mobile, Telus</li>
            </ul>
          </div>
      </div>
    );
  }
}

export default Sweepr;
