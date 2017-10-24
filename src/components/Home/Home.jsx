import React, { Component } from 'react';
import { Drawer, GridList, GridTile, MenuItem, RaisedButton, Subheader } from 'material-ui';

import './Home.css';

export default class Home extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="home">
        <GridList
          className="grid"
          cellHeight={180}
          cols={3}
          padding={32}>
          <Subheader>Click an item to learn more!</Subheader>
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