import React, { Component } from 'react';
import { getDayName, getMonthName } from './../Util/DateHelper';
import './Weather.css';

const weatherProvider = 'http://api.openweathermap.org/data/2.5';
const weatherAPIKey = '49f5f1b2aa04f7d7e6436cbe2ed83bfc';
const weatherAPI = '&APPID=' + weatherAPIKey;

class Weather extends Component {
    constructor() {
        super();
        this.state = {
            city: undefined,
            country: undefined,
            current: {
                date: undefined,
                temperature: undefined,
                description: undefined,
                pressure: undefined,
                humidity: undefined,
                windSpeed: undefined,
                icon: undefined,
            },
            forecast: [{
                    date: undefined,
                    temperature: undefined,
                    description: undefined,
                    pressure: undefined,
                    humidity: undefined,
                    windSpeed: undefined,
                    icon: undefined,
                }, {
                    date: undefined,
                    temperature: undefined,
                    description: undefined,
                    pressure: undefined,
                    humidity: undefined,
                    windSpeed: undefined,
                    icon: undefined,
                }, {
                    date: undefined,
                    temperature: undefined,
                    description: undefined,
                    pressure: undefined,
                    humidity: undefined,
                    windSpeed: undefined,
                    icon: undefined,
                }, {
                    date: undefined,
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
        
        const currentWeatherURL = weatherProvider + '/weather?q=' + this.props.city + ',' + this.props.country + weatherAPI + '&units=' + this.props.units;
        const forecastURL = weatherProvider + '/forecast?q=' + this.props.city + weatherAPI + '&units=' + this.props.units;

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
            current: {
                date: new Date(),
                temperature: Math.floor(currentResponse.main.temp),
                description: currentResponse.weather[0].main,
                pressure: currentResponse.main.pressure,
                humidity: currentResponse.main.humidity,
                windSpeed: currentResponse.wind.speed,
                icon: currentResponse.weather[0].icon,
            },
            forecast: [{
                date: new Date(forecastResponse.list[8].dt_txt),
                temperature: Math.floor(forecastResponse.list[8].main.temp),
                description: forecastResponse.list[8].weather[0].main,
                pressure: forecastResponse.list[8].main.pressure,
                humidity: forecastResponse.list[8].main.humidity,
                windSpeed: forecastResponse.list[8].wind.speed,
                icon: forecastResponse.list[8].weather[0].icon,
            }, {
                date: new Date(forecastResponse.list[16].dt_txt),
                temperature: Math.floor(forecastResponse.list[16].main.temp),
                description: forecastResponse.list[16].weather[0].main,
                pressure: forecastResponse.list[16].main.pressure,
                humidity: forecastResponse.list[16].main.humidity,
                windSpeed: forecastResponse.list[16].wind.speed,
                icon: forecastResponse.list[16].weather[0].icon,
            }, {
                date: new Date(forecastResponse.list[24].dt_txt),
                temperature: Math.floor(forecastResponse.list[24].main.temp),
                description: forecastResponse.list[24].weather[0].main,
                pressure: forecastResponse.list[24].main.pressure,
                humidity: forecastResponse.list[24].main.humidity,
                windSpeed: forecastResponse.list[24].wind.speed,
                icon: forecastResponse.list[24].weather[0].icon,
            }, {
                date: new Date(forecastResponse.list[32].dt_txt),
                temperature: Math.floor(forecastResponse.list[32].main.temp),
                description: forecastResponse.list[32].weather[0].main,
                pressure: forecastResponse.list[32].main.pressure,
                humidity: forecastResponse.list[32].main.humidity,
                windSpeed: forecastResponse.list[32].wind.speed,
                icon: forecastResponse.list[32].weather[0].icon,
            }],
        });

        console.log(this.state);
        // console.log((new Date().getDate()));
        console.log(getDayName(new Date()));
        console.log(getMonthName(new Date()));
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