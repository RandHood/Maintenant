import React, { Component } from 'react';
import News from './../News/News';
import './Homepage.css';

class Homepage extends Component {
    render() {
      return (
        <div id="background">
            {/* <h1>This is our new Homepage</h1> */}
            <News />
            
        </div>
      );
    }
  }
  
  export default Homepage;