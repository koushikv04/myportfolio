import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron'

class About extends React.Component
{
  render()
  {
    return(
        <div>
          <div className="row">
            <div className="column">
              <div className="container">
                <div class="flip-card">
                  <div className="flip-card-inner">
                    <div className="flip-card-front">
                    <div id="title">
                      <h3>5+</h3>
                      </div>
                    </div>
                    <div className="flip-card-back">
                      <p>5+ years experience as a Software Developer</p>
                    </div>

                  </div>
              </div>
            </div>
            </div>
            <div className="column">
              <div className="container">
                <div class="flip-card">
                  <div className="flip-card-inner">
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
          <div className="row">
          <div className="column">
            <div className="container">
              <div class="flip-card">
                <div className="flip-card-inner">
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
          <div className="column">
            <div className="container">
              <div class="flip-card">
                <div className="flip-card-inner">
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
        </div>
    );
  }
}

export default About;
