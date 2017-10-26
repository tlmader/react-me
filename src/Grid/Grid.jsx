import React, { Component } from 'react';
import { Avatar, GridList, GridTile } from 'material-ui';

import './Grid.css';
import tilesData from '../data';

export default class Grid extends Component {

  constructor() {
    super();
    this.state = {
      cols: 3,
      padding: 32,
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
      <div className="grid">
        <GridList
          cellHeight={180}
          cols={this.state.cols}
          padding={this.state.padding}>
          {tilesData.map((tile) => (
            <GridTile
              className="tile"
              key={tile.title}
              title={tile.title}
              titleBackground="linear-gradient(to top, rgba(0,0,0,0.7) 0%,rgba(0,0,0,0.3) 70%,rgba(0,0,0,0) 100%)">
              <img src={tile.image}
                   alt="tile"
                   onClick={() => this.props.selectTile(tile)}/>
            </GridTile>
          ))}
        </GridList>
      </div>
    );
  }
}
