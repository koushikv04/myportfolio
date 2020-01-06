import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron'

class Projects extends React.Component
{
  render()
  {
    return(
      <div>
      <Jumbotron>
        <div className="container">
          <div className="row">
            <div className="col">
              <h1>
                <center>Summary 1</center>
              </h1>
            </div>
            <div className="col">
              <h1>
                <center>Summary 2</center>
              </h1>
            </div>
            <div className="col">
              <h1>
                <center>Summary 2</center>
              </h1>
            </div>
            <div className="col">
              <h1>
                <center>Summary 2</center>
              </h1>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <h1>
                <center>Summary 3</center>
              </h1>
            </div>
            <div className="col">
              <h1>
                <center>Summary 4</center>
              </h1>
            </div>
            <div className="col">
              <h1>
                <center>Summary 2</center>
              </h1>
            </div>
            <div className="col">
              <h1>
                <center>Summary 2</center>
              </h1>
            </div>
            <div className="col">
              <h1>
                <center>Summary 2</center>
              </h1>
            </div>
          </div>
        </div>
      </Jumbotron>
      </div>
    );
  }
}

export default Projects;
