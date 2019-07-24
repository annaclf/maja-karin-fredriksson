import React, { Component } from 'react';
import moment from 'moment';
import 'moment/locale/es'
moment.locale('es');

class Tour extends Component {
  renderTitle = (title) => {
    return (
      <div className="tour-grid title" style={
        {
          width: '100%',
          gridTemplateColumns: '1fr',
        }
      }>
        <h2 className="block-subtitle">
          {title}
        </h2>
      </div>
    )
  }
  render() {
    const { details } = this.props;
    return (
      <React.Fragment>
      {details.title ? this.renderTitle(details.title) : null}
      <div className="tour-grid">
        <p>
          {moment(details.date).format("DD MMMM")}
        </p>
        <p className="place">{details.place} <span>{details.city}</span></p>
        <p>{details.link_url && <a href={details.link_url}>RSVP</a>}</p>
      </div>
      </React.Fragment>
    );
  }
}

export default Tour;