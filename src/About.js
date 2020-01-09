import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron'

class About extends React.Component
{
  render()
  {
    return(
      <Jumbotron>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xs-6">
                <div className="flip-card">
                  <div className="flip-card-inner ">
                    <div className="flip-card-front">
                      <h3>5+</h3>
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
                      <h3>5+</h3>
                    </div>
                    <div className="flip-card-back">
                      <p>5+ years experience as a Software Developer</p>
                    </div>
                  </div>
              </div>
            </div>
            <div class="w-100"></div>

            <div className="col-xs-6">
                <div className="flip-card ">
                  <div className="flip-card-inner ">
                    <div className="flip-card-front">
                      <h3>5+</h3>
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
                      <h3>5+</h3>
                    </div>
                    <div className="flip-card-back">
                      <p>5+ years experience as a Software Developer</p>
                    </div>
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
