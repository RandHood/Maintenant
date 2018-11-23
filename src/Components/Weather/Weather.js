import React, { Component } from 'react';

const weatherAPI = '49f5f1b2aa04f7d7e6436cbe2ed83bfc';

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
        const APICall = await fetch('http://api.openweathermap.org/data/2.5/weather?q=Cairo&APPID=' + weatherAPI + '&units=metric');
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