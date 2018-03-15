import React from 'react';
import axios from 'axios';

//const API = 'http://niv84.com/bibleapi.php?url=https://bibles.org/v2/verses/eng-GNTD:Acts.8.34.js';
//const APIKEY = '&key=wfZdpay5cJlTlo1kFLqdHB288LLghEZjKk9vcihP';
const API = 'https://bible-api.com/john%203:16';
const APIKEY = '';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      reference: {},
      verse: {},
      isLoading: true,
      error: null
    };
  }

  componentDidMount() {
    const params = {
      headers: {
        "Content-Type": "application/json"
      }
    };
    axios.get(API + APIKEY, params)
      .then((response) => {
        console.log(response);
        console.log(response.data.reference);
        this.setState({
          reference: response.data.reference,
          verse: response.data.text,
          isLoading: false})
      }).catch((error) => {
        console.log('Error calling axios (get): ', error);
      })
  }

  render() {
    return (
      <div>
        { (this.state.isLoading === true) ? (
          <div>Loading...</div>
        ) : (
          <div>
            Reference: {this.state.reference}
            Verse: {this.state.verse}
          </div>
        )}
      </div>
    );
  }
};

export default App;
