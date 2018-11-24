import React, { Component } from 'react';
import './Weather.css';

const weatherProvider = 'http://api.openweathermap.org/data/2.5';
const weatherAPIKey = '49f5f1b2aa04f7d7e6436cbe2ed83bfc';
const weatherAPI = '&APPID=' + weatherAPIKey;

let data;
class Weather extends Component {
    constructor() {
        super();
        this.state = {
            city: undefined,
            country: undefined,
            current: {
                temperature: undefined,
                description: undefined,
                pressure: undefined,
                humidity: undefined,
                windSpeed: undefined,
                icon: undefined,
            },
            forecast: [{
                    temperature: undefined,
                    description: undefined,
                    pressure: undefined,
                    humidity: undefined,
                    windSpeed: undefined,
                    icon: undefined,
                }, {
                    temperature: undefined,
                    description: undefined,
                    pressure: undefined,
                    humidity: undefined,
                    windSpeed: undefined,
                    icon: undefined,
                }, {
                    temperature: undefined,
                    description: undefined,
                    pressure: undefined,
                    humidity: undefined,
                    windSpeed: undefined,
                    icon: undefined,
                }, {
                    temperature: undefined,
                    description: undefined,
                    pressure: undefined,
                    humidity: undefined,
                    windSpeed: undefined,
                    icon: undefined,
                }],
        };
        this.saveFetchedData = this.saveFetchedData.bind(this);
    }

    componentDidMount() {
        this.getWeather();
    }

    getWeather = async () => {
        const city = this.props.city === undefined ? 'Cairo' : this.props.units;
        const units = this.props.units === undefined ? 'metric' : this.props.units;
        
        const currentWeatherURL = weatherProvider + '/weather?q=' + city + weatherAPI + '&units=' + units;
        const forecastURL = weatherProvider + '/forecast?q=' + city + weatherAPI + '&units=' + units;

        const currentAPICall = await fetch(currentWeatherURL);
        const forecastAPICall = await fetch(forecastURL);
        
        const currentResponse = await currentAPICall.json();
        const forecastResponse = await forecastAPICall.json();

        this.saveFetchedData(currentResponse, forecastResponse);

        // console.log(currentResponse);
        // console.log(forecastResponse);
    }

    saveFetchedData(currentResponse, forecastResponse) {
        this.setState({
            city: currentResponse.name,
            country: currentResponse.sys.country,
            current: {
                temperature: Math.floor(currentResponse.main.temp),
                description: currentResponse.weather[0].main,
                pressure: currentResponse.main.pressure,
                humidity: currentResponse.main.humidity,
                windSpeed: currentResponse.wind.speed,
                icon: currentResponse.weather[0].icon,
            },
            forecast: [{
                temperature: Math.floor(forecastResponse.list[10].main.temp),
                description: forecastResponse.list[10].weather[0].main,
                pressure: forecastResponse.list[10].main.pressure,
                humidity: forecastResponse.list[10].main.humidity,
                windSpeed: forecastResponse.list[10].wind.speed,
                icon: forecastResponse.list[10].weather[0].icon,
            }, {
                temperature: Math.floor(forecastResponse.list[18].main.temp),
                description: forecastResponse.list[18].weather[0].main,
                pressure: forecastResponse.list[18].main.pressure,
                humidity: forecastResponse.list[18].main.humidity,
                windSpeed: forecastResponse.list[18].wind.speed,
                icon: forecastResponse.list[18].weather[0].icon,
            }, {
                temperature: Math.floor(forecastResponse.list[26].main.temp),
                description: forecastResponse.list[26].weather[0].main,
                pressure: forecastResponse.list[26].main.pressure,
                humidity: forecastResponse.list[26].main.humidity,
                windSpeed: forecastResponse.list[26].wind.speed,
                icon: forecastResponse.list[26].weather[0].icon,
            }, {
                temperature: Math.floor(forecastResponse.list[34].main.temp),
                description: forecastResponse.list[34].weather[0].main,
                pressure: forecastResponse.list[34].main.pressure,
                humidity: forecastResponse.list[34].main.humidity,
                windSpeed: forecastResponse.list[34].wind.speed,
                icon: forecastResponse.list[34].weather[0].icon,
            }],
        });
        console.log(this.state);
    }

    render() {
        return(
            <div id="opacity">   
                <h1>{ this.state.current.temperature }</h1>
            </div>
        );
    }
}

export default Weather;