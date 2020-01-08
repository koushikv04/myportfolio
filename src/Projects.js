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
      <HashRouter>
      <div>
      <Jumbotron>
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

        <div className="container">
          <div className="row">
            <div className="column">
              <h1>
                <NavLink  to="/vizier"><img src="../vizierlogo.png"/></NavLink>
              </h1>
            </div>
            <div className="column">
              <h1>
              <NavLink  to="/Medfit"><img src="../MedfitIcon.png"/></NavLink>
              </h1>
            </div>
            <div className="column">
              <h1>
              <NavLink  to="/Cherrypick"><img src="../cherrypickicon.png"/></NavLink>
              </h1>
            </div>
            <div className="column">
              <h1>
              <NavLink  to="/Sih"><img src="../sihicon.jpg"/></NavLink>
              </h1>
            </div>
          </div>
          <div className="row">
            <div className="column">
              <h1>
              <NavLink  to="/Umap"><img src="../UmapIcon.png"/></NavLink>
              </h1>
            </div>
            <div className="column">
              <h1>
              <NavLink  to="/Dm"><img src="../DMIcon.png"/></NavLink>
              </h1>
            </div>
            <div className="column">
              <h1>
              <NavLink  to="/Bridge"><img src="../BridgeIcon.png"/></NavLink>
              </h1>
            </div>
            <div className="column">
              <h1>
              <NavLink  to="/Radiotouch"><img src="../RTIcon.png"/></NavLink>
              </h1>
            </div>
          </div>
        </div>
      </Jumbotron>
      </div>
      </HashRouter>

    );
  }
}

export default Projects;
