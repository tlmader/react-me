import React, { Component } from 'react';
import { Card, CardHeader, FontIcon, GridList, GridTile, IconButton, Paper } from 'material-ui';

import './Home.css';
import tilesData from '../data';
import Details from '../Details/Details';

export default class Home extends Component {

  constructor() {
    super();
    this.state = {
      showDetails: true,
      cols: 3,
      padding: 32,
      selectedTile: null
    };

    // Bind the this context to the handler function
    this.closeDetails = this.closeDetails.bind(this);
  }

  closeDetails() {
    this.setState({
      showDetails: false
    });
  }

  /**
   * Calculate & Update state of new dimensions
   */
  updateCols() {
    if (window.innerWidth < 600) {
      this.setState({
        cols: 2,
        padding: 4
      });
    } else if (window.innerWidth < 960) {
      this.setState({
        cols: 3,
        padding: 32
      });
    } else {
      this.setState({
        cols: 3,
        padding: 64
      });
    }
  }

  /**
   * Add event listener
   */
  componentDidMount() {
    this.updateCols();
    window.addEventListener("resize", this.updateCols.bind(this));
  }

  /**
   * Remove event listener
   */
  componentWillUnmount() {
    window.removeEventListener("resize", this.updateCols.bind(this));
  }

  render() {
    return (
      <div className="home">
        <Details
          show={this.state.showDetails}
          close={this.closeDetails}
          data={this.selectedTile}/>
        <div className="grid">
          <GridList
            cellHeight={180}
            cols={this.state.cols}
            padding={this.state.padding}>
            {tilesData.map((tile) => (
              <GridTile
                key={tile.title}
                title={tile.title}>
                <img src={tile.image}/>
              </GridTile>
            ))}
          </GridList>
        </div>
      </div>
    );
  }
}
