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

  constructor(props) {
    super(props);
    this.state = {
      display: this.props.value
    }
  }
  viewClicked=(e)=> {
      console.log(e.target);
      if(e.target === document.getElementById("contentModal") ) {
        this.setState({display:"None"})
        document.removeEventListener('mousedown', this.viewClicked);
      }


    }

  showModal = () => {
    this.setState({
      display: "block"
    })
    document.addEventListener('mousedown', this.viewClicked);

  }

  render()
  {
    return(
      <div id="mainout" >
      // <HashRouter>


      <div className="row justify-content-center">
        <div className="col-xs-6">
        <NavLink  to="/vizier"><img alt="viziericon" onClick = {this.showModal}  class="icons" src="viziericon.png"/></NavLink>

        </div>
        <div className="col-xs-6">
        <NavLink  to="/Medfit"><img alt="medfiticon" onClick = {this.showModal} class="icons" src="MedfitIcon.png"/></NavLink>

        </div>
        <div className="col-xs-6">
        <NavLink  to="/Cherrypick"><img alt="cherrypickicon" onClick = {this.showModal} class="icons" src="cherrypickicon.png"/></NavLink>

        </div>
        <div className="col-xs-6">
        <NavLink  to="/Sih"><img alt = "sihicon" onClick = {this.showModal} class="icons" src="sihicon.jpg"/></NavLink>

        </div>
        <div class="w-100"></div>

        <div className="col-xs-6">
        <NavLink  to="/Umap"><img alt="umapicon" onClick = {this.showModal} class="icons" src="UmapIcon.png"/></NavLink>

        </div>
        <div className="col-xs-6">
        <NavLink  to="/Bridge"><img alt = "bridgeicon" onClick = {this.showModal} class="icons" src="BridgeIcon.png"/></NavLink>

        </div>
        <div className="col-xs-6">
        <NavLink  to="/Radiotouch"><img  alt="rticon" onClick = {this.showModal}  class="icons" src="RTIcon.png"/></NavLink>

        </div>
        <div className="col-xs-6">
        <NavLink  to="/Dm"><img alt="dmicon" onClick = {this.showModal}  class="icons" src="DMIcon.png"/></NavLink>

        </div>
      </div>

      <div id="contentModal" className="modal" style = {{display:this.state.display}}>
        <div className="modal-content" >
          <Route path="/vizier" component={Vizier}/>
          <Route path="/Medfit" component={Medfit}/>
          <Route path="/Cherrypick" component={Cherrypick}/>
          <Route path="/Sih" component={Sih}/>
          <Route path="/Bridge" component={Bridge}/>
          <Route path="/Umap" component={Umap}/>
          <Route path="/Dm" component={Dm}/>
          <Route path="/Radiotouch" component={Radiotouch}/>
        </div>
      </div>
      </HashRouter>

      </div>

    );
  }
}

export default Projects;
