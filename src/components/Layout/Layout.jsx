import React, { Component } from 'react';
import { AppBar } from 'material-ui';

import './Layout.css';

export default class Layout extends Component {
  render() {
    return (
      <div className="layout">
        <header className="header">
          <AppBar
            title="tlmader.github.io"
            showMenuIconButton={false}
          />
        </header>
        <div className="body">
          <main className="body__content">{this.props.children}</main>
        </div>
        <footer className="footer">
          <p>Handcrafted with love by Ted Mader.</p>
        </footer>
      </div>
    );
  }
}
