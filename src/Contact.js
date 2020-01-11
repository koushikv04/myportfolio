import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron'

class Contact extends React.Component
{
  render()
  {
    return(
      <Jumbotron id="contactsmain">

        <p><center><i id="contactsicons" class="fa fa-envelope"><br/><a href="mailto:koushikv@outlook.com">Let me send an email to this guy </a> </i><br/> <i id="contactsicons" class='fa fa-linkedin-square'><br/><a href="https://www.linkedin.com/in/kaushikvenkataraman">Checkout Profile</a></i></center></p>

      </Jumbotron>
    );
  }
}

export default Contact;
