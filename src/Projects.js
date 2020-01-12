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
      <div id="mainout">
      <HashRouter>

      <div class="tab">
      <button><NavLink  to="/vizier"><img  id="vizi"src="vizierlogo.png"/></NavLink></button>
      <button><NavLink  to="/Medfit"><img class="icons" src="MedfitIcon.png"/></NavLink></button>
      <button><NavLink  to="/Cherrypick"><img class="icons" src="cherrypickicon.png"/></NavLink></button>
      <button><NavLink  to="/Sih"><img class="icons" src="sihicon.jpg"/></NavLink></button>
      </div>
      <div className="tabcontent">
        <Route path="/vizier" component={Vizier}/>
        <Route path="/Medfit" component={Medfit}/>
        <Route path="/Cherrypick" component={Cherrypick}/>
        <Route path="/Sih" component={Sih}/>
        <Route path="/Bridge" component={Bridge}/>
        <Route path="/Umap" component={Umap}/>
        <Route path="/Dm" component={Dm}/>
        <Route path="/Radiotouch" component={Radiotouch}/>

      </div>

      <div class="tabright">
      <button><NavLink  to="/Umap"><img class="icons" src="UmapIcon.png"/></NavLink></button>
      <button><NavLink  to="/Bridge"><img class="icons" src="BridgeIcon.png"/></NavLink></button>
      <button><NavLink  to="/Radiotouch"><img class="icons" src="RTIcon.png"/></NavLink></button>
      <button><NavLink  to="/Dm"><img class="icons" src="DMIcon.png"/></NavLink></button>
      </div>

      </HashRouter>
      </div>

    );
  }
}

export default Projects;
