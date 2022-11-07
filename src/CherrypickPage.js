import React from 'react';
import CloseButton from 'react-bootstrap/CloseButton';

class Cherrypick extends React.Component
{
  render()
  {
    return(
      <div class = "container-fluid">
        <CloseButton onClick={this.props.viewClicked} class="closeBtn"/>

        <center><img alt="cherrypick" src="cherrypickicon.png" id="icon"/></center><br/>
        <center>
          <h1><a href="https://en.wikiredia.com/wiki/User:Cherrypickbox/sandbox" target="_blank" rel="noopener noreferrer">Cherrypickbox</a>
          </h1>
        </center>
          <center><h2>Tools: iOS, Objective-C, Xcode, EKEvent, UIKit, JSON, REST, Networking</h2></center><br/>
          <div id = "content">
          <p>A 360&#176; digital enterprise colloboration platform which provides single point of contact for customers to create work groups, manage tasks, share messages, documents, notes, create events and much more.
          <br/><br/>
          <h2><center><b>Features</b></center></h2>
          <div class="row align-items-center">
            <div class="col" id="leftcontent">
              <img id="screenshot" alt="cherrypick1" src="cherrypick1.jpeg" />
            </div>
            <div class="col">
              Create workgroups,Manage time,share documents,post messages,assign tasks,Manage forms
            </div>
            </div>
            <div class="row align-items-center">
            <div class="col" id="leftcontent">
              Create and Manage events
            </div>
              <div class="col">
                <img id="screenshot" alt="cherrypick2" src="cherrypick2.jpeg" />
              </div>

              </div>
              <div class="row align-items-center">
                <div class="col" id="leftcontent">
                  <img id="screenshot" alt="cherrypick3" src="cherrypick3.jpeg" />
                </div>
                <div class="col">
                  Create and manage boxes such as add member, add topic,lock box etc.
                </div>
          </div>
          <ul>
            <li> Multiple levels of access control</li>
            <li> Define, store and share different types of content such as documents,notes,images and videos</li>
            <li>Automatically manage and track new versions of the content</li>

          </ul>
          <br/>
          <h3>Role</h3>
          <ul>
            <li><b>Single-handedly</b> developed the second version of the application from scratch  </li>
            <li>Reconstructed the entire UI of the application to development standards</li>
            <li>Updated the application to include all features from website such as :
            <ul>
            <li>Post Messages, Documents and Events</li>
            <li>Reply and share to posts</li>
            <li>Manage forms</li>
            <li>Create and Manage boxes</li>
            </ul>
            </li>
          </ul>
          </p>
          </div>
      </div>
    );
  }
}

export default Cherrypick;
