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
        const forecast = [];
        for (let i = 8; i <= 32; i += 8) {
            forecast.push({
                date: new Date(forecastResponse.list[i].dt_txt),
                temperature: Math.floor(forecastResponse.list[i].main.temp),
                description: forecastResponse.list[i].weather[0].main,
                pressure: forecastResponse.list[i].main.pressure,
                humidity: forecastResponse.list[i].main.humidity,
                windSpeed: forecastResponse.list[i].wind.speed,
                icon: forecastResponse.list[i].weather[0].icon,
            });
        }

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
            forecast,
        });

        // console.log(this.state);
        // console.log((new Date().getDate()));
        // console.log(getDayName(new Date()));
        // console.log(getMonthName(new Date()));
        // console.log(getDayName(this.state.forecast[0].date));
    }

    render() {
        if (this.state.forecast[3].icon === undefined) {
            return (
                <h1>loading</h1>
            );
        } else {
            const day_1 = this.state.current;
            const day_2 = this.state.forecast[0];
            const day_3 = this.state.forecast[1];
            const day_4 = this.state.forecast[2];
            const day_5 = this.state.forecast[3];
            return(
                <div className="container">
                    <div id="day-1">
                        <div className="center">
                            <h1>{ day_1.temperature }&deg;</h1>
                            {/* <h1>{ getDayName(day_1.date) }</h1> */}
                        </div>
                    </div>
                    <div className="followingDay">
                        <div className="center">
                            <h1>{ day_2.temperature }&deg;</h1>
                        </div>
                    </div>
                    <div className="followingDay">
                        <div className="center">
                            <h1>{ day_3.temperature }&deg;</h1>
                        </div>
                    </div>
                    <div className="followingDay">
                        <div className="center">
                            <h1>{ day_4.temperature }&deg;</h1>
                        </div>
                    </div>
                    <div className="followingDay">
                        <div className="center">
                            <h1>{ day_5.temperature }&deg;</h1>
                        </div>
                    </div>
                </div>
            );
        }
    }
}

export default Weather;