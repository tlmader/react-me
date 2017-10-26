import React, { Component } from 'react';

import './Home.css';
import Details from '../Details/Details';
import Grid from '../Grid/Grid';

export default class Home extends Component {

  constructor() {
    super();
    this.state = {
      selectedTile: null
    };
    // Bind the this context to the handler function
    this.closeDetails = this.closeDetails.bind(this);
    this.selectTile = this.selectTile.bind(this);
  }

  closeDetails() {
    this.setState({
      selectedTile: null
    });
  }

  selectTile(tile) {
    this.setState({
      selectedTile: tile
    });
  }

  render() {
    return (
      <div className="home">
        <Details
          close={this.closeDetails}
          tile={this.state.selectedTile}/>
        <Grid
          selectTile={this.selectTile}/>
      </div>
    );
  }
}
