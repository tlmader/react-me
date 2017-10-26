import React, { Component } from 'react';
import { Card, CardHeader } from 'material-ui';

export default class Details extends Component {
  render() {
    return this.props.show
      ? (
        <Card className="card">
          <CardHeader
            title="Without Avatar"
            subtitle="Subtitle"
            actAsExpander={false}
            showExpandableButton={true}
          />
        </Card>
      )
      : null;
  }
}
