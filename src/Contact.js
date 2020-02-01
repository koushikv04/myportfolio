import React from 'react';

class Contact extends React.Component
{
  render()
  {
    return(
      <div class="container-fluid" id="contactsmain">
        <div className="row">
          <div class="col">
            <i id="contactsicons" class="fa fa-envelope">
              <br/>
            <a href="mailto:koushikv@outlook.com" ><i class="fa fa-send-o"/> an email</a>
            </i>
          </div>
          <div class="col">
            <i id="contactsicons" class='fa fa-linkedin-square'>
            <br/>
            <a href="https://www.linkedin.com/in/kaushikvenkataraman" target="_blank" rel="noopener noreferrer">
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
