import React, { Component } from 'react';
import './App.css';
import Header from './Header';
import Article from './Article';
import SideAd from './SideAd';
import BottomAds from './BottomAds';
import Footer from './Footer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />

        <main className="expanded row">
          <Article />

          <SideAd />
          
          <BottomAds />

        </main>

    
        <Footer />
    
      </div>
    );
  }
}

export default App;
