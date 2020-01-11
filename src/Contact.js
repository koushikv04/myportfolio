import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron'

class Contact extends React.Component
{
  render()
  {
    return(
      <Jumbotron id="contactsmain">

        <p><center><i id="contactsicons" class="fa fa-envelope"><br/><a href="mailto:koushikv@outlook.com" ><i class="fa fa-send-o"/> an email  </a> </i><br/> <i id="contactsicons" class='fa fa-linkedin-square'><br/><a href="https://www.linkedin.com/in/kaushikvenkataraman" target="_blank"><i class="fa fa-binoculars"/> Profile</a></i></center></p>

      </Jumbotron>
    );
  }
}

export default Contact;
