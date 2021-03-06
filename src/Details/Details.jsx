import React, { Component } from 'react';
import { Chip, FlatButton, IconButton, Paper, Subheader } from 'material-ui';

import './Details.css';

export default class Details extends Component {
  render() {
    return this.props.tile
      ? (
        <Paper
          className="details"
          rounded={false}
        >
          <div className="details-header">
            <div className="details-header__item">
              <IconButton
                iconClassName="material-icons"
                onClick={this.props.close}
              >
                close
              </IconButton>
            </div>
          </div>
          <div className="details-body">
            <div className="details-body__item">
              <h1 className="title">
                {this.props.tile.title}
              </h1>
              <p className="description">
                {this.props.tile.description}
              </p>
              {
                this.props.tile.sections.map(section => {
                  return (
                    <div
                      key={section.name}
                    >
                      <h2 className="section-name">{section.name}</h2>
                      <div className="divider" />
                      <div className="chip-wrapper">
                        {
                          section.items
                          && section.items.map(item => (
                            <div
                              className="chip-wrapper__chip"
                              key={item}
                            >
                              <Chip>
                                {item}
                              </Chip>
                            </div>
                          ))
                        }
                        {
                          section.links
                          && section.links.map(link => (
                            <FlatButton
                              key={link.label}
                              href={link.url}
                              label={link.label}
                              primary={true}
                            />
                          ))
                        }
                      </div>
                    </div>
                  )
                })
              }
            </div>
            <div className="details-body__item">
              <div className="details-body__image-container">
                {
                  this.props.tile.image
                    ? <img src={this.props.tile.image} alt="tile" />
                    : null
                }
              </div>
            </div>
          </div>
        </Paper>
      )
      : (
        <div className="hidden-container">
          <Subheader className="hidden-container__item">Click a tile to learn more.</Subheader>
        </div>
      );
  }
}
