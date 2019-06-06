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
      pages: ['people/', 'people/?page=2', 'people/?page=3', 'people/?page=4', 'people/?page=5'],
      count: 0
    };
  }

  componentDidMount = (pages) => {
    this.getCharacters(`https://swapi.co/api/${pages || 'people/'}`);
  };

  prevPage = (page) => {
    let newCount = this.state.count !== 0 ? this.state.count - 1 : this.state.count = 0;
    this.setState({
      count: newCount,
    })
    this.componentDidMount(page[this.state.count]);
  }
  
  nextPage = (page) => {
    let newCount = this.state.count + 1
    this.setState({
      count: newCount,
    })
    this.componentDidMount(page[this.state.count]);
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
            onClick={() => this.prevPage(this.state.pages)} 
          >Prev</button>
            <div>
              <img className="header" src={logo} alt="logo"/>
            </div>
          <button 
            className="page-btn"
            onClick={() => this.nextPage(this.state.pages)}
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
