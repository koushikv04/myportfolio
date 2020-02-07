import React from 'react';

class About extends React.Component
{
  render()
  {
    return(
        <div id="aboutcontainer">
          <div className="row justify-content-center">
            <div className="col-xs-6">
                <div className="flip-card">
                  <div className="flip-card-inner ">
                    <div className="flip-card-front">
                      <h2>6 years and counting...</h2>
                    </div>
                    <div className="flip-card-back">
                      <p>6+ years Experience as a Software Developer</p>
                    </div>
                  </div>
              </div>
            </div>
            <div className="col-xs-6">
                <div className="flip-card ">
                  <div className="flip-card-inner ">
                    <div className="flip-card-front">
                    <h2>Mobile,Web and More...</h2>
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
                    <i class='fa fa-rocket' id="rocketicon"></i>

                    </div>
                    <div className="flip-card-back">
                      <p>Explored new fields such as Iot,3D-printing,Machine learning</p>
                    </div>
                  </div>
              </div>
            </div>
            <div className="col-xs-6">
                <div className="flip-card ">
                  <div className="flip-card-inner ">
                    <div className="flip-card-front">
                    <h3>Varied experience</h3>
                    </div>
                    <div className="flip-card-back">
                      <p>Experience working in Industry, Startup and Research Centre, where to next?</p>
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
