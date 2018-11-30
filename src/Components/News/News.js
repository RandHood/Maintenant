import React, { Component } from 'react';

const APIKEY = 'dbab9d0db36d494596ddc8885cefd7f4';

class News extends Component {

    constructor() {
        super();
        this.state = {
            articles: undefined,
        };
    }

    componentDidMount(){
        this.setState({
            articles: [],
        });

        this.getNews();
    }

    getNews = async () => {
        const APICall = await fetch('https://newsapi.org/v2/top-headlines?sources=cnn' +
        '&apiKey=' + APIKEY);
        const response = await APICall.json();
        console.log(response.articles);
        this.saveFetchedData(response.articles);
    }

    saveFetchedData(response) {
        const passingArray = [];
        for (let i = 0; i < 10; i++) {
            // const passingArray = this.state.articles;
            passingArray.push({
                title: response[i].title,
                url : response[i].url,
                content: response[i].content,
                publishedAt: response[i].publishedAt,
                image: response[i].urlToImage,
            });
        }
        this.setState({
            articles: passingArray,
        });           
        console.log(this.state.articles[0].title);
        console.log(this.state);
    }
    render() {

        return(
            <h1></h1>
        );
    }
}

export default News;