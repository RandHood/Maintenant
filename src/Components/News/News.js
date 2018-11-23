import React, { Component } from 'react';

const APIKEY = 'dbab9d0db36d494596ddc8885cefd7f4';

class News extends Component {

    constructor() {
        super();
        this.state = {
            data: null
        };
    }

    getNews = async () => {
        const APICall = await fetch('https://newsapi.org/v2/top-headlines?' +
        'country=us&' +
        'apiKey=' + APIKEY);
        const response = await APICall.json();
        console.log(response);
    }

    render() {
        this.getNews();
        return(
            <h1>hi</h1>
        );
    }
}

export default News;