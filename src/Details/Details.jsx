import React, { Component } from 'react';
import { IconButton, Paper } from 'material-ui';

import './Details.css';

export default class Details extends Component {
  render() {
    return this.props.tile
      ? (
        <Paper
          className="details"
          rounded={false}>
          <div className="details-header">
            <div className="details-header__item">
              <IconButton
                iconClassName="material-icons"
                onClick={this.props.close}>
                close
              </IconButton>
            </div>
          </div>
          <div className="details-body">
            <div className="details-body__item">
              <h1>
                {this.props.tile.title}
              </h1>
              <p>
                {this.props.tile.description}
              </p>
            </div>
            <div className="details-body__item">
              <div className="details-body__image-container">
                <img src={this.props.tile.image}
                     alt="tile"/>
              </div>
            </div>
          </div>
        </Paper>
      )
      : null;
  }
}
