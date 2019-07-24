import React, { Component } from 'react';

class ToggleButton extends Component {
  render() {
    let toggleClass = "bar-wrapper";
    if (this.props.isOpen) {
      toggleClass = "bar-wrapper isOpen";
    }
    return (
      <button className="navbar-toggler">
          <div className={toggleClass} onClick={this.props.toggleMenu}>
            <span className="top"></span>
            <span className="middle"></span>
            <span className="bottom"></span>
          </div>
        </button>
    );
  }
}

export default ToggleButton;