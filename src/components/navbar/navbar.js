import React, { Component } from 'react';

class NavBar extends Component {
  render() {
    return (
        <div>
            <header className="topbar">
            <nav className="navbar top-navbar navbar-expand-md navbar-light">
                <div className="navbar-header">
                    <a className="navbar-brand" href="index.html">
                        <b>
                            <i className="wi wi-sunset"></i>
                            <img src="https://wrappixel.com/demos/admin-templates/admin-pro/assets/images/logo-icon.png" alt="homepage" className="dark-logo" />
                            <img src="https://wrappixel.com/demos/admin-templates/admin-pro/assets/images/logo-light-icon.png" alt="homepage" className="light-logo" />
                        </b>
                        <span>
                         <img src="https://wrappixel.com/demos/admin-templates/admin-pro/assets/images/logo-text.png" alt="homepage" className="dark-logo" />
                         <img src="https://wrappixel.com/demos/admin-templates/admin-pro/assets/images/logo-light-text.png" className="light-logo" alt="homepage" /></span> </a>
                </div>
                
                <div className="navbar-collapse">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item"> <a className="nav-link nav-toggler hidden-md-up waves-effect waves-dark" href="javascript:void(0)"><i className="ti-menu"></i></a> </li>
                        <li className="nav-item"> <a className="nav-link sidebartoggler hidden-sm-down waves-effect waves-dark" href="javascript:void(0)"><i className="ti-menu"></i></a> </li>
                        <li className="nav-item hidden-sm-down"></li>
                    </ul>
                </div>
            </nav>
        </header>
        </div>
    );
  }
}

export default NavBar;
