import React, { Component } from 'react';

import Drawer from 'material-ui/Drawer'
import Heading from './heading.js'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import MenuItem from 'material-ui/MenuItem';
import SendIt from './SendIt.js'

import ChevronIcon from 'material-ui/svg-icons/navigation/chevron-left'
import './unixify.js';

import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      drawerOpen: false,
      location: null
    }
  }

  toggleDrawer = () => {
    this.setState({
      drawerOpen: !this.state.drawerOpen
    })
  }

  setLocation = (city) => this.setState({location: city});
  handleClose = () => this.setState({drawerOpen: false});

  render() {
    const { drawerOpen, location } = this.state;

    return (
      <MuiThemeProvider>
        <div style={{maxWidth: '100vh', overflow: 'hidden'}}>
          <Drawer open={drawerOpen}>
            <MenuItem style={{background: '#f3f4f4'}}
              onTouchTap={this.handleClose}
              >
              <div style={{display:'flex', flexDirection: 'row', alignItems: 'center'}}>
                <ChevronIcon /> Close
              </div>
            </MenuItem>
            <MenuItem style={{background: '#f3f4f4'}}
              onTouchTap={() => {this.handleClose(); this.setLocation('moab')}}
              >
              <div style={{display:'flex', flexDirection: 'row', cursor: 'pointer', alignItems: 'center'}}>
                Moab
              </div>
            </MenuItem>
            <MenuItem style={{background: '#f3f4f4'}}
              onTouchTap={() => {this.handleClose(); this.setLocation('Red Rocks')}}
              >
              <div style={{display:'flex', flexDirection: 'row', cursor: 'pointer', alignItems: 'center'}}>
                Red Rocks
              </div>
            </MenuItem>
            <MenuItem style={{background: '#f3f4f4'}}
              onTouchTap={() => {this.handleClose(); this.setLocation('Indian Creek')}}>
              <div style={{display:'flex', flexDirection: 'row', cursor: 'pointer', alignItems: 'center'}}>
                Indian Creek
              </div>
            </MenuItem>
            <MenuItem style={{background: '#f3f4f4'}}
              onTouchTap={() => {this.handleClose(); this.setLocation('about')}}>
              <div style={{display:'flex', flexDirection: 'row', cursor: 'pointer', alignItems: 'center'}}>
                About
              </div>
            </MenuItem>
          </Drawer>
          <Heading toggleDrawer={this.toggleDrawer}/>
          <SendIt location={location}/>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
