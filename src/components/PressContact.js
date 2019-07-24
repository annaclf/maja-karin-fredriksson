import React, { Component } from 'react';

class PressContact extends Component {
  render() {
    return (
            <div className="container push-down ">

      <h2 className="block-subtitle">Presskontakt:</h2>
      <p>Anette Ståhl  <br/>
        tel: <a href="tel:+46707180120">0707180120</a>
        </p>
        <ul>
          <li>
            <a href="mailto:anette@enmusamusic.com">anette@enmusamusic.com</a>
          </li>
          <li>
            <a href="www.enmusamusic.com">www.enmusamusic.com</a>
          </li>
        </ul>
      </div>
    );
  }
}

export default PressContact;