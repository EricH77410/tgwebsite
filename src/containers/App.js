import React, { Component } from 'react';

// Components
import Header from '../components/Layout/Header/Header';
import Synthese from '../components/Section/Synthese';
import Features from './Features/Features'
import Contract from './Contract/Contract';
import Services from './Services/Services'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Synthese />
        <Features />
        <Contract />
        <Services />
      </div>
    );
  }
}

export default App;
