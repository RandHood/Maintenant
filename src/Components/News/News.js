import React, { Component } from 'react';

const APIKEY = 'dbab9d0db36d494596ddc8885cefd7f4';

class News extends Component {

    constructor() {
        super();
        this.state = {
            articles: [{
                    title: undefined,
                    url : undefined,
                    content: undefined,
                    publishedAt: undefined,
                    image: undefined,
                }, {
                    title: undefined,
                    url : undefined,
                    content: undefined,
                    publishedAt: undefined,
                    image: undefined,
                }, {
                    title: undefined,
                    url : undefined,
                    content: undefined,
                    publishedAt: undefined,
                    image: undefined,
                }, {
                    title: undefined,
                    url : undefined,
                    content: undefined,
                    publishedAt: undefined,
                    image: undefined,
                }, {
                    title: undefined,
                    url : undefined,
                    content: undefined,
                    publishedAt: undefined,
                    image: undefined,
                }, {
                    title: undefined,
                    url : undefined,
                    content: undefined,
                    publishedAt: undefined,
                    image: undefined,
                }, {
                    title: undefined,
                    url : undefined,
                    content: undefined,
                    publishedAt: undefined,
                    image: undefined,
                }, {
                    title: undefined,
                    url : undefined,
                    content: undefined,
                    publishedAt: undefined,
                    image: undefined,
                }, {
                    title: undefined,
                    url : undefined,
                    content: undefined,
                    publishedAt: undefined,
                    image: undefined,
                }, {
                    title: undefined,
                    url : undefined,
                    content: undefined,
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
        // console.log(response.articles);
        this.saveFetchedData(response.articles);
    }

    saveFetchedData(articles) {
        const passingArray = [];
        for (let i = 0; i < 10; i++) {
            // const passingArray = this.state.articles;
            passingArray.push({
                title: articles[i].title,
                url : articles[i].url,
                content: articles[i].content,
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
        const tmp = this.state.articles[0].title;

        return(
            <h1>{tmp}</h1>
        );
    }
}

export default News;