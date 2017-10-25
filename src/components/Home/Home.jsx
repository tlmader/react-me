import React, { Component } from 'react';
import { Card, CardActions, CardHeader, CardText, Divider, FlatButton, GridList, GridTile, MenuItem, Subheader } from 'material-ui';

import './Home.css';

export default class Home extends Component {

  constructor() {
    super();
    this.state = {
      cols: 3,
      padding: 32
    }
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
        <GridList
          className="grid"
          cellHeight={180}
          cols={this.state.cols}
          padding={this.state.padding}>
          {tilesData.map((tile) => (
            <GridTile
              key={tile.img}
              title={tile.title}>
              <img src={tile.img}/>
            </GridTile>
          ))}
        </GridList>
      </div>
    );
  }
}

const tilesData = [
  {
    img: 'images/honest-abe.png',
    title: 'Honest Abe'
  },
  {
    img: 'images/use-of-force.png',
    title: 'Use of Force Simulation',
    author: 'pashminu'
  },
  {
    img: 'images/theodoric.jpg',
    title: 'Theodoric',
    author: 'Danson67',
  },
  {
    img: 'images/grid-list/morning-819362_640.jpg',
    title: 'Morning',
    author: 'fancycrave1',
  },
  {
    img: 'images/grid-list/hats-829509_640.jpg',
    title: 'Hats',
    author: 'Hans',
  },
  {
    img: 'images/grid-list/honey-823614_640.jpg',
    title: 'Honey',
    author: 'fancycravel',
  },
  {
    img: 'images/grid-list/vegetables-790022_640.jpg',
    title: 'Vegetables',
    author: 'jill111',
  },
  {
    img: 'images/grid-list/water-plant-821293_640.jpg',
    title: 'Water plant',
    author: 'BkrmadtyaKarki',
  },
];