import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron'
import Vizier from "./VizierPage"
import Radiotouch from "./RTPage"
import Cherrypick from "./CherrypickPage"
import Medfit from "./MedfitPage"
import Dm from "./DMPage"
import Bridge from "./BridgePage"
import Sih from "./SIHPage"
import Umap from "./UmapPage"

import {Route,NavLink,HashRouter} from 'react-router-dom';

class Projects extends React.Component
{
  render()
  {
    return(
      <Jumbotron>
      <HashRouter>
      <div className="container" id="content">
        <Route path="/vizier" component={Vizier}/>
        <Route path="/Medfit" component={Medfit}/>
        <Route path="/Cherrypick" component={Cherrypick}/>
        <Route path="/Sih" component={Sih}/>
        <Route path="/Bridge" component={Bridge}/>
        <Route path="/Umap" component={Umap}/>
        <Route path="/Dm" component={Dm}/>
        <Route path="/Radiotouch" component={Radiotouch}/>

      </div>
        <div className="container" id="projectsContainer">
          <div className="row justify-content-center">
            <div className="col-xs-6">
              <h1>
                <NavLink  to="/vizier"><img id="icons"src="../vizierlogo.png"/></NavLink>
              </h1>
            </div>
            <div className="col-xs-6">
              <h1>
              <NavLink  to="/Medfit"><img id="icons"src="../MedfitIcon.png"/></NavLink>
              </h1>
            </div>
            <div className="col-xs-6">
              <h1>
              <NavLink  to="/Cherrypick"><img id="icons"src="../cherrypickicon.png"/></NavLink>
              </h1>
            </div>
            <div className="col-xs-6">
              <h1>
              <NavLink  to="/Sih"><img id="icons" src="../sihicon.jpg"/></NavLink>
              </h1>
            </div>
          <div class="w-100"></div>

          <div className="col-xs-6">
              <h1>
              <NavLink  to="/Umap"><img id="icons" src="../UmapIcon.png"/></NavLink>
              </h1>
            </div>
            <div className="col-xs-6">
              <h1>
              <NavLink  to="/Dm"><img id="icons" src="../DMIcon.png"/></NavLink>
              </h1>
            </div>
            <div className="col-xs-6">
              <h1>
              <NavLink  to="/Bridge"><img id="icons" src="../BridgeIcon.png"/></NavLink>
              </h1>
            </div>
            <div className="col-xs-6">
              <h1>
              <NavLink  to="/Radiotouch"><img id="icons" src="../RTIcon.png"/></NavLink>
              </h1>
            </div>
          </div>
        </div>
      </HashRouter>
      </Jumbotron>

    );
  }
}

export default Projects;
