import React, { Component } from 'react';
import moment from 'moment';
import 'moment/locale/es'
moment.locale('es');

class Tour extends Component {
  render() {
    const { details } = this.props;
    console.log(details)
    return (
      <div className="tour-grid">
        <p>
          {details.date}
        </p>
        <p>{details.place}</p>
      </div>
    );
  }
}

export default Tour;