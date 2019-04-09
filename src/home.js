import React, { Component } from 'react';
import NavBar from './components/navbar/navbar'
import SideBar from './components/sidebar/sidebar'
import AddProject from './components/addNewProject/addProject'
import { Route , Switch} from 'react-router-dom';
import './App.css';

class App extends Component {
  render() {
    return (
        <div>
            <NavBar />
            <SideBar />
            <Switch>
              <Route path = "/dashboard/add-new-project" component = {AddProject} />
            </Switch>
        </div>
    );
  }
}

export default App;
