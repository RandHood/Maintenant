import React, { Component } from 'react';
import Weather from './../Weather/Weather';
import './Homepage.css';

class Homepage extends Component {
    render() {
      return (
        <div id="background">
            {/* <h1>This is our new Homepage</h1> */}
            <Weather />
        </div>
      );
    }
  }
  
  export default Homepage;