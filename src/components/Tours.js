import React, { Component } from 'react';
import tourService from '../lib/tourservice';
import moment from 'moment';
import Tour from './Tour';

class Tours extends Component {
  state = {
    comingTours: [],
    previousTours: [],
  }
  componentDidMount() {
    tourService.getTour()
    .then(({data}) => {
      this.setState({
        comingTours: data,
      })
    })
    .catch(err => {
      console.log(err);
    });
  }
  comingDates(tour){
    const dateLimit = moment(tour.date);
    const now = moment();
    return dateLimit.isValid() && dateLimit.isAfter(now)
  }
  previousDates(tour){
    const dateLimit = moment(tour.date);
    const now = moment().format("YY-MM-DD");
    return dateLimit.isValid() && dateLimit.isBefore(now)
  }

  render() {
    const {comingTours} = this.state;
    return (
      comingTours.length ?
      <div className="container">
        <div className="tour">
          {comingTours.map((tour, index) => {
            return <Tour key={`tourId${index}`} details={tour}/>
          })}
        </div>
      </div>
      :
      <div style={{paddingTop:'70px'}}></div>
    );
  }
}

export default Tours;