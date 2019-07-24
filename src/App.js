import React, { Component } from 'react';
import './scss/custom.scss';
import Music from './components/Music';
import Tours from './components/Tours';
import About from './components/About';
import Press from './components/Press';
import Footer from './components/Footer';
import Nav from './components/Nav'
import PressContact from './components/PressContact'

class App extends Component {
  render() {
    return (
      <div className="App">
        <main id="top">
          <header>
            <h1>Maja-Karin <span>Fredriksson</span></h1>
          </header>
          <Nav />
          <About />
          <Tours />
          <Music />
          <Press />
          <PressContact/>
          <Footer />
          <span className="to-top" onClick={ () => window.scrollTo(0, 0)}>Top</span>
      </main>
      </div>
    );
  }
}

export default App;
