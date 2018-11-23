import React, { Component } from 'react';
import './Weather.css';

const weatherProvider = 'http://api.openweathermap.org/data/2.5/weather?q=';
const weatherAPIKey = '49f5f1b2aa04f7d7e6436cbe2ed83bfc';
const weatherAPI = '&APPID=' + weatherAPIKey;

let data;
class Weather extends Component {
    constructor() {
        super();
        this.state = {
            city: undefined,
            country: undefined,
            temperature: undefined,
            description: undefined,
            pressure: undefined,
            humidity: undefined,
            windSpeed: undefined,
            icon: undefined,
            response: undefined,
        };
        this.saveFetchedData = this.saveFetchedData.bind(this);
    }

    componentDidMount() {
        this.getWeather();
    }

    getWeather = async () => {
        const city = this.props.city === undefined ? 'Cairo' : this.props.units;
        const units = this.props.units === undefined ? 'metric' : this.props.units;
        const weatherURL = weatherProvider + city + weatherAPI + '&units=' + units;

        const APICall = await fetch(weatherURL);
        const response = await APICall.json();
        console.log(response);
        this.saveFetchedData(response);
    }

    saveFetchedData(response) {
        this.setState({
            temperature: Math.floor(response.main.temp),
            city: response.name,
            country: response.sys.country,
            description: response.weather[0].description,
            pressure: response.main.pressure,
            humidity: response.main.humidity,
            windSpeed: response.wind.speed,
            icon: response.weather[0].icon,
        });
    }

    render() {
        return(
            <div id="opacity">   
                <h1>{ this.state.temperature }</h1>
            </div>
        );
    }
}

export default Weather;