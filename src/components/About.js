import React, {Component} from 'react';

class About extends Component {
  state = {
    isOpen: false,
  }
  handleClick = () => {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  }

  render() {
    const {isOpen} = this.state;
    return (
      <div className="container push-down about">
      <h2 className="block-title">Maja-Karin Fredriksson</h2>
      <h3 className="block-subtitle">- stark, stämningsfull & melankolisk pop som går rakt in i hjärtat.</h3>

      <p>Maja-Karin Fredriksson har tonsatt poeten Ebba Lindqvists dikter.
      2018 släppte hon EP:n “Jag Begär Bara Havet”.
      Den 25 september 2019 släpper hon albumet “Maja-Karin sjunger Ebba Lindqvist
      - Live i Studio Epidemin”.
      Skivan är inspelad som en live-session i Studio Epidemin i
      Göteborg där hennes pop-poetiska tolkningar av Ebba Lindqvist
      dikter presenteras i sin lekfullaste form. {!isOpen && <span className="read-more" onClick={this.handleClick}>Läs mer</span>}
</p>

      {isOpen &&  ( <div className="read-more__text">
      <p>Maja-Karins musik är suggestiv och samtidigt oförställt rak när den bär fram
      Ebba Lindqvists mer än halvsekelgamla texter.
      Den vittnar om en återhållen passion, något som lurar under ytan.
      Trots och melankoli färgar stämningen när havet och kastvindarna blir
      förlösande naturkrafter att svepas med i. Pop-poesi när den är som bäst. </p>
    </div> ) }
  </div>
    );
  }
}

export default About;

