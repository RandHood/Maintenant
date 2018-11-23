import React, { Component } from 'react';

const weatherProvider = 'http://api.openweathermap.org/data/2.5/weather?q=';
const weatherAPIKey = '49f5f1b2aa04f7d7e6436cbe2ed83bfc';
const weatherAPI = '&APPID=' + weatherAPIKey;

class Weather extends Component {
    constructor() {
        super();
        this.state = {
            temperature: undefined,
            description: undefined,
            pressure: undefined,
            humidity: undefined,
            city: undefined,
            country: undefined,
        };
    }

    getWeather = async () => {
        const city = this.props.city === undefined ? 'Cairo' : this.props.units;
        const units = this.props.units === undefined ? 'metric' : this.props.units;
        const weatherURL = weatherProvider + city + weatherAPI + '&units=' + units;

        const APICall = await fetch(weatherURL);
        const response = await APICall.json();
        console.log(response);
    }

    render() {
        this.getWeather();
        return(
            <div>   
                <h1>Hello</h1>
            </div>
        );
    }
}

export default Weather;