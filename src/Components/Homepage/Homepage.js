import React, { Component } from 'react';
import Weather from './../Weather/Weather';
import './Homepage.css';

class Homepage extends Component {
    constructor() {
      super();
      this.state = {
        city: undefined,
        country: undefined,
        units: undefined,
      };
    }

    render() {
      const city = this.state.city === undefined ? 'Cairo' : this.state.city;
      const country = this.state.country === undefined ? 'EG' : this.state.country;
      const units = this.state.units === undefined ? 'metric' : this.state.units;
      return (
        <div id="background">
          <div id="top">
            <h1>{country}</h1>
            <h1 id="welcomeText">Good Morning</h1>
          </div>
          <div id="bottom">
              <Weather city={city} country={country} units={units}/>
          </div>
        </div>
      );
    }
  }
  
  export default Homepage;