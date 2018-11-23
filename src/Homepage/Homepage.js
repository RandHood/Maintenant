import React, { Component } from 'react';
import News from './../News/News';

class Homepage extends Component {
    render() {
      return (
        <div>
            <h1>This is our new Homepage</h1>
            <News />
        </div>
      );
    }
  }
  
  export default Homepage;