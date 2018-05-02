import React, { Component } from 'react';
import { Card, CardMedia, CardTitle } from 'material-ui';

import './Grid.css';
import tilesData from '../data';

export default class Grid extends Component {

  constructor() {
    super();
  }

  render() {
    return (
      <div className="grid">
        {tilesData.map((tile) => (
          <Card
            className="card"
            key={tile.title}
            onClick={() => this.props.selectTile(tile)}
          >
            <CardMedia
              className="card__media"
              overlay={<CardTitle title={tile.title} />}
            >
              <img src={tile.thumb} alt="tile" />
            </CardMedia>
          </Card>
        ))}
      </div>
    );
  }
}
