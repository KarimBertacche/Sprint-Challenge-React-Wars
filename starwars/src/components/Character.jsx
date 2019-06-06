import React from 'react';
import './StarWars.css';
import uuid from "uuid";

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

export default Character;