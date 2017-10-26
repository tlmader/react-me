import React, { Component } from 'react';
import { IconButton, Paper } from 'material-ui';

import './Details.css';

export default class Details extends Component {
  render() {
    return this.props.show
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
          <h1>
            Test
          </h1>
        </Paper>
      )
      : null;
  }
}
