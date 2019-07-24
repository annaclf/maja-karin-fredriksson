import React from 'react';
import { SocialIcon } from 'react-social-icons';

const Footer = () => {
    return (
      <div class="container">
        <div class="row">
          <div class="col-2">
            <h3>Kontakt och bokning</h3>
            <p>Maja-Karin Fredriksson</p>
            <p><a href="mailto:majakarin.fredriksson@gmail.com">majakarin.fredriksson@gmail.com</a></p>
            <div class="social">
              <ul>
                <li><SocialIcon url="https://instagram.com/majakarin_fredriksson" text="Insta" style={{ height: 25, width: 25, }} /></li>
                <li><SocialIcon url="https://www.facebook.com/majakarinfredriksson/" text="f" style={{ height: 25, width: 25 }} /></li>
                <li><SocialIcon url="https://open.spotify.com/album/37Slndxr7ORxVQcXUufkh3" text="Spotify" style={{ height: 25, width: 25 }}/></li>
                <li><SocialIcon url="https://soundcloud.com/majakarin-fredriksson" text="Soundcloud" style={{ height: 25, width: 25 }}/></li>
              </ul>
            </div>
          </div>
          <div class="col-2">
            <h3>Label:</h3>
            <p>PACAYA records</p>
            <p><a href="mailto:info@pacayarecords.com">info@pacayarecords.com</a></p>
          </div>
        </div>
      </div>
    );
}

export default Footer;