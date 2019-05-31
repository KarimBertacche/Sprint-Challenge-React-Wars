import React, { Component } from 'react';
import './App.css';
import logo from './STARWARS.png';
import uuid from "uuid";

class App extends Component {
  constructor() {
    super();
    this.state = {
      starwarsChars: []
    };
  }

  componentDidMount() {
    this.getCharacters('https://swapi.co/api/people/');
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
      })
      .catch(err => {
        throw new Error(err);
      });
  };

  render() {
    return (
      <div className="App">
      <div>
        <img className="header" src={logo} alt="logo"/>
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

function CharactersList(props) {
  return(
    <div className="char-list">
      { 
        props.dataList.map((dataItem, idx) => {
          return <Character key={uuid()} data={dataItem}/>
        })    
      }
      
    </div>
  );
}

function Character(props) {
  return(
    <div className="character-card">

    </div>
  );
}

export default App;
