import React, { Component } from 'react';

export default class Layout extends Component {
  render() {
    return (
      <div className="layout">\
        <body class="HolyGrail">
          <header>tlmader.github.io</header>
          <div class="body">
            <main class="content">{this.props.children}</main>
            <nav class="nav"></nav>
            <aside class="ads"></aside>
          </div>
          <footer></footer>
        </body>
      </div>
    );
  }
}
