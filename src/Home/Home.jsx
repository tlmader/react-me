import React, { Component } from 'react';
import { Card, CardHeader, FontIcon, GridList, GridTile, IconButton, Paper } from 'material-ui';

import './Home.css';
import tilesData from '../data';
import Details from '../Details/Details';

export default class Home extends Component {

  constructor() {
    super();
    this.state = {
      showDetails: false,
      cols: 3,
      padding: 32
    };
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
        padding: 16
      });
    } else {
      this.setState({
        cols: 3,
        padding: 32
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
        />
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
