import React from 'react';
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

      <div className="tab">
      <button><NavLink  to="/vizier"><img  alt="vizier" id="vizier"src="viziericon.png"/></NavLink></button>
      <button><NavLink  to="/Medfit"><img alt="Medfit" class="icons" src="MedfitIcon.png"/></NavLink></button>
      <button><NavLink  to="/Cherrypick"><img alt="cherrypick" class="icons" src="cherrypickicon.png"/></NavLink></button>
      <button><NavLink  to="/Sih"><img alt="sih" class="icons" src="sihicon.jpg"/></NavLink></button>
      </div>
      <div class="sidebar">
      <button><NavLink  to="/vizier"><img  alt="vizierlogo" id="vizi"src="vizierlogo.png"/></NavLink></button>
      <NavLink  to="/Medfit"><img alt="medfiticon" class="icons" src="MedfitIcon.png"/></NavLink>
      <NavLink  to="/Cherrypick"><img alt="cherrypickicon" class="icons" src="cherrypickicon.png"/></NavLink>
      <NavLink  to="/Sih"><img alt="sihicon" class="icons" src="sihicon.jpg"/></NavLink>
      <NavLink  to="/Umap"><img alt="umpaicon" class="icons" src="UmapIcon.png"/></NavLink>
      <NavLink  to="/Bridge"><img alt="bridgeicon" class="icons" src="BridgeIcon.png"/></NavLink>
      <NavLink  to="/Radiotouch"><img alt="rticon" class="icons" src="RTIcon.png"/></NavLink>
      <NavLink  to="/Dm"><img alt="dmicon" class="icons" src="DMIcon.png"/></NavLink>
      </div>
      <div className="tabright">
      <button><NavLink  to="/Umap"><img alt="umapicon" class="icons" src="UmapIcon.png"/></NavLink></button>
      <button><NavLink  to="/Bridge"><img alt="bridgeicon" class="icons" src="BridgeIcon.png"/></NavLink></button>
      <button><NavLink  to="/Radiotouch"><img alt="rticon" class="icons" src="RTIcon.png"/></NavLink></button>
      <button><NavLink  to="/Dm"><img alt="dmicon" class="icons" src="DMIcon.png"/></NavLink></button>
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





      </HashRouter>
      </div>

    );
  }
}

export default Projects;
