import React, { Component } from 'react';
import { AppBar, Avatar } from 'material-ui';

import './Layout.css';
import Header from '../Header/Header';

export default class Layout extends Component {
  render() {
    return (
      <div className="layout">
        <Header />
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
