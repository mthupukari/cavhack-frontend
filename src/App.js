// importing components to use in this file
import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import { Navbar, NavItem, Nav } from 'react-bootstrap'

import MyProfileContainer from './containers/MyProfileContainer'
import AllProfilesContainer from './containers/AllProfilesContainer'
import College from './containers/College'
import Grades from './containers/Grades'
import "./index.css"

class App extends Component {
  constructor(props) {
    super(props)
    this.state={ready:false}

    // set title of the webpage when component is created
    document.title = 'My Profile'
  }
  onChange(){
    alert("hello")
    this.setState({
      ready: true
    });
  }
  getProfile(){
    return (
      <div>
        {/* ! ADD NAVBAR HERE */}
        <Navbar>
          <Navbar.Header>
            <Navbar.Brand>
              Gradebook
            </Navbar.Brand>
          </Navbar.Header>
          <Nav>
          <NavItem href="/">
              Home
            </NavItem>
            <NavItem href="/grades">
              Grades
            </NavItem>
            {/* <NavItem href="/schedule">
              Schedule
            </NavItem> */}
            
            <NavItem href="/college">
              College
            </NavItem>
          </Nav>
        </Navbar>
        
          <form>
            &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp; School Id:  
            <input onChange={this.onChange.bind(this) }type = "text" name = "id"></input>
            
          </form> 


        {/* router to navigate between pages, each page is a container */}
        <Switch>
          <Route exact
            path="/"
            render={() => (
              <MyProfileContainer show={this.state.ready} history={this.props.history} />
            )}
          />
          <Route path="/grades"
            render={() => (
              <Grades history={this.props.history} />
            )}
          />
          {/* <Route exact
            path="/gpa"
            render={() => (
              <MyProfileContainer history={this.props.history} />
            )}
          /> */}
          <Route exact
            path="/college"
            render={() => (
              <College history={this.props.history} />
            )}
          />
        </Switch>
      </div>
    );
  }
  render() {
    return this.getProfile();
  }
}

export default App;
