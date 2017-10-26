import React, { Component } from 'react';

import './Layout.css';
import Header from '../Header/Header';

export default class Layout extends Component {
  render() {
    return (
      <div className="layout">
        <Header />
        <main className="body">{this.props.children}</main>
        <footer className="footer">
          <p>Handcrafted with love by Ted Mader.</p>
        </footer>
      </div>
    );
  }
}
