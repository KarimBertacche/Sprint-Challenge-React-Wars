import React, { Component } from 'react';
import './App.css';
import logo from './STARWARS.png';
import luke from './images/luke-skywalker.jpeg';
import C3PO from './images/C-3PO.webp';
import R2D2 from './images/r2-d2.jpeg';
import dartVader from './images/Darth-Vader.jpeg';
import leiaOrgana from './images/Leia-Organa.jpg';
import owenLars from './images/owenlars.jpeg';
import beruLars from './images/berulars.webp';
import R5D4 from './images/r5-d4.webp';
import biggsDark from './images/BiggsDarklighter.webp';
import obiOne from './images/Obi-Wan-Kenobi.jpeg';
import uuid from "uuid";

const images = [luke, C3PO, R2D2, dartVader, leiaOrgana, owenLars, beruLars, R5D4, biggsDark, obiOne];
// const pages = ['people/', 'people/?page=2', ]

class App extends Component {
  constructor() {
    super();
    this.state = {
      starwarsChars: [],
      pages: ['people/']
    };
  }

  // componentDidMount(pages) {
  //   this.getCharacters(`https://swapi.co/api/`);
  // }

  componentDidMount() {
    this.getCharacters(`https://swapi.co/api/${this.state.pages}`);
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

  // componentDidMount() {
  //   this.getCharacters('https://swapi.co/api/people/?page=2');
  // }

 

  
  render() {
    return (
      <div className="App">
        <div className="logo-wrapper">
          <button className="page-btn">Prev</button>
            <div>
              <img className="header" src={logo} alt="logo"/>
            </div>
          <button 
            className="page-btn"
            // onClick={}
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

function CharactersList(props) {
  return(
    <div className="char-list">
      { 
        props.dataList.map((dataItem, idx) => {
          return <Character key={uuid()} data={dataItem} image={images[idx]}/>
        })    
      }
      
    </div>
  );
}

function Character(props) {
  const dataItems = [{'Gender': props.data.gender}, {'Year of Birth': props.data.birth_year}, {'Hair Color': props.data.hair_color}, {'Eye Color': props.data.eye_color}, {'Height': props.data.height}, {'Mass': props.data.mass}, {'Skin Color': props.data.skin_color}];

  return(
    <div className="character-card">
      <div className="card-leftSide">
        <figure className="img-wrapper">
          <img key={uuid()} className="char-img" src={props.image} alt=""/>
        </figure> 
        <div>
          <h3 className="character-name">{props.data.name}</h3>
        </div>
      </div>
      <div className="card-rightSide" >
        <ul className="character-profile">
          {
            dataItems.map((dataItem, idx) => {
              let key = Object.keys(dataItem);
              let value = Object.values(dataItem);
              return <li key={uuid()} className="info-list">{key}: {value}</li>
            })
          }
        </ul>
      </div>
    </div>
  )
}

export default App;
