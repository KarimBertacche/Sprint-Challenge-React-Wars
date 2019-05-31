import React, { Component } from 'react';
import './App.css';
import CharactersList from './components/CharactersList';
import logo from './STARWARS.png';

const pages = ['people/', 'people/?page=2', ]

class App extends Component {
  constructor() {
    super();
    this.state = {
      starwarsChars: [],
      pages: ['people/']
    };
  }

  componentDidMount = (pages) => {
    this.getCharacters(`https://swapi.co/api/${pages || 'people/'}`);
  };
  
  nextPage = (page) => {
    this.componentDidMount(page);
  }

  getCharacters = URL => {
    // feel free to research what this code is doing.
    // At a high level we are calling an API to fetch some starwars data from the open web.
    // We then take that data and resolve it our state.
    fetch(URL)
      .then(res => {
        return res.json();
      })
      .then(data => {
        this.setState({ starwarsChars: data.results });
        console.log(data);
      })
      .catch(err => {
        throw new Error(err);
      });  
  };
  
  render() {
    return (
      <div className="App">
        <div className="logo-wrapper">
          <button 
            className="page-btn"
            onClick={() => this.nextPage('people/')} 
          >Prev</button>
            <div>
              <img className="header" src={logo} alt="logo"/>
            </div>
          <button 
            className="page-btn"
            onClick={() => this.nextPage('people/?page=2')}
          >Next</button>
        </div>
      <div className="card-container">
        <CharactersList 
          dataList={this.state.starwarsChars}
        />
      </div>
    </div>
    );
  }
}

export default App;
