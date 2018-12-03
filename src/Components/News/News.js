import React, { Component } from 'react';
import Config from './../../local.config.json';
import './News.css';

const APIKEY = Config.news.api_key;
const provider = Config.news.provider;
let articleIndex = 0;

class News extends Component {
    constructor() {
        super();
        this.state = {
            rerender: undefined,
            articlesCount: undefined,
            articles: [{
                    title: undefined,
                    url : undefined,
                    description: undefined,
                    publishedAt: undefined,
                    image: undefined,
                    hour: undefined,
                    minutes: undefined,
                }, {
                    title: undefined,
                    url : undefined,
                    description: undefined,
                    publishedAt: undefined,
                    image: undefined,
                    hour: undefined,
                    minutes: undefined,
                }, {
                    title: undefined,
                    url : undefined,
                    description: undefined,
                    publishedAt: undefined,
                    image: undefined,
                    hour: undefined,
                    minutes: undefined,
                }, {
                    title: undefined,
                    url : undefined,
                    description: undefined,
                    publishedAt: undefined,
                    image: undefined,
                    hour: undefined,
                    minutes: undefined,
                }, {
                    title: undefined,
                    url : undefined,
                    description: undefined,
                    publishedAt: undefined,
                    image: undefined,
                    hour: undefined,
                    minutes: undefined,
                }, {
                    title: undefined,
                    url : undefined,
                    description: undefined,
                    publishedAt: undefined,
                    image: undefined,
                    hour: undefined,
                    minutes: undefined,
                }, {
                    title: undefined,
                    url : undefined,
                    description: undefined,
                    publishedAt: undefined,
                    image: undefined,
                    hour: undefined,
                    minutes: undefined,
                }, {
                    title: undefined,
                    url : undefined,
                    description: undefined,
                    publishedAt: undefined,
                    image: undefined,
                    hour: undefined,
                    minutes: undefined,
                }, {
                    title: undefined,
                    url : undefined,
                    description: undefined,
                    publishedAt: undefined,
                    image: undefined,
                    hour: undefined,
                    minutes: undefined,
                }, {
                    title: undefined,
                    url : undefined,
                    description: undefined,
                    publishedAt: undefined,
                    image: undefined,
                    hour: undefined,
                    minutes: undefined,
            }],
        };
        this.saveFetchedData = this.saveFetchedData.bind(this);
        this.changeArticle = this.changeArticle.bind(this);
    }

    componentDidMount(){
        this.getNews();
    }

    getNews = async () => {
        const APICall = await fetch(provider + '&apiKey=' + APIKEY);
        const response = await APICall.json();
        this.saveFetchedData(response.articles);
    }

    saveFetchedData(articles) {
        const passingArray = [];
        let articleLength = 0;
        for (let i = 0; i < 10; i++) {
            let hours = new Date(articles[i].publishedAt).getHours();
            if(hours < 10) {
                hours = '0' + hours;
            }

            let minutes = new Date(articles[i].publishedAt).getMinutes();
            if(minutes < 10) {
                minutes = '0' + minutes;
            }

            passingArray.push({
                title: articles[i].title,
                url : articles[i].url,
                description: articles[i].description,
                publishedAt: articles[i].publishedAt,
                image: articles[i].urlToImage,
                hour: hours,
                minutes: minutes,
            });
            articleLength++;
        }
        this.setState({
            articles: passingArray,
            articlesCount: articleLength
        });
    }

    changeArticle() {
        if(articleIndex < this.state.articlesCount - 1)
            articleIndex++;
        else if(articleIndex === this.state.articlesCount - 1) 
            articleIndex = 0;

        this.setState({rerender: 0});
    }

    render() {
        if (this.state.articles[0].title === undefined) {
            return (
                <h1 className="center">...</h1>
            );
        } else {
            return(
                <div className = "article">
                    <figure className = "image-shape">
                    <img src = {this.state.articles[articleIndex].image} className = "image" alt="" />
                    </figure>
                    <div className = "news-text">
                        <h3 className= "heading-tertiary">
                            {this.state.articles[articleIndex].title}
                        </h3>
                        <span className = "time"> {this.state.articles[articleIndex].hour} : {this.state.articles[articleIndex].minutes}</span>
                        <p className = "news-description">
                            {this.state.articles[articleIndex].description}
                        </p>
                        <div className = "buttons">
                            <a class="btn" href={this.state.articles[articleIndex].url} target ="_blank">Read More!</a>
                            <button class="btn button" onClick={this.changeArticle}>Next</button>
                        </div>
                    </div>
                </div>
            );
        }
    }
}

export default News;