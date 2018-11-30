import React, { Component } from 'react';
import './News.css';

const APIKEY = 'dbab9d0db36d494596ddc8885cefd7f4';
let articleIndex = 0;

class News extends Component {

    constructor() {
        super();
        this.state = {
            rerender: undefined,
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
        this.changeArticle = this.changeArticle.bind(this);
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
        // console.log(this.state.articles[0].title);
        // console.log(this.state);
    }

    changeArticle() {
        if(articleIndex < 9)
            articleIndex++;
        else if(articleIndex == 9) 
            articleIndex = 0;

        this.setState({rerender: 0});
        console.log(articleIndex);
    }
    render() {
        return(
            <body>
                <figure className = "image-shape">
                <img src = {this.state.articles[articleIndex].image} className = "image"></img>
                </figure>
                <div className = "news-text">
                    <h3 className= "heading-tertiary">
                        {this.state.articles[articleIndex].title}
                    </h3>
                    <p>
                        {this.state.articles[articleIndex].description}
                    </p>
                    <a href={this.state.articles[articleIndex].url} target ="_blank" class="btn btn-white">Read More!</a>
                    <a target ="_blank" class="btn btn-white" onClick={this.changeArticle}> Next</a>
                </div>
            </body>
        );
    }
}

export default News;