import React, { Component } from 'react';
import Weather from './../Weather/Weather';
import './Homepage.css';

class Homepage extends Component {
    render() {
      return (
        <div id="background">
          <div id="top">
            <h1 id="welcomeText">Good Morning</h1>
          </div>
          <div id="bottom">
              <Weather />
          </div>
        </div>
      );
    }
  }
  
  export default Homepage;