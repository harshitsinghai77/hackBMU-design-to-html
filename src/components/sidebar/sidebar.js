import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class SideBar extends Component {
  render() {
    return (
        <div>
             <aside className="left-sidebar">
              <div className="scroll-sidebar">
                <nav className="sidebar-nav">
                    <ul id="sidebarnav">
                        <li className="user-profile"> <a className="has-arrow waves-effect waves-dark" href="#" aria-expanded="false"><img src="https://wrappixel.com/demos/admin-templates/admin-pro/assets/images/users/profile.png" alt="user" /><span className="hide-menu">Harshit Singhai</span></a></li>
                        <li className="nav-devider"></li>
                        <li className="nav-small-cap">My Projects</li>
                        <li> <Link className="has-arrow waves-effect waves-dark" to="/dashboard/add-new-project" aria-expanded="false"><i className="mdi mdi-gauge"></i><span className="hide-menu">Colourize Image <span className="label label-rouded label-themecolor pull-right">4</span></span></Link></li>
                        <li> <a className="has-arrow waves-effect waves-dark" href="#" aria-expanded="false"><i className="mdi mdi-bullseye"></i><span className="hide-menu">Design to Code</span></a></li>
                        
                        <li className="nav-small-cap">Start New Projects</li>
                        <li> <a className="has-arrow waves-effect waves-dark" href="#" aria-expanded="false"><i className="mdi mdi-gauge"></i><span className="hide-menu">Colourize Image<span className="label label-rouded label-themecolor pull-right">4</span></span></a></li>
                        <li> <a className="has-arrow waves-effect waves-dark" href="#" aria-expanded="false"><i className="mdi mdi-bullseye"></i><span className="hide-menu">Design to Code</span></a></li>
                    
                    </ul>
                </nav>
            </div>
        </aside>
        </div>
    );
  }
}

export default SideBar;
