import React, { Component } from 'react';
import MailLink from './MailLink';

class Contact extends Component {
  render() {
    return (
      <ul>
        <li><MailLink url="majakarinfredriksson@gmail.com"/></li>
        {/* <li><p>Maja-Karin Fredriksson 2019</p></li> */}
      </ul>
    );
  }
}

export default Contact;