import React, { Component } from 'react';
import Weather from './../Weather/Weather';

class Homepage extends Component {
    render() {
      return (
        <div>
            <h1>This is our new Homepage</h1>
            <Weather />
        </div>
      );
    }
  }
  
  export default Homepage;