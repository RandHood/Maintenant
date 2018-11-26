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
        component: undefined,
      };
      this.displayWeather = this.displayWeather.bind(this);
    }

    componentDidMount() {
      this.setState({
        city: 'Cairo',
        country: 'EG',
        units: 'metric',
        component: <Weather city={'Cairo'} country={'EG'} units={'metric'} />,
      });
    }

    displayWeather() {
      this.setState({
        component: <Weather city={this.state.city} country={this.state.country} units={this.state.units} />
      });
    }

    displayNews() {

    }

    render() {
      return (
        <div id="background">
          <div id="top">
            <h1>{this.state.country}</h1>
            <h1 id="welcomeText">Good Morning</h1>
          </div>
          <div>
            <button onClick={this.displayWeather}>Weather</button>
            <button onClick={this.displayNews}>News</button>
          </div>
          <div id="bottom">
              {this.state.component}
          </div>
        </div>
      );
    }
  }
  
  export default Homepage;