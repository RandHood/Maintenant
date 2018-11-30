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
        display: undefined,
        time: undefined,
      };
      this.displayWeather = this.displayWeather.bind(this);
      this.displayNews = this.displayNews.bind(this);
    }

    componentDidMount() {
      this.setState({
        city: 'Cairo',
        country: 'EG',
        units: 'metric',
        component: <Weather city={'Cairo'} country={'EG'} units={'metric'} />,
        display: 'weather',
      });
      setInterval(() => this.setState({ time: Date.now()}), 10000);
    }

    displayWeather() {
      this.setState({
        component: <Weather city={this.state.city} country={this.state.country} units={this.state.units} />,
        display: 'weather',
      });
    }

    displayNews() {
      this.setState({
        component: <h1>news</h1>,
        display: 'news',
      });
    }

    render() {
      const hours = new Date().getHours();
      let mins = new Date().getMinutes();
      mins = mins <= 9 ? '0' + mins : mins;
      
      let welcomeText;
      if (hours >= 4 && hours <= 11)
        welcomeText = 'Good Morning';
      else if (hours >= 12 && hours <= 17)
        welcomeText = 'Good Afternoon';
      else
        welcomeText = 'Good Evening';

      let weatherButtonClass, newsButtonClass;
      if (this.state.display === 'weather') {
        weatherButtonClass = 'tabClicked';
        newsButtonClass = 'tab';
      } else {
        weatherButtonClass = 'tab';
        newsButtonClass = 'tabClicked';
      }

      // The whole page is in a css class .unselected; which doesn't allow selecting any text.
      return (
        <div className="unselectable" id="background">
          <div id="top">
            <div id="location">
              <span id="city">{this.state.city}</span>
              <span id="country"> | {this.state.country}</span>
            </div>
            <div id="welcome">
              <h1 id="welcomeText">{welcomeText}</h1>
              <h1 id="welcomeTime">{hours}:{mins}</h1>
            </div>
          </div>
          <div id ="tabs">
            <button className={weatherButtonClass} id="weatherTab" onClick={this.displayWeather}>Weather</button>
            <button className={newsButtonClass} id="newsTab" onClick={this.displayNews}>News</button>
          </div>
          <div id="bottom">
              {this.state.component}
          </div>
        </div>
      );
    }
  }
  
  export default Homepage;