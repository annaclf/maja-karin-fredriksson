import React, {Component} from 'react';
import ImageGallery from 'react-image-gallery';
const images =
[{
  original: 'http://majakarinfredriksson.com/img/pressbilder/majakarinfredriksson.jpg',
  thumbnail: 'http://majakarinfredriksson.com/img/pressbilder/majakarinfredriksson-small.jpg',
},
{
  original: "http://majakarinfredriksson.com/img/pressbilder/majakarinfredriksson-p1.jpg",
  thumbnail: "http://majakarinfredriksson.com/img/pressbilder/majakarinfredriksson-p1-small.jpg",
},
{
  original: "http://majakarinfredriksson.com/img/pressbilder/majakarinfredriksson-press1.jpg",
  thumbnail: "http://majakarinfredriksson.com/img/pressbilder/majakarinfredriksson-press1.jpg",
},
{
  original: "http://majakarinfredriksson.com/img/pressbilder/majakarinfredriksson-press2.jpg",
  thumbnail: "http://majakarinfredriksson.com/img/pressbilder/majakarinfredriksson-press2.jpg",
}];

class Press extends Component {
  render() {

  return (
    <div className="container push-down">
      <h2 className="block-subtitle">PressBilder</h2>
      <ImageGallery items={images} showPlayButton={false} />
    </div>
    )
  }
}

export default Press;
