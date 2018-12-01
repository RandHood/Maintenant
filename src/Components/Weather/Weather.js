import React, { Component } from 'react';
import Config from './../../local.config.json';
import { getDayName, getDaySmallName } from './../Util/DateHelper';
import './Weather.css';

const weatherProvider = Config.weather.provider;
const weatherAPIKey = Config.weather.api_key;
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
    }

    getWeatherIcon(weatherDescription) {
        let icon;
        switch (weatherDescription) {
            case 'Clear': icon = './../../assets/weather-icons/clear.png'; break;
            case 'Clouds': icon = './../../assets/weather-icons/clouds.png'; break;
            case 'Rain': icon = './../../assets/weather-icons/rain.png'; break;
            case 'Snow': icon = './../../assets/weather-icons/snow.png'; break;
            case 'Storm': icon = './../../assets/weather-icons/storm.png'; break;
            default: icon = './../../assets/weather-icons/clear.png'; break;
        }
        return icon;
    }

    saveFetchedData(currentResponse, forecastResponse) {
        const forecast = [];

        // for (let i = 0; i < 40; i++) {
        //     console.log(forecastResponse.list[i].weather[0].main + ', ' + forecastResponse.list[i].weather[0].description);
        // }

        for (let i = 8; i <= 32; i += 8) {
            forecast.push({
                date: new Date(forecastResponse.list[i].dt_txt),
                temperature: Math.floor(forecastResponse.list[i].main.temp),
                description: forecastResponse.list[i].weather[0].main,
                pressure: forecastResponse.list[i].main.pressure,
                humidity: forecastResponse.list[i].main.humidity,
                windSpeed: forecastResponse.list[i].wind.speed,
                icon: this.getWeatherIcon(forecastResponse.list[i].weather[0].main),
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
                icon: this.getWeatherIcon(currentResponse.weather[0].main),
            },
            forecast,
        });

        console.log(this.state);
        // console.log((new Date().getDate()));
        // console.log(getDayName(new Date()));
        // console.log(getMonthName(new Date()));
        // console.log(getDayName(this.state.forecast[0].date));
    }

    render() {
        if (this.state.forecast[3].icon === undefined) {
            return (
                <h1 className="center">...</h1>
            );
        } else {
            const day_1 = this.state.current;
            const day_2 = this.state.forecast[0];
            const day_3 = this.state.forecast[1];
            const day_4 = this.state.forecast[2];
            const day_5 = this.state.forecast[3];

            const todayDate = day_1.date.getDate();
            let todayDateCont ;
            if (todayDate === 1 || todayDate === 21 || todayDate === 31)
                todayDateCont = 'st';
            else if (todayDate === 2 || todayDate === 22)
                todayDateCont = 'nd';
            else if (todayDate === 3)
                todayDateCont = 'rd';
            else
                todayDateCont = 'th';

            console.log(day_3.icon);
            return(
                <div className="container">
                    <div id="day-1-container">
                        <div id="day-1">
                            <div className="center">
                                <div>
                                    <span id="day-1-temp">{ day_1.temperature }
                                        <span className="degree">&deg;</span>
                                    </span>
                                </div>
                                <div>
                                    <span className="date">{ getDayName(day_1.date) + ' ' + day_1.date.getDate() }
                                        <span id="dateCont">{ todayDateCont }</span>
                                    </span>
                                </div>
                            </div>
                            <div className="center" id="day-1-section-2">
                                <div className={day_2.description + 'Today'}></div>
                                <div id="section-2-bottom">
                                    <span>{day_1.windSpeed + ' km/h'}</span>
                                    <span>&nbsp;&nbsp;/&nbsp;&nbsp;</span>
                                    <span>{day_1.humidity + '%'}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="followingDay">
                        <div className="center">
                            <span className="date">{ getDaySmallName(day_2.date) }</span>
                            <div className={day_2.description}></div>
                            <span className="followingDays-temp">{ day_2.temperature }&deg;</span>
                        </div>
                    </div>
                    <div className="followingDay">
                        <div className="center">
                            <span className="date">{ getDaySmallName(day_3.date) }</span>
                            <div className={day_3.description}></div>
                            <span className="followingDays-temp">{ day_3.temperature }&deg;</span>
                        </div>
                    </div>
                    <div className="followingDay">
                        <div className="center">
                            <span className="date">{ getDaySmallName(day_4.date) }</span>
                            <div className={day_4.description}></div>
                            <span className="followingDays-temp">{ day_4.temperature }&deg;</span>
                        </div>
                    </div>
                    <div className="followingDay">
                        <div className="center">
                            <span className="date">{ getDaySmallName(day_5.date) }</span>
                            <div className={day_5.description}></div>
                            <span className="followingDays-temp">{ day_5.temperature }&deg;</span>
                        </div>
                    </div>
                </div>
            );
        }
    }
}

export default Weather;