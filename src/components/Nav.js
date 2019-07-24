import React, { Component } from 'react';
import { SocialIcon } from 'react-social-icons';

class Nav extends Component {
  state = {
    isOpen: false,
  }
  toggleMenu = () => {
    console.log('clicked');
    this.setState({
      isOpen: !this.state.isOpen,
    });
  }

  render() {
    return (
      <nav className="page-nav">
      {/* <ul>
        <li><NavLink to="/" activeClassName="active">Maja-Karin Fredriksson</NavLink></li>
      </ul> */}
      <ul>
        <li><SocialIcon url="https://instagram.com/majakarin_fredriksson" text="Insta" style={{ height: 25, width: 25, }} /></li>
        <li><SocialIcon url="https://www.facebook.com/majakarinfredriksson/" text="f" style={{ height: 25, width: 25 }} /></li>
        <li><SocialIcon url="https://open.spotify.com/album/37Slndxr7ORxVQcXUufkh3" text="Spotify" style={{ height: 25, width: 25 }}/></li>
        <li><SocialIcon url="https://soundcloud.com/majakarin-fredriksson" text="Soundcloud" style={{ height: 25, width: 25 }}/></li>
      </ul>
        {/* <ToggleButton isOpen={this.state.isOpen} toggleMenu={this.toggleMenu}/> */}
        {/* <h2>Música Porc</h2> */}

        {/* <Sidebar /> */}
      </nav>
    );
  }
}

export default Nav;