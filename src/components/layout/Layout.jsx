import React, { Component } from 'react';
import { AppBar } from 'material-ui';

import './Layout.css';

export default class Layout extends Component {
  render() {
    return (
      <div className="layout">
        <header>
          <AppBar
            title="tlmader.github.io"
            showMenuIconButton={false}
          />
        </header>
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
