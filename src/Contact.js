import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron'

class Contact extends React.Component
{
  render()
  {
    return(
      <div class="container-fluid" id="contactsmain">
      <div className="row justify-content-center">
      <div className="col">
      <i id="contactsicons" class="fa fa-envelope">
        <br/>
        <a href="mailto:koushikv@outlook.com" >
          <i class="fa fa-send-o"/> an email
        </a>
      </i>
      </div>
      <div className="col">
      <i id="contactsicons" class='fa fa-linkedin-square'>
       <br/>
       <a href="https://www.linkedin.com/in/kaushikvenkataraman" target="_blank">
        <i class="fa fa-binoculars"/> Profile
        </a>
      </i>
      </div>
      </div>


      </div>
    );
  }
}

export default Contact;
