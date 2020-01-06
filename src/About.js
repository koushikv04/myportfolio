import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron'

class About extends React.Component
{
  render()
  {
    return(
        <div className=" border border-primary">
          <div className="row">
            <div className="col">
              <div className="container-fluid border border-primary">
                <div className="Main">
                  <h1>
                    <center>5+</center>
                  </h1>
                </div>
                <div className="overlay">
                  <p> 5 + years of experience as Software Developer</p>
                </div>
              </div>
            </div>
            <div className="col">
            <div className="container-fluid border border-primary">
              <div className="Main">
                <h1>
                  <center>5+</center>
                </h1>
              </div>
              <div className="overlay">
                <p> 5 + years of experience as Software Developer</p>
              </div>
            </div>
            </div>
          </div>
          <div className="row">
          <div className="col">
          <div className="container-fluid border border-primary">
            <div className="Main">
              <h1>
                <center>5+</center>
              </h1>
            </div>
            <div className="overlay">
              <p> 5 + years of experience as Software Developer</p>
            </div>
          </div>
            </div>
            <div className="col">
            <div className="container-fluid border border-primary">
              <div className="Main">
                <h1>
                  <center>5+</center>
                </h1>
              </div>
              <div className="overlay">
                <p> 5 + years of experience as Software Developer</p>
              </div>
            </div>
            </div>
          </div>
        </div>
    );
  }
}

export default About;
