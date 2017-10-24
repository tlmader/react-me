import React, { Component } from 'react';

import './Layout.css';

export default class Layout extends Component {
  render() {
    return (
      <div className="layout">
        <header>tlmader.github.io</header>
        <div className="body">
          <nav className="nav">nav</nav>
          <main className="content">{this.props.children}</main>
          <aside className="aside">aside</aside>
        </div>
        <footer>footer</footer>
      </div>
    );
  }
}
