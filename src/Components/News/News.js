import React, { Component } from 'react';
import './News.css';

const APIKEY = 'dbab9d0db36d494596ddc8885cefd7f4';

class News extends Component {

    constructor() {
        super();
        this.state = {
            articles: [{
                    title: undefined,
                    url : undefined,
                    description: undefined,
                    publishedAt: undefined,
                    image: undefined,
                }, {
                    title: undefined,
                    url : undefined,
                    description: undefined,
                    publishedAt: undefined,
                    image: undefined,
                }, {
                    title: undefined,
                    url : undefined,
                    description: undefined,
                    publishedAt: undefined,
                    image: undefined,
                }, {
                    title: undefined,
                    url : undefined,
                    description: undefined,
                    publishedAt: undefined,
                    image: undefined,
                }, {
                    title: undefined,
                    url : undefined,
                    description: undefined,
                    publishedAt: undefined,
                    image: undefined,
                }, {
                    title: undefined,
                    url : undefined,
                    description: undefined,
                    publishedAt: undefined,
                    image: undefined,
                }, {
                    title: undefined,
                    url : undefined,
                    description: undefined,
                    publishedAt: undefined,
                    image: undefined,
                }, {
                    title: undefined,
                    url : undefined,
                    description: undefined,
                    publishedAt: undefined,
                    image: undefined,
                }, {
                    title: undefined,
                    url : undefined,
                    description: undefined,
                    publishedAt: undefined,
                    image: undefined,
                }, {
                    title: undefined,
                    url : undefined,
                    description: undefined,
                    publishedAt: undefined,
                    image: undefined,
                }],
        };
        this.saveFetchedData = this.saveFetchedData.bind(this);
    }

    componentDidMount(){
        this.getNews();
    }

    getNews = async () => {
        const APICall = await fetch('https://newsapi.org/v2/top-headlines?sources=cnn' +
        '&apiKey=' + APIKEY);
        const response = await APICall.json();
        console.log(response.articles);
        this.saveFetchedData(response.articles);
    }

    saveFetchedData(articles) {
        const passingArray = [];
        for (let i = 0; i < 10; i++) {
            // const passingArray = this.state.articles;
            passingArray.push({
                title: articles[i].title,
                url : articles[i].url,
                description: articles[i].description,
                publishedAt: articles[i].publishedAt,
                image: articles[i].urlToImage,
            });
        }
        this.setState({
            articles: passingArray,
        });           
        console.log(this.state.articles[0].title);
        console.log(this.state);
    }
    render() {
       // const tmp = this.state.articles[0].title;

        return(
            <body>
                <div className = "article">   
                        <figure className = "image-shape">
                        <img src = {this.state.articles[2].image} className = "image"></img>
                        </figure>
                        <div className = "news-text">
                            <h3 className= "heading-tertiary">
                                {this.state.articles[2].title}
                            </h3>
                            <p>
                                {this.state.articles[2].description}
                            </p>
                            <a href={this.state.articles[2].url} target ="_blank" class="btn btn-white">Read More!</a>
                        </div>
                </div>
            </body>
        );
    }
}

export default News;