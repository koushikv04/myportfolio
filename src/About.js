import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron'

class About extends React.Component
{
  render()
  {
    return(
        <Jumbotron id="aboutcontainer">
          <div className="row justify-content-center">
            <div className="col-xs-6">
                <div className="flip-card">
                  <div className="flip-card-inner ">
                    <div className="flip-card-front">
                      <h4>5 years and counting...</h4>
                    </div>
                    <div className="flip-card-back">
                      <p>5+ years experience as a Software Developer</p>
                    </div>
                  </div>
              </div>
            </div>
            <div className="col-xs-6">
                <div className="flip-card ">
                  <div className="flip-card-inner ">
                    <div className="flip-card-front">
                    <h3>Mobile,Web and More...</h3>
                    </div>
                    <div className="flip-card-back">
                      <p>Developed variety of Mobile, Web and Software applications from Healthcare to Enterprise </p>
                    </div>
                  </div>
              </div>
            </div>
            <div class="w-100"></div>

            <div className="col-xs-6">
                <div className="flip-card ">
                  <div className="flip-card-inner ">
                    <div className="flip-card-front">
                    <h2>Exploring</h2>
                    <i class='fas fa-rocket'></i>

                    </div>
                    <div className="flip-card-back">
                      <p>explored new fields such as Iot,3D-printing,Machine learning</p>
                    </div>
                  </div>
              </div>
            </div>
            <div className="col-xs-6">
                <div className="flip-card ">
                  <div className="flip-card-inner ">
                    <div className="flip-card-front">
                    <h4>Methods followed</h4>
                    </div>
                    <div className="flip-card-back">
                      <p>Implemented projects through Agile and waterfall methodologies</p>
                    </div>
                  </div>
              </div>
            </div>
          </div>

        </Jumbotron>
    );
  }
}

export default About;
