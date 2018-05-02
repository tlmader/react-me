import React, { Component } from 'react';
import { Avatar } from 'material-ui';

import './Header.css';

export default class Header extends Component {
  render() {
    return (
      <div className="header">
        <Avatar
          src="images/avatar.jpg"
          size={128}/>
        <h3>Ted Mader</h3>
        <p>Web Developer • Gamer • Creative Hobbyist</p>
      </div>
    );
  }
}
