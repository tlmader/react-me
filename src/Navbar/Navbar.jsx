import React, { Component } from 'react';
import { AppBar, FlatButton } from 'material-ui';

import './Navbar.css';

export default class Navbar extends Component {
  render() {
    return (
      <div className="navbar">
        <AppBar
          showMenuIconButton={false}
          title="tlmader.github.io"
          iconElementRight={
            <FlatButton label="GitHub" href="https://github.com/tlmader" />
          }
        >
        </AppBar>
      </div>
    );
  }
}
