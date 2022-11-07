import React from 'react';
import Vizier from "./VizierPage"
import Radiotouch from "./RTPage"
import Cherrypick from "./CherrypickPage"
import Medfit from "./MedfitPage"
import Dm from "./DMPage"
import Bridge from "./BridgePage"
import Sih from "./SIHPage"
import Umap from "./UmapPage"
import Sweepr from  "./SweeprPage"
import {Route,NavLink,HashRouter} from 'react-router-dom';

import { Outlet, Link } from "react-router-dom";

class Projects extends React.Component
{

  constructor(props) {
    super(props);
    this.state = {
      display: this.props.value
    }
  }
  viewClicked=(e)=> {
        this.setState({display:"None"})

    }

  showModal = () => {
    this.setState({
      display: "block"
    })

  }

  render()
  {
    return(
        <HashRouter>
          <div class="row justify-content-center p-5" id="projectsrow">
          <div class=".col-xs-2">
            <NavLink  to="/Sweepr">
              <img alt="sweeprlogo" onClick = {this.showModal}  class="icons" src="sweeprlogo.png"/>
            </NavLink>
          </div>
          <div class=".col-xs-2">
            <NavLink  to="/vizier">
              <img alt="viziericon" onClick = {this.showModal}  class="icons" src="viziericon.png"/>
            </NavLink>
          </div>
          <div class=".col-xs-2">
            <NavLink  to="/Medfit">
              <img alt="medfiticon" onClick = {this.showModal} class="icons" src="MedfitIcon.png"/>
            </NavLink>
          </div>
          <div class=".col-xs-2">
            <NavLink  to="/Cherrypick">
              <img alt="cherrypickicon" onClick = {this.showModal} class="icons" src="cherrypickicon.png"/>
            </NavLink>
          </div>
          <div class=".col-xs-2">
            <NavLink  to="/Sih">
              <img alt = "sihicon" onClick = {this.showModal} class="icons" src="sihicon.jpg"/>
            </NavLink>
          </div>
          <div class="w-100"></div>
          <div class=".col-xs-3">
            <NavLink  to="/Umap">
              <img alt="umapicon" onClick = {this.showModal} class="icons" src="UmapIcon.png"/>
            </NavLink>
          </div>
          <div class=".col-xs-3">
            <NavLink  to="/Bridge">
              <img alt = "bridgeicon" onClick = {this.showModal} class="icons" src="BridgeIcon.png"/>
            </NavLink>
          </div>
          <div class=".col-xs-3">
            <NavLink  to="/Dm">
              <img alt="dmicon" onClick = {this.showModal}  class="icons" src="DMIcon.png"/>
            </NavLink>
          </div>
          <div class=".col-xs-3">
            <NavLink  to="/Radiotouch">
              <img  alt="rticon" onClick = {this.showModal}  class="icons" src="RTIcon.png"/>
            </NavLink>
          </div>
        </div>
        <div id="contentModal" class="modal" style = {{display:this.state.display}}>
          <div class="modal-content" >
            <Route path="/Sweepr"> <Sweepr viewClicked={this.viewClicked}/> </Route>
            <Route path="/vizier"><Vizier viewClicked={this.viewClicked}/> </Route>
            <Route path="/Medfit"> <Medfit viewClicked={this.viewClicked}/> </Route>
            <Route path="/Cherrypick"><Cherrypick viewClicked={this.viewClicked}/> </Route>
            <Route path="/Sih"> <Sih viewClicked={this.viewClicked}/> </Route>
            <Route path="/Bridge"> <Bridge viewClicked={this.viewClicked}/> </Route>
            <Route path="/Umap"> <Umap viewClicked={this.viewClicked}/> </Route>
            <Route path="/Dm"> <Dm viewClicked={this.viewClicked}/> </Route>
            <Route path="/Radiotouch"> <Radiotouch viewClicked={this.viewClicked}/> </Route>
          </div>
        </div>
      </HashRouter>

    );
  }
}

export default Projects;
