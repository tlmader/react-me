import React, { Component } from 'react';
import { GridList, GridTile, IconButton, Subheader } from 'material-ui';

import './Home.css';
import tilesData from '../data';
import Details from '../Details/Details';

export default class Home extends Component {

  constructor() {
    super();
    this.state = {
      cols: 3,
      padding: 32,
      selectedTile: tilesData[0]
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
          close={this.closeDetails}
          tile={this.state.selectedTile}/>
        <div className="grid">
          <GridList
            cellHeight={180}
            cols={this.state.cols}
            padding={this.state.padding}>
            {tilesData.map((tile) => (
              <GridTile
                key={tile.title}
                title={tile.title}
                titleBackground="linear-gradient(to top, rgba(0,0,0,0.7) 0%,rgba(0,0,0,0.3) 70%,rgba(0,0,0,0) 100%)">
                <img src={tile.image}
                     alt="tile"
                     onClick={() => this.selectTile(tile)}/>
              </GridTile>
            ))}
          </GridList>
        </div>
      </div>
    );
  }
}
